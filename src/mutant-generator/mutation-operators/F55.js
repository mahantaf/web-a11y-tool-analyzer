/**
 * @Failure: F55
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F55
 * @Criterion: 2.1.1, 3.2.1
 * @Conformance: A
 * @Description:
 *
 */
module.exports = {
    title: 'F55',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const allAnchorTexts = await page.$$('a');

        let focusedElement;
        let currentIndex = 0;

        if (allAnchorTexts.length) {
            while (currentIndex < allAnchorTexts.length) {
                await page.keyboard.press('Tab');
                focusedElement = await page.evaluateHandle(() => document.activeElement);

                const isAnchor = await page.evaluate((element) => element.tagName.toLowerCase() === 'a', focusedElement);
                if (isAnchor) {
                    currentIndex++;
                    const aHandle = await focusedElement.asElement();
                    this.targetElement = aHandle;
                    this.originalElement = aHandle;
                    return true;
                }
            }
        }
        return false;
    },
    apply: async function(page) {
        await this.targetElement.evaluate(element => {
            element.setAttribute('onfocus', 'this.blur();');
        });
        this.mutatedElement = this.targetElement;
    }
}