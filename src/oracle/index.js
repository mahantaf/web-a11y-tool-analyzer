const findMutatedElementIssues = (failures) => {
    const output = {
        element: null,
        failures: []
    }
    const elementFailures = [];
    for (const failure of failures) {
        const mutatedElement = failure.nodes.find(node => !!node.mutationId);
        if (mutatedElement) {
            elementFailures.push({
                code: failure.toolCode,
                description: failure.description,
                tag: mutatedElement?.pointerTag,
                html: mutatedElement?.htmlCode
            });
        }
    }
    if (elementFailures.length) {
        output.element = elementFailures[0]?.tag;
        output.failures = elementFailures;
    }
    return output;
}

const compare = (originalIssues, mutatedIssues) => {
    const newIssues = [];
    for (const issue of mutatedIssues)
        if (!originalIssues.find(i => i.code === issue.code))
            newIssues.push(issue);
    return newIssues
}

exports.run = (original, mutated) => {
    const result = {};
    for (const tool of Object.keys(original.results)) {

        result[tool] = {};

        const originalElementIssues = findMutatedElementIssues(original.results[tool].failures);
        const mutatedElementIssues = findMutatedElementIssues(mutated.results[tool].failures)

        const newIssues = compare(originalElementIssues.failures, mutatedElementIssues.failures);

        result[tool]['originalIssues'] = originalElementIssues;
        result[tool]['mutatedIssues'] = mutatedElementIssues;
        result[tool]['newIssues'] = newIssues;

        if (newIssues.length) {
            result[tool]['killed'] = 1;
        } else {
            result[tool]['killed'] = 0;
        }
    }
    return result;
}