/**
 * @Failure: F4
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F4
 * @Criterion: 2.2.2
 * @Conformance: A
 * @Description:
 *
 */
const {isVisibleAndAccessible} = require("./handler");
module.exports = {
    title: 'F4',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: async function(page) {

        const spanElements = await page.$$('span');

        if (spanElements.length) {
            for (const span of spanElements) {
                const visible = await isVisibleAndAccessible(page, span);
                if (visible) {
                    const sHandle = span;
                    this.targetElement = sHandle;
                    this.originalElement = sHandle;
                    return true;
                }
            }
        }

        // const span = $('span').first();
        // if (span.length) {
        //     this.targetElement = span;
        //     this.originalElement = span;
        //     return true;
        // }
        // return false;
    },
    apply: async function(page) {

        await page.addStyleTag({
            content: `
              .blink_me {
                animation: blinker 1s linear infinite;
              }
              @keyframes blinker {
                50% {
                    opacity: 0;
                }
              }
            `,
        });

        // $('style').append(`
        //     .blink_me {
        //         animation: blinker 1s linear infinite;
        //     }
        //     @keyframes blinker {
        //         50% {
        //             opacity: 0;
        //         }
        //     }
        // `);

        await page.evaluate(element => {
            element.classList.add('blink_me');
        }, this.targetElement);
        this.mutatedElement = this.targetElement;

        // this.targetElement.addClass('blink_me');
    }
}