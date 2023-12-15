/**
 * @Failure: F68
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F68
 * @Criterion: 4.1.2
 * @Conformance: A
 * @Description:
 *
 */
// TODO: Still same debating on mutatedElement & originalElement

const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F68',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const inputElements = await page.$$('form > input');

        if (inputElements.length) {
            for (const input of inputElements) {
                const visible = await isVisibleAndAccessible(page, input);
                if (visible) {
                    const isSuitable = await input.evaluate(element => {
                        const notAllowedTypes = ['image', 'hidden', 'submit', 'reset', 'button'];
                        const hasLabel = element.labels && element.labels.length > 0;
                        return !notAllowedTypes.includes(element.type) && hasLabel;
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

        // const form = $('form')
        //     .filter(function () {
        //         return $(this).find('input:not([type="image"],[type="hidden"], [type="submit"], [type="reset"], [type="button"])').length > 0;
        //     })
        //     .first();
        // if (form.length) {
        //     this.targetElement = form;
        //     this.originalElement = form.find('input:not([type="image"], [type="hidden"], [type="submit"], [type="reset"], [type="button"])').first();
        //     return true;
        // }
        return false;
    },
    apply: async function(page) {

        await this.targetElement.evaluate(element => {
            element.removeAttribute('placeholder');
            const labelsToRemove = Array.from(element.labels);
            labelsToRemove.forEach((label) => label.remove());
        });

        // this.targetElement.attr("id", "sampleForm");
        //
        // const input = this.targetElement.find('input:not([type="image"], [type="hidden"], [type="submit"], [type="reset"], [type="button"])').first();
        //
        // // 1. Remove <label> element wrapping the input
        // const labelElement = input.closest('label');
        // if (labelElement.length > 0) {
        //     labelElement.replaceWith(input);
        // }
        //
        // // 2. Remove aria-label attribute
        // input.removeAttr('aria-label');
        //
        // // 3. Remove title attribute
        // input.removeAttr('title');
        //
        // // 4. Remove aria-labelledby attribute and the corresponding element
        // const ariaLabelledBy = input.attr('aria-labelledby');
        // if (ariaLabelledBy) {
        //     input.removeAttr('aria-labelledby');
        //     $(`#${ariaLabelledBy}`).remove();
        // }
        //
        // // 5. Find the <label> tag pointing to the input's id using "for" attribute
        // const forAttr = input.attr('id');
        // if (forAttr) {
        //     const labelForInput = $(`label[for="${forAttr}"]`);
        //     if (labelForInput.length) {
        //         labelForInput.remove();
        //     }
        // }

        this.mutatedElement = this.targetElement;
    }
}