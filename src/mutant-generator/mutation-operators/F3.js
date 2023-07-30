/**
 * @Failure: F3
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F3
 * @Criterion: 1.1.1
 * @Conformance: A
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");

function isAltDecorative(altAttributeValue) {
    const decorativeKeywords = ['decorative', 'decoration', 'placeholder', 'spacer', 'image'];
    const lowercasedAlt = altAttributeValue.toLowerCase();
    return decorativeKeywords.some(keyword => lowercasedAlt.includes(keyword));
}

module.exports = {
    title: 'F3',
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
                        const hasAltAttribute = element.hasAttribute('alt') && element.getAttribute('alt').trim() !== '';
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

    },
    apply: async function(page) {

        await this.targetElement.evaluate((el) => {

            const style = `
                width: ${el.offsetWidth}px;
                height: ${el.offsetHeight}px;
                background-image: url(${el.getAttribute('src')});
                background-repeat: no-repeat;
                background-position: top left;
                background-color: transparent;
                background-size: contain;
            `;

            const newElement = document.createElement('div');
            newElement.innerText = el.getAttribute('alt');
            newElement.style.cssText = 'display: inline-block; ' + style;
            el.replaceWith(newElement);
            this.mutatedElement = newElement;
        });
    }
}