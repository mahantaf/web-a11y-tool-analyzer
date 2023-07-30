exports.transform = (reports, { url }) => {
    return reports.violations.map(r => ({
        toolCode: r.id,
        description: r.description,
        nodes: r.nodes.map(n => ({
            htmlCode: n.html,
            pointer: n.target?.[0],
        }))
    }));
}