const aChecker = require("accessibility-checker");
const { v4: uuidv4 } = require('uuid');

exports.run = async (url, html, transformer) => {
    const label = `Failure-${uuidv4()}`;
    const { report }  = await aChecker.getCompliance(url, label);
    return transformer.transform(report, { url })
}