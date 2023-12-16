const config = require('config');
const fs = require('fs');
const oracle = require('./oracle');
const path = require("path");
const logger = require('./logger');
const mapping = require('./mapping');
const runner = require('./runner');

(async () => {
    const baseURL = config.get('websitesBaseURL');
    const operatorResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../../resources', 'mutation_result.json')));

    const result = {}
    logger.info('Tool Runner & Analyzer Started!');

    for (const website of Object.keys(operatorResult)) {
        try {
            result[website] = {};
            logger.info(`Analyzing ${website}`);
            for (const mutant of Object.keys(operatorResult[website])) {
                if (operatorResult[website][mutant] === 1) {
                    try {

                        const originalURL = `${baseURL}/${website}/${mapping[mutant]}_original.html`;
                        const mutatedURL = `${baseURL}/${website}/${mapping[mutant]}.html`;

                        // TODO: Following two ops can be done at the same time using Promise.all() or Promise.allResolved()
                        const originalRunResults = await runner.run(originalURL);
                        const mutatedRunResults = await runner.run(mutatedURL);

                        result[website][mutant] = oracle.run(originalRunResults, mutatedRunResults);
                    } catch (e) {
                        console.log(`Error happened while running mutant`);
                        logger.error(`Error happened while running mutant ${mutant} for website ${website}: ${e}`);
                    }
                }
            }
        } catch (e) {
            console.log("Error happened while running for website")
            logger.error(`Error happened while running for website ${website}: ${e}`);
        }
        fs.writeFileSync(path.join(__dirname, '../../run_results', `${website}.json`), JSON.stringify(result));
    }
    console.log("Finished!");
    logger.info('Tool Runner & Analyzer Done!');
})();
