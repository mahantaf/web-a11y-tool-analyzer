exports.transform = (reports, { url }) => {
    const failures = [];

    for (const key of Object.keys(reports[url]['modules'])) {
        const assertions = reports[url]['modules'][key]['assertions'];

        failures.push(...Object.keys(assertions).map(assertionKey => {
            if (assertions[assertionKey].metadata.failed > 0 || assertions[assertionKey].metadata.warning > 0) {
                const { name, code, metadata, results } = assertions[assertionKey];
                return { toolCode: code, description: name, nodes: results.map(r => r.elements?.[0] || null ) }
            }
        }).filter(Boolean));
    }
    return failures;
}