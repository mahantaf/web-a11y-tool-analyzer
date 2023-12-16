/**
 * @Failure: F40
 * @URL: https://www.w3.org/WAI/WCAG21/Techniques/failures/F40
 * @Criterion: 2.2.1, 2.2.4, 3.2.5
 * @Conformance: A, AAA
 * @Description:
 *
 */
module.exports = {
    title: 'F40',
    targetElement: null,
    originalElement: null,
    mutatedElement: null,
    applicable: function($) {
        return true;
    },
    apply: function($) {
        const metaTag = $(`<meta data-mutation-id="${this.title}" http-equiv="refresh" content="5; url=https://google.com" />`);
        $('head').append(metaTag);
    }
}