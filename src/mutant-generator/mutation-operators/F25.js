/**
 * @Failure: F25
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F25
 * @Criterion: 2.4.2
 * @Conformance: A
 * @Description:
 *
 */

const utils = require('./utils');

module.exports = {
    title: 'F25',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const titleElement = await page.$('title');

        if (titleElement) {
            const pageTitle = await page.title();
            if (pageTitle && pageTitle.trim() !== '') {
                const tHandle = await titleElement.asElement();
                this.targetElement = tHandle;
                this.originalElement = tHandle;
                return true;
            }
        }

        // const title = $('title');
        // if (title && title.text().trim().length > 0) {
        //     this.targetElement = title;
        //     this.originalElement = title;
        //     return true;
        // }
        return false;
    },
    apply: async function(page) {
        const randomString = utils.generateRandomString();

        await page.evaluate((title) => {
            document.title = title;
        }, randomString);

        // this.targetElement.text(randomString);
        this.mutatedElement = this.targetElement;
    }
}