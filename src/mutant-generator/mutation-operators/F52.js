/**
 * @Failure: F52
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/52
 * @Criterion: 3.2.5
 * @Conformance: AAA
 * @Description:
 *
 */
module.exports = {
    title: 'F52',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: function($) {
        return true;
    },
    apply: function($) {
        const scriptContent = `
          window.onload = function() {
            window.open('https://www.google.com');
          };`;
        const scriptTag = $(`<script data-mutation-id="${this.title}"></script>`).text(scriptContent);

        $('head').append(scriptTag);
    }
}