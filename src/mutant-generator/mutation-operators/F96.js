/**
 * @Failure: F96
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F96
 * @Criterion: 2.5.3
 * @Conformance: A
 * @Description:
 *
 */

const utils = require('./utils');
const { isVisibleAndAccessible } = require("./handler");

module.exports = {
    title: 'F96',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const buttons = await page.$$('button');

        if (buttons.length) {
            for (const button of buttons) {
                const visible = isVisibleAndAccessible(page, button);
                if (visible) {
                    const isSuitable = await page.evaluate(element => {
                        const hasOnlyText = element.childElementCount === 0 && element.textContent.trim() !== '';
                        const hasAriaLabel = element.hasAttribute('aria-label');
                        return hasOnlyText && hasAriaLabel;
                    }, button);

                    if (isSuitable) {
                        const bHandle = button;
                        this.targetElement = bHandle;
                        this.originalElement = bHandle;
                        return true;
                    }
                }
            }
        }
        return false;
    },
    apply: async function(page) {

        const randomString = utils.generateRandomString();
        await page.evaluate((element, ariaLabel) => {
            element.setAttribute('aria-label', ariaLabel)
        }, this.targetElement, randomString);
        this.mutatedElement = this.targetElement;
    }
}