const axios = require('axios');
const config = require('config');
const path = require("path");
const fs = require('fs');

const client = axios.create({
    baseURL: config.get('tools.Wave.baseURL'),
    timeout: 30 * 1000,
    params: {
        key: config.get('tools.Wave.apiKey'),
        reporttype: config.get('tools.Wave.reportType')
    }
})

exports.run = async (url, html, transformer) => {

    try {
        // const { data } = await client.get("/api/request", { params: { url } });

        const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../wave.json')));
        console.log(data);
        if (data?.status?.success) {
            return transformer.transform(data, { url });
        }

    } catch (e) {
        console.log(e);
        console.log("Could not get data from WAVE api");
    }
    return [];
}