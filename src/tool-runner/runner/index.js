const logger = require('../logger');
const utils= require('../utils');
const fs = require('fs');
const config = require('config');
const puppeteer = require("puppeteer");
const tools= require('../tools');


/**
 * Standard format for result
 * Failure = {
 *     toolCode: '',
 *     description: '',
 *     nodes: [{
 *         htmlCode: Optional -> If available
 *         pointer: Optional -> If available
 *         pointerElement: CheerioObject of the pointing element
 *     }]
 * }
 * The report will be an array of failures
 */

exports.run = async (url) => {
    logger.info(`Tool runner for ${url}`);
    const output = {
        url: url,
        timestamp: new Date(Date.now()),
        results: {}
    }
    for (const tool of Object.keys(tools))
        if (config.get(`tools.${tool}.enable`))
            output.results[tool] = {failures: []};

    try {
        const html = await utils.downloadHTML(url);

        const browser = await puppeteer.launch();
        let page = await browser.newPage();

        try {
            await page.goto(url, {waitUntil: 'load', timeout: 30 * 1000});
        } catch (e) {
            logger.error(`Problem in loading the page in puppeteer: ${e}`);
            logger.error('Setting page to null to proceed execution');
            page = null;
        }

        for (const tool of Object.keys(tools)) {
            if (config.get(`tools.${tool}.enable`)) {
                const {runner, transformer} = tools[tool];
                try {
                    logger.info(`Running ${tool}`);
                    const result = await runner.run(url, html, transformer);
                    logger.info(`Bundling pointers to elements`);
                    await bundleElements(tool, result, page, html);
                    output.results[tool] = {failures: result};
                } catch (e) {
                    logger.error(`Problem in running ${tool} at ${url}: ${e}`);
                }
            }
        }
        await browser.close();
    } catch (e) {
        logger.error(`Problem in downloading and browsing at ${url}: ${e}`);
    }
    return output;
}

const bundleElements = async (tool, result, page, html) => {
    const reportFormat = config.get(`tools.${tool}.reportFormat`);
    for (const failure of result)
        for (const node of failure?.nodes) {
            const element = await utils.bundlePointerToHTML(node, page, html, reportFormat);
            if (element) {
                const{tagName,mutationId} = element;
                  node.pointerTag = tagName;
                  node.mutationId = mutationId;
            }
        }
}

const analysis = result => {
    // TODO: This is a temporary function just for lightweight analysis
    console.log('Total Failures:', result.length);
    let totalNodesReported = 0;
    let nullNodes = [];
    for (const r of result) {
        totalNodesReported += r.nodes.length;
        nullNodes = nullNodes.concat(r.nodes.filter(node => !node.pointerTag));
    }
    console.log('Total Nodes:', totalNodesReported);
    console.log('Total Null Nodes:', nullNodes.length);
    // fs.writeFileSync("./result.json", JSON.stringify(nullNodes));
}