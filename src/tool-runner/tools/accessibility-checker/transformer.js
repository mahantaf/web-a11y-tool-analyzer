exports.transform = (reports, { url }) => {

    // TODO: Filter out potential violations if you want
    return reports?.results.map(rp => ({
        toolCode: rp.ruleId,
        description: rp.message,
        // level: rp.level,
        nodes: [{
            htmlCode: rp.snippet,
            pointer: rp?.path?.dom
        }]
    }));
}