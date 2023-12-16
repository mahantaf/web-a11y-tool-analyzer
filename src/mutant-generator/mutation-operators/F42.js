/**
 * @Failure: F42
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F42
 * @Criterion: 1.3.1, 2.1.1
 * @Conformance: A
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");
module.exports = {
    title: 'F42',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const aElements = await page.$$('a');
        if (aElements.length) {
            for (const a of aElements) {
                const visible = await isVisibleAndAccessible(page, a);
                if (visible) {
                    const isSuitableType = await a.evaluate((element) => {
                        const text = element.textContent.trim()
                        return text && text !== '';
                    });
                    if (isSuitableType) {
                        const aHandle = a;
                        this.targetElement = aHandle;
                        this.originalElement = aHandle;
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
              .a-decoration {
                text-decoration: underline; !important;
                cursor: pointer; !important;
                color: blue; !important;
              }
            `,
        });
        await page.evaluate(element => {
            const spanElement = document.createElement('span');
            for (const { name, value } of element.attributes) {
                if (name !== 'href') {
                    spanElement.setAttribute(name, value);
                } else {
                    spanElement.setAttribute('onclick', `window.location.href='${value}';`);
                }
            }
            spanElement.textContent = element.textContent;
            spanElement.classList.add('a-decoration');

            element.parentNode.replaceChild(spanElement, element);
            this.mutatedElement = spanElement;
        }, this.targetElement);
    }
}