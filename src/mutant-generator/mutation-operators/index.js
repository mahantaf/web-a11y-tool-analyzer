const fs = require('fs');
const config = require('../../config');

exports.import = () => {
    const files = fs.readdirSync(__dirname);
    const index = files.findIndex(f => f === 'index.js');
    files.splice(index, 1);
    return files.map(file => {
        const fileName = file.split('.');
        if (config.failures[fileName[0]]) {
            return require(`./${fileName[0]}`);
        }
    }).filter(Boolean);
}

exports.addMutationId = async (page, operator) => {
    if (operator.mutatedElement) {
        await page.evaluate((element, title) => {
            element.setAttribute('data-mutation-id', title);
        }, operator.mutatedElement, operator.title);
    }
}

exports.addOriginalId = async (page, operator) => {
    if (operator.originalElement) {
        await page.evaluate((element, title) => {
            element.setAttribute('data-mutation-id', title);
        }, operator.originalElement, operator.title);
    }
}