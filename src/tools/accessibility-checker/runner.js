const aChecker = require("accessibility-checker");

exports.run = async (url, html, transformer) => {
    const label = `Failure_${Math.floor(Math.random() * 10000)}`;
    const { report }  = await aChecker.getCompliance(url, label);
    return transformer.transform(report, { url })
}