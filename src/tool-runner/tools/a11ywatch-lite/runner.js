const a11yWatch = require("@a11ywatch/a11ywatch");

exports.run = async (url, html, transformer) => {
  const data = (await a11yWatch.scan({ url: url })).data
    return transformer.transform(data, { url })
}