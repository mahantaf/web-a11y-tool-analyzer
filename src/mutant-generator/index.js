const puppeteer = require('puppeteer');

const fileManager = require('./file-manager');
const mutationOperators = require('./mutation-operators');
const mappings = require('./mutation-operators/mapping');

(async () => {
    console.log('Starting Mutant Generation');
    const browser = await puppeteer.launch({ headless: "new" });
    const websites = fileManager.loadHtmlPath();
    const results = {};
    const times = {};
    const totalStartTime = new Date();
    for (const { html, website} of websites) {
        const websiteMutantCreationStartTime = new Date();
        console.log(`Creating Mutants For ${website}`);
        results[website] = {};
        times[website] = {};

        const page = await browser.newPage();
        await page.goto(html);

        const originalHTML = await page.content();

        fileManager.initResultDirectory(website, originalHTML);
        for (const operator of mutationOperators.import()) {
            try {
                const mutantPage = await browser.newPage();
                await mutantPage.goto(html);

                try {
                    if (await operator.applicable(mutantPage)) {
                        const mutantCreationStartTime = new Date();
                        fileManager.createMutantDirectory(operator, website);

                        await mutationOperators.addOriginalId(mutantPage, operator);
                        const originalHTMLWithMutationId = await mutantPage.content();
                        fileManager.saveHtml(website, originalHTMLWithMutationId, operator, true);

                        await operator.apply(mutantPage);

                        await mutationOperators.addMutationId(mutantPage, operator);
                        const mutatedHTML = await mutantPage.content();
                        fileManager.saveHtml(website, mutatedHTML, operator, false);

                        results[website][mappings[operator.title]] = 1;
                        times[website][mappings[operator.title]] = new Date() - mutantCreationStartTime;
                    } else {
                        results[website][mappings[operator.title]] = 0;
                        times[website][mappings[operator.title]] = '-';
                    }
                } catch (e) {
                    console.log(`Error in creating mutants for ${website}: Error in operator: ${operator.title}:\n ${e}`);
                    results[website][mappings[operator.title]] = 0;
                }

                await mutantPage.close();
            } catch(e) {
                results[website][mappings[operator.title]] = 0;
            }
        }
        times[website]['total'] = new Date() - websiteMutantCreationStartTime;
        fileManager.copyRelatedFiles(website);
        await page.close();
    }
    fileManager.saveResult(JSON.stringify(results));
    await browser.close();
    times['total'] = new Date() - totalStartTime;
    console.log(JSON.stringify(times));
})()

