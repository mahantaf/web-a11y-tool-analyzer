const fs = require('fs');
const path = require("path");

const failureMapping = require('./failure-mapping');
const mapping = require('../mapping');

const revise = () => {
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, '../../', 'final_result.json')));
    for (const website in result) {
        for (let failure in result[website]) {
            for (const tool in result[website][failure]) {
                if (result[website][failure][tool]?.mutatedIssues?.failures?.length) {
                    const code = failureMapping[mapping[failure]][tool];
                    let killed = 0;
                    for (const issue of result[website][failure][tool]?.mutatedIssues?.failures) {
                        if (issue.code === code) {
                            killed = 1;
                            break;
                        }
                    }
                    if (result[website][failure][tool].killed !== killed)
                        console.log(`[${website}][${failure}][${tool}] Inconsistency Resolved`);
                    result[website][failure][tool].killed = killed;
                }
            }
        }
    }
    fs.writeFileSync(path.join(__dirname, '../../', 'final_result_improved.json'), JSON.stringify(result));
}

revise();