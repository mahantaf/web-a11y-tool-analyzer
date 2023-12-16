/**
 * @Failure: F94
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F94
 * @Criterion: 1.4.4
 * @Conformance: AA
 * @Description:
 *
 */
const { isVisibleAndAccessible } = require("./handler");
module.exports = {
    title: 'F94',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {
        const paragraphs = await page.$$('p');

        if (paragraphs.length) {
            for (const paragraph of paragraphs) {
                const visible = await isVisibleAndAccessible(page, paragraph);
                if (visible) {
                    const isSuitable = await page.evaluate(element => {
                        const textContent = element.textContent;
                        return textContent.trim() !== '';
                    }, paragraph);

                    if (isSuitable) {
                        const pHandle = paragraph;
                        this.targetElement = pHandle;
                        this.originalElement = pHandle;
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
              .fix-size {
                font-size: 2vh !important;
              }
            `,
        });

        await page.evaluate(element => {
            element.classList.add('fix-size');
        }, this.targetElement);

        this.mutatedElement = this.targetElement;
    }
}