const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const ExcelJS = require('exceljs');
const mapping = require('./mapping');

(async () => {

    const resultFile = fs.readFileSync(path.join(__dirname, '../', 'final_result_improved.json'));
    const results = JSON.parse(resultFile);

    const tools = ["QualWeb", "AChecker", "Axe", "continuum", "a11ywatchLite", "Wave"];
    // const tools = ["a11ywatchLite", "continuum"];

    for (const tool of tools) {
        console.log("Tool:", tool);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');

        const readStream = fs.createReadStream(path.join(__dirname, '../resources', 'mutation_result.csv'));
        const rows = [];
        try {
            await new Promise((resolve, reject) => {
                readStream
                    .pipe(csv())
                    .on('headers', (headers) => {
                        rows.push(headers);
                    })
                    .on('data', (row) => {
                        const website = row['Website'];
                        for (const column of Object.keys(row)) {
                            if (column !== 'Website') {
                                if (row[column] === '1') {
                                    // const failure = mapping[column];
                                    const failure = column;
                                    if (results?.[website]?.[failure]?.[tool]) {
                                        const killed = results?.[website]?.[failure]?.[tool]?.killed;
                                        if (killed === 1) {
                                            row[column] = 'Killed';
                                        } else {
                                            row[column] = 'Alive';
                                        }
                                    } else {
                                        row[column] = 1;
                                    }
                                } else {
                                    row[column] = 0;
                                }
                            }
                        }
                        rows.push(Object.values(row));
                    })
                    .on('end', () => {
                        resolve();
                    })
                    .on('error', (error) => {
                        reject(error);
                    });
            });
        } catch (e) {
            console.log(e);
        }


        worksheet.addRows(rows);
        worksheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {
                if (cell.value === 'Killed') {
                    cell.value = 1;
                    cell.fill = {
                        type: 'pattern',
                        pattern:'solid',
                        fgColor: { argb:'FFB6D7A7' }
                    };
                } else if (cell.value === 'Alive') {
                    cell.value = 1;
                    cell.fill = {
                        type: 'pattern',
                        pattern:'solid',
                        fgColor: { argb:'FFEA9999' }
                    };
                }
            });
        });

        await workbook.xlsx.writeFile(path.join(__dirname, '../analysis', `${tool}_output.xlsx`));
    }
})();