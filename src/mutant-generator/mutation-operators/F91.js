const {isVisibleAndAccessible} = require("./handler");
/**
 * @Failure: F91
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F91
 * @Criterion: 1.3.1
 * @Conformance: A
 * @Description:
 *
 */
// TODO: Debating on mutated element
module.exports = {
    title: 'F91',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const tables = await page.$$('table');
        if (tables.length) {
            for (const table of tables) {
                const visible = await isVisibleAndAccessible(page, table);
                if (visible) {
                    const isSuitable = await page.evaluate(element => {
                        const thElements = element.querySelectorAll('th');
                        return thElements.length > 0;
                    }, table);

                    if (isSuitable) {
                        const tHandle = table;
                        this.targetElement = tHandle;
                        this.originalElement = tHandle;
                        return true;
                    }
                }
            }
        }
        return false;
    },
    apply: async function(page) {

        await page.evaluate(element => {
            element.querySelectorAll('th').forEach((th) => {
                const td = document.createElement('td');
                td.innerHTML = th.innerHTML;
                th.parentNode.replaceChild(td, th);
            });
        }, this.targetElement);
        this.mutatedElement = this.targetElement;
    }
}