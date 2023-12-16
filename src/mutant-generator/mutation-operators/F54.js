/**
 * @Failure: F54
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F54
 * @Criterion: 2.1.3
 * @Conformance: A
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");
module.exports = {
    title: 'F54',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const elementsWithOnclick = await page.$$('[onclick]');
        if (elementsWithOnclick.length) {
            for (const element of elementsWithOnclick) {
                const visible = await isVisibleAndAccessible(page, element);
                if (visible) {
                    const eHandle = element;
                    this.targetElement = eHandle;
                    this.originalElement = eHandle;
                    return true;
                }
            }
        }

        return false;

    },
    apply: async function(page) {

        await this.targetElement.evaluate((el) => {
            el.setAttribute('onmousedown', el.getAttribute('onclick'));
            el.removeAttribute('onclick');
        });

        this.mutatedElement = this.targetElement;
    }
}