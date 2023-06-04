const config = require('config');
const fs = require('fs');
const runner = require('./runner');
const oracle = require('./oracle');
const path = require("path");
const logger = require('./logger');

(async () => {
    const baseURL = config.get('websitesBaseURL');
    const operatorResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources', 'mutation_result.json')));

    const result = {}
    logger.info('Tool Runner & Analyzer Started!');

    for (const website of Object.keys(operatorResult)) {
        result[website] = {};
        logger.info(`Analyzing ${website}`);
        for (const mutant of Object.keys(operatorResult[website])) {
            if (operatorResult[website][mutant] === 1) {

                const originalURL = `${baseURL}/${website}/mutants/${mutant}/index.html`;
                const mutatedURL = `${baseURL}/${website}/mutants/${mutant}/${mutant}.html`;

                // TODO: Following two ops can be done at the same time using Promise.all() or Promise.allResolved()
                const originalRunResults = await runner.run(originalURL);
                const mutatedRunResults = await runner.run(mutatedURL);

                result[website][mutant] = oracle.run(originalRunResults, mutatedRunResults);
            }
        }
        fs.writeFileSync(path.join(__dirname, '../run_results', `${website}.json`), JSON.stringify(result));
    }
})();
