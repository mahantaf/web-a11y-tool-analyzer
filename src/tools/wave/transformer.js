exports.transform = (reports, { url }) => {
    const failures = [];
    const { categories } = reports;

    for (const key of Object.keys(categories)) {
       if (['error', 'contrast', 'alert'].includes(key)) {
           const items = categories[key]?.items;
           failures.push(...Object.keys(items).map(itemKey => {
               const item = items[itemKey];
              return {
                toolCode: item?.id,
                description: item?.description,
                nodes: item?.xpaths.map(xpath => ({
                    htmlCode: null,
                    pointer: xpath.toLowerCase().replace("html", "html[1]")
                }))
              }
           }));
       }
    }
    return failures;
}