/*
 @author Sanford Whiteman, TEKNKL (blog.teknkl.com / sandy@teknkl.com)
 @version v1.0.4
 @copyright Copyright 2016, 2017, 2018, 2019 FigureOne, Inc.
 @license MIT License: You must include this license and the above credits in all uses & reproductions of this software.

 modified by Brandon der Blätter 2020-08
*/
function SimpleDTO(options) {
    var slice = Function.prototype.call.bind(Array.prototype.slice);
    try {
        options.debug && console.log("SimpleDTO: Unifying domains " + [document.domain, options.domain].join(", ")), document.domain = options.domain;
    } catch (error) {
        throw "SimpleDTO: Domain unification error, domain: " + options.domain;
    }
    if ("receive" == options.mode) {
        var iframe = document.createElement("iframe");
        this.setSource = function (source) {
            iframe.src = source;
        };
        this.getSource = function () {
            // return anchor;
            return url;
        };
        iframe.addEventListener("load", function () {
            this.data || this.src ? (options.debug && console.log("SimpleDTO: running callback"), options.cb && options.cb.call(this, simpleDTOContext)) : console.warn("SimpleDTO: skipping load event due to empty data src or callback");
        });
        iframe.setAttribute("data-transfer-object", "true");
        [
            ["visibility", "hidden"],
            ["position", "absolute"],
            ["height", "0"]
        ].forEach(function (attribute) {
            iframe.style.setProperty.apply(iframe.style, attribute);
        });
        // var anchor = document.createElement("a");
        // var url = new URL(options.dataSrc || "");
        // anchor.href = options.dataSrc || "";
        // options.noReplaceQuery || (anchor.search = document.location.search);
        // options.noReplaceQuery || (url.search = document.location.search);
        // window.__mktTokVal && (anchor.search += (1 < anchor.search.length ? "&" : "") + ["mkt_tok", window.__mktTokVal].join("="));
        // window.__mktTokVal && (url.search += (1 < url.search.length ? "&" : "") + ["mkt_tok", window.__mktTokVal].join("="));
        // options.noInit || this.setSource(anchor.href);
        // url.search = '';
        // options.noInit || this.setSource(url.href);
        iframe.src = 'https://success.qualtrics.com/Form-Pre-Fill-Helper-DTP.html';
        // stop trying to get the preload script if it doesn't load quickly enough
        setTimeout(function(){
            iframe.src = '';
            options.cb && options.cb.call(this, simpleDTOContext)
        }, 10000);
        document.body.appendChild(iframe);
    }
    var simpleDTOContext = this;
    return {
        getGlobal: function () {
            return iframe.contentWindow;
        },
        cleanup: function () {
            var frameElement = iframe.contentWindow && iframe.contentWindow.frameElement;
            if(frameElement) {
                frameElement.parentNode.removeChild(frameElement);
            }
        },
        parse: function (text) {
            xmlText = document.querySelector('.dto-xml[data-field-collection="' + text + '"]').text;
            parsedXmlText = (new DOMParser).parseFromString(xmlText, "application/xml");
            var options = parsedXmlText.querySelector("mktoPreFillFields");
            options = options.getAttribute("varName") || options.tagName;
            var newOptions = {};
            slice(parsedXmlText.querySelectorAll("mktoPreFillFields mktoField")).forEach(function (field) {
                newOptions[field.getAttribute("inputName")] = field.textContent;
            });
            return self[options] = newOptions;
        }
    };
}
window.SimpleDTO = SimpleDTO;