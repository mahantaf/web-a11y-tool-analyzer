const tools= require('../tools');
const logger = require('../logger');
const utils= require('../utils');

const fs = require('fs');
const config = require('config');
const puppeteer = require("puppeteer");

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

    const output = {
        url: url,
        timestamp: new Date(Date.now()),
        results: {}
    }
    logger.info(`Tool runner for ${url}`);
    try {
        const html = await utils.downloadHTML(url);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url, {waitUntil: 'load', timeout: 30 * 1000});

        for (const tool of Object.keys(tools)) {
            if (config.get(`tools.${tool}.enable`)) {
                const {runner, transformer} = tools[tool];
                try {
                    logger.info(`Running ${tool}`);
                    const result = await runner.run(url, html, transformer);
                    logger.info(`Bundling pointers to elements`)
                    await bundleElements(tool, result, page, html);
                    output.results[tool] = {failures: result};
                } catch (e) {
                    output.results[tool] = {failures: []};
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
            const { tagName, mutationId } = await utils.bundlePointerToHTML(node, page, html, reportFormat);
            node.pointerTag = tagName;
            node.mutationId = mutationId;
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