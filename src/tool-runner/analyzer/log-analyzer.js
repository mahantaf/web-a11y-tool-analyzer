const fs = require('fs');
const path = require('path');


const logFile = fs.readFileSync(path.join(__dirname, '../info.log'), 'utf-8');

const lines = logFile.split(/\r?\n/);
let times = [];
let mutant = "";
let website = "";
const result = {};

for (let i = 0; i < lines.length - 1; ++i) {
    const line = lines[i];

    if (line.includes('[INFO]')) {
        // console.log(line);
        const lineItems = line.split(" ");

        if (line.includes("original.html")) {
            if (times.length === 4) {
                const mutantSplit = mutant.split("/");
                const mutantName = (mutantSplit[mutantSplit.length - 1]).split("_")[0];
                result[website][mutantName] = times.reduce((a, b) => a + b) / times.length;
                times = [];

            }
            mutant = lineItems[5];
        }

        if (line.includes("Analyzing")) {
            website = lineItems[3];
            result[website] = {};
        }

        if (line.includes('Bundling')) {
            const nextLine = lines[i + 1];
            const nextLineItems = nextLine.split(" ");

            const startTime = new Date(lineItems[0]);
            const finishTime = new Date(nextLineItems[0]);

            times.push(finishTime - startTime);
        }
    }
}

console.log(JSON.stringify(result));
