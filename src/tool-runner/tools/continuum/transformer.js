exports.transform = (reports, { url }) => {
    return reports.map(concern => ({
        toolCode: concern.bestPracticeId,
        description: concern.attribute,
        nodes: [{
            htmlCode: concern.element,
            pointer: concern?.path
        }]
    }));
}

// exports.transform = (reports, { url }) => {
//     const groupedData = reports.reduce((result, concern) => {
//         const { bestPracticeId, path, element,attribute } = concern;
//         if (!result[bestPracticeId]) {
//             result[bestPracticeId] = {
//                 "toolCode": bestPracticeId,
//                 "description": attribute,
//               nodes: []
//             };
//           }        
//           const node = {
//             htmlCode:element,
//             pointer:path
            
//           };
//           result[bestPracticeId].nodes.push(node);        
//           return result;
//         }, {});
//     console.log("hello");
//       return Object.values(groupedData);
// }