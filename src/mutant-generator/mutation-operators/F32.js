/**
 * @Failure: F32
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F32
 * @Criterion: 1.3.2
 * @Conformance: A
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F32',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const spanElements = await page.$$('span');
        if (spanElements.length) {
            for (const span of spanElements) {
                const visible = await isVisibleAndAccessible(page, span);
                if (visible) {
                    const spanText = await span.getProperty('textContent');
                    const text = await spanText.jsonValue();

                    if (text.split(/\s+/).length === 1) {
                        const sHandle = span;
                        this.targetElement = sHandle;
                        this.originalElement = sHandle;
                        return true;
                    }
                }
            }
        }

        return false;
    },
    apply: async function(page) {

        await this.targetElement.evaluate((element) => {
            element.textContent = element.textContent.trim().split('').join(' ');
        });

        this.mutatedElement = this.targetElement;
    }
}