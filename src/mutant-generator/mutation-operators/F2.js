/**
 * @Failure: F2
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F2
 * @Criterion: 1.3.1
 * @Conformance: A
 * @Description:
 * Check if there is any <h2> on the page
 */

const { isVisibleAndAccessible } = require("./handler");

module.exports = {
    title: 'F2',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const headerElements = await page.$$('h2');
        if (headerElements.length) {
            for (const heading of headerElements) {
                const visible = await isVisibleAndAccessible(page, heading);
                if (visible) {
                    const isSuitableType = await page.evaluate(element => {
                        const hasChildElements = element.children.length > 0;
                        const hasOnlyTextContent = (
                            element.childNodes.length === 1 &&
                            element.firstChild.nodeType === Node.TEXT_NODE
                        );
                        return !hasChildElements && hasOnlyTextContent;
                    }, heading);

                    if (isSuitableType) {
                        const hHandle = heading;
                        this.targetElement = hHandle;
                        this.originalElement = hHandle;
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
              .p-class {
                font-size: 1.5em;
                font-weight: bold;
                margin-block-start: 0.67em;
                margin-block-end: 0.67em;
              }
            `,
        });

        await page.evaluate(element => {
            const pElement = document.createElement('p');
            for (const { name, value } of element.attributes) {
                pElement.setAttribute(name, value);
            }
            pElement.innerHTML = element.innerHTML;
            pElement.classList.add('p-class');

            element.parentNode.replaceChild(pElement, element);
            this.mutatedElement = pElement;
        }, this.targetElement);
    }
}