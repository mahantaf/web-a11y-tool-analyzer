/**
 * @Failure: F73
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F73
 * @Criterion: 1.4.1
 * @Conformance: A
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F73',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const allAnchorTexts = await page.$$('p > a');
        if (allAnchorTexts.length) {
            for (const anchorText of allAnchorTexts) {
                const visible = await isVisibleAndAccessible(page, anchorText);
                if (visible) {

                    const isDecorated = await anchorText.evaluate(element => {
                        const computedStyle = getComputedStyle(element);
                        const textDecoration = computedStyle.getPropertyValue('text-decoration');
                        const cursor = computedStyle.getPropertyValue('cursor');

                        // const text = element.textContent.trim()
                        // const  hasText = text && text !== '';

                        return textDecoration !== 'none' && cursor !== 'default';
                    });

                    if (isDecorated) {
                        const aHandle = await anchorText.asElement();
                        this.targetElement = aHandle;
                        this.originalElement = aHandle;

                        return true;
                    }
                }
            }
        }
        return false;
    },
    apply: async function(page) {
        await this.targetElement.evaluate(element => {
            element.setAttribute('style', 'text-decoration: none; cursor: default');
            element.setAttribute('onmouseover', "this.style.textDecoration='none'");
            element.setAttribute('onmouseout', "this.style.textDecoration='none'");
            element.setAttribute('onclick', "this.style.textDecoration='none'");
        });
        this.mutatedElement = this.targetElement;
    }
}