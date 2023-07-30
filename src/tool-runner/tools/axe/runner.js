const { AxePuppeteer } = require('@axe-core/puppeteer');
const Puppeteer = require('puppeteer');


exports.run = async (url, html, transformer) => {
    const browser = await Puppeteer.launch();
    const testPage = await browser.newPage();
    await testPage.setBypassCSP(true);
    await testPage.goto(url);

    const reports = await new AxePuppeteer(testPage).analyze();

    await browser.close();

    return transformer.transform(reports, { url });
}