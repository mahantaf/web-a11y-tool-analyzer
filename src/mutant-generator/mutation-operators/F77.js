/**
 * @Failure: F77
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F77
 * @Criterion: 4.1.1
 * @Conformance: A
 * @Description:
 *
 */
module.exports = {
    title: 'F77',
    targetElement: null,
    mutatedElement: null,
    originalElement: null,
    applicable: async function(page) {
        const elements = await page.$$('body *:not(script):not(style)');

        if (elements.length >= 2) {
            for (let i = 0; i < elements.length - 1; ++i) {
                const firstElement = elements[i];
                const secondElement = elements[i + 1];

                const isSuitable = await page.evaluate((element1, element2) => {
                        return element1.id !== element2.id;
                }, firstElement, secondElement);

                if (isSuitable) {
                    this.targetElement = firstElement;
                    this.originalElement = secondElement;
                    return true;
                }
            }
        }

        // const elementWithId = $('[id]').first();
        //
        // if (elementWithId.length) {
        //     this.targetElement = elementWithId;
        //     this.originalElement = elementWithId.next();
        //     return true;
        // }
        // return false;
    },
    apply: async function(page) {
        await page.evaluate((element1, element2) => {
            const commonId = 'common-id';
            element1.id = commonId;
            element2.id = commonId;
        }, this.targetElement, this.originalElement);

        this.mutatedElement = this.originalElement;

        // const id = this.targetElement.attr('id');
        // this.targetElement.next().attr('id', id);
        //
        // this.mutatedElement = this.targetElement.next();
    }
}