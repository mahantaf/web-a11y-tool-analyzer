/**
 * @Failure: F80
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F80
 * @Criterion: 1.4.4
 * @Conformance: AA
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F80',
    targetElement: null,
    mutatedElement: null,
    originalElement: null,
    applicable: async function(page) {
        const inputElements = await page.$$('form > input');

        if (inputElements.length) {
            for (const input of inputElements) {
                const visible = await isVisibleAndAccessible(page, input);
                if (visible) {
                    const isSuitable = await input.evaluate(element => {
                        return element.type === 'text';
                    });

                    if (isSuitable) {
                        const iHandle = input;
                        this.targetElement = iHandle;
                        this.originalElement = iHandle;
                        return true;
                    }
                }
            }
        }

        return false;
    },
    apply: async function(page) {
        await page.addStyleTag({
            content: `
              .fix-size {
                font-size: 8pt; !important;
              }
            `,
        });

        await page.evaluate(element => {
            element.classList.add('fix-size');
        }, this.targetElement);

        this.mutatedElement = this.targetElement;
    }
}