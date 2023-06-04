const axios = require('axios');
const cheerio = require('cheerio');

exports.downloadHTML = async url => {
    const { data } = await axios.get(url);
    return data;
}



/**
 *
 * @param node The element node
 * @param page Page inside the browser
 * @param html The static html of the page
 * @param type Which is xpath or css-selector
 */
exports.bundlePointerToHTML = async (node, page, html, type) => {
    let element = { tagName: null, mutationId: null };
    let bundleTechnique = 'browser';

    const { pointer, htmlCode } = node;

    if (pointer) {
        element = await bundlePointerToHTMLBrowser(pointer, page, type);
        if (element.tagName === null) {
            bundleTechnique = 'static';
            element = bundlePointerToHTMLStatic(pointer, html, type);
        }
        if (element.tagName === null && htmlCode) {
            bundleTechnique = 'tag';
            element = bundlePointerToHTMLTag(htmlCode);
        }
    }
    node.bundleTechnique = bundleTechnique;

    return element;
}

exports.duplicateFailureFinder = (nodes) => {
    const uniqueMembers = new Set();
    const duplicateMembers = [];

    for (const node of nodes) {
        const { pointer } = node;
        // If the string is already in the set, it is a duplicate
        if (uniqueMembers.has(pointer)) {
            duplicateMembers.push(pointer);
        } else {
            uniqueMembers.add(pointer);
        }
    }
    return duplicateMembers;
}
const bundlePointerToHTMLStaticXPath = (pointer, currentContext, $) => {
    const selectorParts = pointer.split('/').filter(part => part !== '');

    let targetElement = null;
    for (let i = 0; i < selectorParts.length; i++) {
        const selectorPart = selectorParts[i];
        const [tagName, indexStr] = selectorPart.split('[');
        const index = parseInt(indexStr.slice(0, -1)) - 1;

        if (tagName === 'html') {
            currentContext = $(tagName).first();
            continue;
        }
        const matchedElements = currentContext.children(tagName);
        targetElement = matchedElements.eq(index);

        if (targetElement.length === 0) {
            break;
        }
        currentContext = targetElement;
    }
    return targetElement;
}
const bundlePointerToHTMLStaticCSSSelector = (pointer, currentContext) => {
    const selectorParts = pointer.split(' > ');

    let targetElement = null;
    for (let i = 0; i < selectorParts.length; i++) {
        let selectorPart = selectorParts[i];

        if (selectorPart.includes(':nth-child(')) {
            const tagName = selectorPart.split(':nth-child(')[0];
            const index = parseInt(selectorPart.match(/:nth-child\((\d+)\)/)[1], 10) - 1;

            targetElement = currentContext?.children().eq(index);

        } else if (selectorPart.includes(':nth-of-type(')) {
            const tagName = selectorPart.split(':nth-of-type(')[0];
            const index = parseInt(selectorPart.match(/:nth-of-type\((\d+)\)/)[1], 10) - 1;

            if (tagName === 'html') {
                targetElement = currentContext(tagName)?.first();
            } else {
                const matchedElements = currentContext.children(tagName);
                targetElement = matchedElements.eq(index);
            }

        } else {
            if (selectorPart === 'html')
                targetElement = currentContext(selectorPart)?.first();
            else
                targetElement = currentContext.children(selectorPart);
        }
        if (targetElement.length === 0)
            break;
        currentContext = targetElement;
    }
    return targetElement;
}
const bundlePointerToHTMLStatic = (pointer, html, type) => {
    const $ = cheerio.load(html);
    const selectorParts = pointer.split(' > ');

    let currentContext = $;

    let element = null;

    if (type === 'xpath') {
        element = bundlePointerToHTMLStaticXPath(pointer, currentContext, $)
    } else if (type === 'complex-css-selector') {
        element = bundlePointerToHTMLStaticCSSSelector(pointer, currentContext);
    }
    return {
        tagName: element?.prop('tagName') || element?.get(0)?.tagName || null,
        mutationId: element?.attr('data-mutation-id') ||
            (element?.get(0)?.attr ? element?.get(0)?.attr('data-mutation-id') : null) || null
    }
}
const bundlePointerToHTMLBrowser = async (pointer, page, type) => {
    let element = null;

    if (type === 'xpath') {
        const elements = await page.$x(pointer);
        if (elements.length > 0) {
            element = elements?.[0];
        }
    } else if ("complex-css-selector") {
        element = await page.$(pointer);
    } else if ("css-selector") {
        const elements = await page.$$(pointer);
        if (elements.length > 0) {
            element = elements?.[0];
        }
    }

    if (element) {
        try {
            return {
                tagName: (await page.evaluate(el => el.tagName, element))?.toLowerCase(),
                mutationId: await page.evaluate(el => el.getAttribute('data-mutation-id'), element)
            }
        } catch (e) {
            return {
                tagName: null,
                mutationId: null
            }
        }
    } else {
        return {
            tagName: null,
            mutationId: null
        }
    }
}
const bundlePointerToHTMLTag = (htmlCode) => {
    const $ = cheerio.load(htmlCode);

    const bodySelector = $('body :first-child');
    const headSelector = $('head :first-child');

    let element = null;
    if (bodySelector.length) {
        element = bodySelector.first();
    } else if (headSelector.length) {
        element = headSelector.first()
    } else {
        element = null;
    }
    return {
        tagName: element?.prop('tagName')?.toLowerCase() || null,
        mutationId: element?.attr('data-mutation-id')
    }
}