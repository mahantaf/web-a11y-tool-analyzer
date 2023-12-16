const puppeteer = require("puppeteer");
const fileManager = require("./file-manager");
(async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const websites = fileManager.loadHtmlPath();

    for (const { html, website } of websites) {
        try {
            const page = await browser.newPage();
            await page.goto(html, {waitUntil: 'networkidle0'});

            const count = await page.evaluate(() => {
                const body = document.querySelector('body');
                function countAllElements(element) {
                    let count = 1; // Count the current element

                    const childNodes = element.childNodes;
                    for (let i = 0; i < childNodes.length; i++) {
                        if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
                            count += countAllElements(childNodes[i]); // Recursive call for child elements
                        }
                    }

                    return count;
                }
                return countAllElements(body);
            });
            console.log(count);
            await page.close();
        } catch (e) {
            console.log(`Error in counting elements for ${websites}:`, e);
        }
    }
    await browser.close();
})()