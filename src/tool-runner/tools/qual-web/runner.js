const { QualWeb } = require('@qualweb/core');
const config = require('config');

exports.run = async (url, html, transformer) => {
    const qualWeb = new QualWeb(config.get('tools.QualWeb.plugins'));

    await qualWeb.start(config.get('tools.QualWeb.clusterOptions'));

    const qualWebOptions = { url };
    const reports = await qualWeb.evaluate(qualWebOptions);

    await qualWeb.stop();

    return transformer.transform(reports, { url });
}