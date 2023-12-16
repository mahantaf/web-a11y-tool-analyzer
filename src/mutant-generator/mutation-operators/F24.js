/**
 * @Failure: F24
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F24
 * @Criterion: 1.4.3, 1.4.6, 1.4.8
 * @Conformance: AA, AAA
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");
module.exports = {
    title: 'F24',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const paragraphElements = await page.$$('p');
        if (paragraphElements.length) {
            for (const paragraph of paragraphElements) {
                const visible = await isVisibleAndAccessible(page, paragraph);
                if (visible) {
                    const pHandle = paragraph;
                    this.targetElement = pHandle;
                    this.originalElement = pHandle;
                    return true;
                }
            }
        }
        return false;
    },
    apply: async function(page) {
        await page.addStyleTag({
            content: `
              body { color: white; !important }
            `,
        });
        this.mutatedElement = this.targetElement;
    }
}