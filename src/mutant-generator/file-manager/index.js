const fs = require("fs");
const path = require("path");
const config = require('../../config');

exports.loadHtmlPath = () => {
    const websitesPath = path.join(__dirname, '../../../', config['websitesFolder']);
    return fs.readdirSync(websitesPath).map(website => {
        const websitePath = path.join('file:', websitesPath, website, 'index.html');
        return {html: websitePath, website}
    }).filter(Boolean);
}

exports.loadHtml = () => {
    const websitesPath = path.join(__dirname, '../../../', config['websitesFolder']);
    return fs.readdirSync(websitesPath).map(website => {
        const html = fs.readFileSync(path.join(websitesPath, website, 'index.html'));
        return { website, html };
    });
}

exports.initResultDirectory = (website, html) => {
    const resultPath = path.join(__dirname, '../../../', config['resultsFolder']);
    fs.mkdirSync(path.join(resultPath, website), { recursive: true });
    fs.writeFileSync(path.join(resultPath, website, 'index.html'), html);
}

exports.createMutantDirectory = (operator, website) => {
    const p = path.join(__dirname, '../../../', config['resultsFolder'], website);
    if (!fs.existsSync(p))
        fs.mkdirSync(p, { recursive: true })
}

const copyDirectoryContents = (sourceDir, destinationDir) => {

    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir);
    }

    const files = fs.readdirSync(sourceDir);
    files.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        const destinationPath = path.join(destinationDir, file);

        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory())
            copyDirectoryContents(sourcePath, destinationPath);
        else
            fs.copyFileSync(sourcePath, destinationPath);
    });
}

exports.copyRelatedFiles = (website) => {
    const websitePath = path.join(__dirname, '../../../', config['websitesFolder'], website);
    const resultPath = path.join(__dirname, '../../../', config['resultsFolder'], website);
    copyDirectoryContents(websitePath, resultPath);
}

exports.saveHtml = (website, html, operator, original) => {
    const p = path.join(__dirname, '../../../', config['resultsFolder'], website);
    if (original) {
        fs.writeFileSync(path.join(p, `${operator.title}_original.html`), html);
    } else {
        fs.writeFileSync(path.join(p, `${operator.title}.html`), html);
    }
}

exports.saveResult = (result) => {
    fs.writeFileSync(path.join(__dirname, '../../../', 'mutant_result.json'), result);
}