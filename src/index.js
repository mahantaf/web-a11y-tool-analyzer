const runner = require('./runner');
const oracle = require('./oracle');

(async () => {
    // TODO: We will change these two URLs once we serve our websites on a host

    const originalURL = 'http://localhost:3000';
    const mutatedURL = 'http://localhost:4000';
    try {
        // TODO: Can be done at the same time using Promise.all or Promise.allResolved

        const originalRunResults = await runner.run(originalURL);
        const mutatedRunResults = await runner.run(mutatedURL);

        oracle.run(originalRunResults, mutatedRunResults);

    } catch (e) {
        console.log(e);
    }
})();
