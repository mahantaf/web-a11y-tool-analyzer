const isVisibleAndAccessible = async (page, el) => {
    return page.evaluate((element) => {
        const { display, visibility, opacity } = getComputedStyle(element);
        const ariaHidden = element.getAttribute('aria-hidden');
        const role = element.getAttribute('role');

        const rect = element.getBoundingClientRect();
        const isPositionedOutsideViewport = (
            rect.top < 0 ||
            rect.left < 0 ||
            rect.bottom > (window.innerHeight || document.documentElement.clientHeight) ||
            rect.right > (window.innerWidth || document.documentElement.clientWidth)
        );

        let parent = element.parentNode;
        let hasHiddenParent = false;
        while (parent && parent.nodeType === Node.ELEMENT_NODE) {
            const style = getComputedStyle(parent);
            const parentAriaHidden = parent.getAttribute('aria-hidden');
            if (
                style.display === 'none' ||
                style.visibility === 'hidden' ||
                style.opacity === '0' ||
                parentAriaHidden === 'true' // Check if parent has 'aria-hidden' set to true
            ) {
                hasHiddenParent = true;
                break;
            }
            parent = parent.parentNode;
        }

        return (
            display !== 'none' &&
            visibility !== 'hidden' &&
            opacity !== '0' &&
            (!role || (role !== 'presentation' && role !== 'none')) &&
            (!ariaHidden || ariaHidden.toLowerCase() === 'false') &&
            // !isPositionedOutsideViewport &&
            !hasHiddenParent
        );
    }, el);
}

module.exports = { isVisibleAndAccessible };