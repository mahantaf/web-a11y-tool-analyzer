/**
 * @Failure: F22
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F22
 * @Criterion: 3.2.5
 * @Conformance: AAA
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require('./handler');

module.exports = {
    title: 'F22',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function (page) {
        const spanElements = await page.$$('span');
        if (spanElements.length) {
            for (const span of spanElements) {
                const visible = await isVisibleAndAccessible(page, span);
                if (visible) {
                    const isSuitableType = await page.evaluate(element => {
                            const spanText = element.textContent.trim();
                            const typeOfOnclick = typeof element.onclick;

                            return (spanText !== '' && typeOfOnclick !== 'function');
                        }, span);

                    if (isSuitableType) {
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
    apply: async function (page) {
        await page.evaluate(element => {
            element.removeAttribute('class');
            element.removeAttribute('style');
            element.setAttribute('onclick', "window.open('https://google.com')");
        }, this.targetElement);
        this.mutatedElement = this.targetElement;
    }
}