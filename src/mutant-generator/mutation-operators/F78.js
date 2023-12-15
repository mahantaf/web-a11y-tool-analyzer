/**
 * @Failure: F78
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F78
 * @Criterion: 2.4.7, 1.4.11
 * @Conformance: AA
 * @Description:
 *
 */

const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F78',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function (page) {
        const allAnchorTexts = await page.$$('a');

        let focusedElement;
        let currentIndex = 0;
        if (allAnchorTexts.length) {
            while(currentIndex < allAnchorTexts.length) {
                await page.keyboard.press('Tab');
                focusedElement = await page.evaluateHandle(() => document.activeElement);

                const isAnchor = await page.evaluate((element) => element.tagName.toLowerCase() === 'a', focusedElement);
                if (isAnchor) {
                    currentIndex++;

                    const computedOutlineStyle = await page.evaluate((element) => {
                        return getComputedStyle(element).outlineStyle;
                    }, focusedElement);

                    if (computedOutlineStyle !== 'none') {
                        const visible = await isVisibleAndAccessible(page, focusedElement);
                        if (visible) {
                            const aHandle = await focusedElement.asElement();
                            this.targetElement = aHandle;
                            this.originalElement = aHandle;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    },
    apply: async function (page) {
        await page.addStyleTag({ content: '.no_outline { outline: none !important; }' });
        await this.targetElement.evaluate((element) => {
            element.classList.add('no_outline');
        });
        this.mutatedElement = this.targetElement;
    }
}