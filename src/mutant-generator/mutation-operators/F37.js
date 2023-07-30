/**
 * @Failure: F37
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F37
 * @Criterion: 3.2.2
 * @Conformance: A
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F37',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const inputs = await page.$$('input');
        if (inputs.length) {
            for (const input of inputs) {
                const visible = await isVisibleAndAccessible(page, input);
                if (visible) {
                    const isSuitable = await input.evaluate(element => {
                        const type = element.getAttribute('type');
                        return type === 'radio' && typeof element.onclick !== 'function';
                    });

                    if (isSuitable) {
                        const iHandle = await input.asElement();
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
            element.setAttribute('onclick', "window.open('https://google.com')")
        });
        this.mutatedElement = this.targetElement;
    }
}