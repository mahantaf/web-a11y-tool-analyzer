/**
 * @Failure: F89
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F89
 * @Criterion: 2.4.4, 4.1.2
 * @Conformance: A
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");
module.exports = {
    title: 'F89',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const anchorElements = await page.$$('a');

        if (anchorElements.length) {
            for (const anchorElement of anchorElements) {
                const visible = await isVisibleAndAccessible(page, anchorElement);
                if (visible) {
                    const isSuitable = await anchorElement.evaluate(anchor => {
                        const hasImgChildOnly = anchor.childElementCount === 1 && anchor.firstElementChild.tagName.toLowerCase() === 'img';
                        const hasNoText = anchor.textContent.trim() === '';
                        const hasAriaLabel = anchor.hasAttribute('aria-label');
                        const hasAriaLabelledBy = anchor.hasAttribute('aria-labelledby');
                        const img = anchor.querySelector('img');
                        const hasNonEmptyAlt = img && img.alt.trim() !== '';

                        return hasImgChildOnly && hasNoText && (hasAriaLabel || hasAriaLabelledBy || hasNonEmptyAlt);
                    });

                    if (isSuitable) {
                        const aHandle = anchorElement;
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

        await page.evaluate(element => {
            element.removeAttribute('aria-label');
            element.removeAttribute('aria-labelledby');
            element.removeAttribute('title');

            const img = element.querySelector('img');
            img.setAttribute('alt', '');

        }, this.targetElement);

        this.mutatedElement = this.targetElement;
    }
}