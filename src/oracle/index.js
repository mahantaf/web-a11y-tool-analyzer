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

    for (const tool of Object.keys(original.results)) {
        const originalElementIssues = findMutatedElementIssues(original.results[tool].failures);
        const mutatedElementIssues = findMutatedElementIssues(mutated.results[tool].failures)

        console.log(`---------------${tool}---------------`);

        const newIssues = compare(originalElementIssues.failures, mutatedElementIssues.failures);
        if (newIssues.length) {
            console.log(`${tool} killed the mutant :)`);
            // console.log(newIssues);
        } else {
            console.log(`${tool} did not kill the mutant :(`);
        }
    }
}