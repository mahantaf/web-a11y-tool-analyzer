const tools= require('../tools');
const utils= require('../utils');
const config = require('config');
const fs = require('fs');

const run = async (url) => {
    const output = {
        url: url,
        timestamp: new Date(Date.now()),
        results: {}
    }
    for (const tool of Object.keys(tools))
        if (config.get(`tools.${tool}.enable`))
            output.results[tool] = { failures: [] };

    try {
        const html = await utils.downloadHTML(url);

        for (const tool of Object.keys(tools)) {
            if (config.get(`tools.${tool}.enable`)) {
                console.log("Running:", tool);
                const {runner, transformer} = tools[tool];
                try {
                    const result = await runner.run(url, html, transformer);
                    output.results[tool] = { failures: result };
                } catch (e) {
                    console.log(`Problem in running ${tool} at ${url}: ${e}`);
                }
            }
        }
    } catch (e) {
        console.log(e)
    }
    return output;
}

const result = {

}
const compare = (mutant, mainFailures, mutatedFailures) => {

    result[mutant] = {};

    for (const tool of Object.keys(mainFailures.results)) {

        result[mutant][tool] = {};

        const toolIssuesMain = mainFailures.results[tool]?.failures || [];
        const toolIssuesMutated = mutatedFailures.results[tool]?.failures || [];

        const newIssues = [];

        for (const mutatedIssue of toolIssuesMutated) {
            if (!toolIssuesMain.find(f => f.toolCode === mutatedIssue.toolCode)) {
                newIssues.push(mutatedIssue);
            }
        }

        for (const failure of toolIssuesMain) {
            const mutatedFailure = toolIssuesMutated.find(f => f.toolCode === failure.toolCode);
            if (mutatedFailure) {
                if (failure?.nodes.length !== mutatedFailure?.nodes.length) {
                   newIssues.push(mutatedFailure);
                }
            }
        }

        result[mutant][tool]['failures'] = newIssues;
    }
}

(async () => {

    const mainFailures = await run('http://localhost:8080/test.com/index.html');

    const data = JSON.parse('{"test.com":{"F2":1,"F22":1,"F24":1,"F25":1,"F3":1,"F30":1,"F32":1,"F36":1,"F37":1,"F4":1,"F42":1,"F44":1,"F54":1,"F55":1,"F65":1,"F68":1,"F73":1,"F77":1,"F78":1,"F80":1,"F89":1,"F9":1,"F91":1,"F94":1,"F96":1}}');

    for (const failure of Object.keys(data['test.com'])) {
        const url = `http://localhost:8080/test.com/${failure}.html`;
        const mutatedFailures = await run(url);
        compare(failure, mainFailures, mutatedFailures);
        fs.writeFileSync('runner_debugger.json', JSON.stringify(result));
    }

    console.log('Finished');
})()