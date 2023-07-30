/**
 * @Failure: F36
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F36
 * @Criterion: 3.2.2
 * @Conformance: A
 * @Description:
 *
 */
// TODO: Add more input types like password, search, number, tel, ...
    // TODO: Debating on mutationElement and originalElement

const utils = require('./utils');
const {isVisibleAndAccessible} = require("./handler");

module.exports = {
    title: 'F36',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const forms = await page.$$('form');
        if (forms.length) {
            for (const form of forms) {
                const visible = await isVisibleAndAccessible(page, form);
                if (visible) {
                    const inputElements = await form.$$('input');
                    const lastInputElement = inputElements[inputElements.length - 1];

                    if (lastInputElement) {
                        const isSuitableType = await lastInputElement.evaluate(element => {
                            const type = element.getAttribute('type');
                            return ['text', 'email', 'password', 'search', 'number', 'tel'].includes(type) && typeof element.onchange !== 'function';
                        });
                        if (isSuitableType) {
                            const fHandle = await form.asElement();
                            const iHandle = await lastInputElement.asElement();
                            this.targetElement = fHandle;
                            this.originalElement = iHandle;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    },
    apply: async function(page) {
        await this.targetElement.evaluate(element => {
            element.setAttribute('id', "form_12345");
        });
        await this.originalElement.evaluate(element => {
            element.setAttribute('onchange', `form_12345.submit();`);
        });
    }
}