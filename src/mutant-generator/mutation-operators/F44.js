/**
 * @Failure: F44
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F44
 * @Criterion: 2.4.3
 * @Conformance: A
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F44',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const ulElements = await page.$$('ul');

        if (ulElements.length) {
            for (const ul of ulElements) {
                const visible = await isVisibleAndAccessible(page, ul);
                if (visible) {
                    const isSuitableType = await ul.evaluate(element => {
                        const liElements = element.querySelectorAll('li');
                        const hasTwoLiWithATag = Array.from(liElements).every((li) => li.querySelector('a'));
                        return !!(liElements.length >= 2 && hasTwoLiWithATag);
                    });

                    if (isSuitableType) {
                        const uHandle = ul;
                        this.targetElement = uHandle;
                        this.originalElement = uHandle;
                        return true;
                    }
                }
            }
        }

        // const ul = $('ul').filter((index, element) => {
        //     const liElements = $(element).find('li');
        //     return liElements.length >= 2 && liElements.find('a').length === liElements.length;
        // }).first();
        //
        // if (ul.length) {
        //     this.targetElement = ul;
        //     this.originalElement = ul;
        //     return true;
        // }
        return false;
    },
    apply: async function(page) {

        const liElements = await this.targetElement.$$('li');
        let tabindex = liElements.length;

        for (const liElement of liElements) {
            const aElement = await liElement.$('a');
            await aElement.evaluate((element, tabindex) => {
                element.setAttribute('tabindex', tabindex);
            }, tabindex);

            tabindex--;
        }
        // const liElements = this.targetElement.find('li');
        // liElements.each((index, liElement) => {
        //     const aElement = $(liElement).find('a');
        //     const tabindexValue = liElements.length - index;
        //     aElement.attr('tabindex', tabindexValue);
        // })
        this.mutatedElement = this.targetElement;
    }
}