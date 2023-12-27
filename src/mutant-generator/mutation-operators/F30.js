/**
 * @Failure: F30
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F30
 * @Criterion: 1.1.1, 1.2.1
 * @Conformance: A
 * @Description:
 *
 */
const utils = require('./utils');
const {isVisibleAndAccessible} = require("./handler");

module.exports = {
    title: 'F30',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const imageElements = await page.$$('img');

        if (imageElements.length) {
            for (const image of imageElements) {
                const visible = await isVisibleAndAccessible(page, image);
                if (visible) {
                    const isSuitableType = await page.evaluate(element => {
                        const hasAltAttribute =
                            element.hasAttribute('alt') &&
                            element.getAttribute('alt').trim() !== '';
                        const isNestedInsideAnchor = element.closest('a') !== null;
                        const hasOffset = element.offsetWidth > 0 && element.offsetHeight > 0;

                        return (hasAltAttribute && !isNestedInsideAnchor && hasOffset);
                    }, image);
                    if (isSuitableType) {
                        const iHandle = image;
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

        const randomString = utils.generateRandomString();
        await this.targetElement.evaluate((element, newAlt) => {
            element.setAttribute('alt', newAlt);
        }, randomString)

        // $(this.targetElement).parent().removeAttr('data-alt');
        // const randomString = utils.generateRandomString();
        // $(this.targetElement).attr('alt', randomString);
        this.mutatedElement = this.targetElement;
    }
}