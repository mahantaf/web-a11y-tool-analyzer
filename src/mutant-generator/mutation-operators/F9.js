/**
 * @Failure: F9
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F9
 * @Criterion: 3.2.5
 * @Conformance: AAA
 * @Description:
 *
 */

// TODO: Confirm here on mutated element and original element (I am debating between <form> and <input> inside form)

const { isVisibleAndAccessible } = require("./handler");

module.exports = {
    title: 'F9',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const allInputs = await page.$$('form > input');

        if (allInputs.length) {
            for (const input of allInputs) {
                const visible = await isVisibleAndAccessible(page, input);
                if (visible) {
                    const isSuitableType = await input.evaluate(element => {
                        const type = element.getAttribute('type');
                        return !['image', 'hidden', 'submit', 'reset', 'button'].includes(type) && typeof element.onblur !== 'function';
                    });

                    if (isSuitableType) {
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
        await this.targetElement.evaluate(element => {
            element.setAttribute('onblur', "window.open('https://www.google.com')");
        });
        this.mutatedElement = this.targetElement;
    }
}