/*
    language map objects exist in /hreflang-routing/, with following structure:

        /hreflang-routing/{lang}.json
        eg. /hreflang-routing/en.json

    This script does the following:
        1) Checks for language preference, routes based off language map object for given language { IF all conditions met }
        2) Updates Language dropdown links to have specific paths { IF exists }, rather than just sending to selected language homepage

    CMS for language routing data / hreflang - Jared manages
        https://wordpressstaging.qualtrics.com/apps/dashboard/language/
        https://wordpressstaging.qualtrics.com/apps/dashboard/hreflang/

    Developer & Muggle Docs:
        https://wordpressstaging.qualtrics.com/apps/docs/#language-routing
 */

// IE / Edge prepend polyfill
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// contains data & routing logic for languages
var ql_routing =
    ql_routing ||
    (function() {
        /* Ensure data layer is defined, as we will be pushing to it per RDI ask */
        window.dataLayer = window.dataLayer || [];

        /* Custom data defined & included in separate, user updated object */
        if (typeof ql_routing_custom_data === "undefined") return false;

        var ql = ql || {},
            initialized = false,
            /* Variables to modify new location, params etc before routing */
            windowLocation = window.location,
            windowHref = windowLocation.href,
            windowPathname = windowLocation.pathname,
            windowParametersDefault= transferParameters(),
            windowParameters = getParams(windowHref),
            dev = windowHref.indexOf("wordpressstaging") > -1 || windowHref.indexOf("dev") > -1,
            /* Time before banner appears */
            delayBanner = 1000, // Setting low, because showBanner fires after document ready
            crawler = /bot|googlebot|crawler|spider|robot|crawling/i.test(
                navigator.userAgent
            ),
            paramDiagnostic = "diagnostic", // ?diagnostic=1 to url will prevent routing logic from occuring
            paramIgnore = "l", // ?l=0 to url will prevent routing logic from occuring
            paramRid = "rid", // Redirect ID - can be cookie or langMatch - specified by Red Door Interactive
            cookieDiagnostic = "q_marketing_lang_diagnostic",
            cookieLanguagePreference = "q_marketing_lang_preference",
            cookieBannerDismiss = "q_marketing_lang_dismiss_banner",
            cookieGaSession = "q_marketing_lang_ga_s",
            bannerPostRedirect = windowParameters[paramRid] === "langMatch",
            mock_ISO = windowParameters.mock_ISO,
            stopRoute = !!windowParameters.stop_route,
            lang_browser = windowParameters.lang_browser,
            // bannerPostRedirect = windowParameters[paramRid] === "langMatch" || windowParameters[paramRid] === "cookie",
            // Uncomment above line if we want post redirect messaging even if cookie has been set
            bannerDismissed = !!getCookie(cookieBannerDismiss),
            localizedMessaging = ql_routing_custom_data.localized_messaging,
            overrideActiveVal = 0,
            overrideEnabled = windowParameters[paramIgnore] == overrideActiveVal,
            exclusionTriggered = excludedExactPath(windowPathname) || excludedPartialPath(windowPathname),
            langGeoPromise = false,
            // Languages that qualtrics.com currently supports & maps to
            supportedLanguages = [
                "au",
                "de",
                "en",
                "es",
                "es-la",
                "fr",
                "it",
                "jp",
                "pt-br",
                "uk",
                "kr",
                "ru",
                "hk",
                "nl",
                "th"
            ],
            localizedDisplayLanguages = {
                "de": "Deutsch",
                "en": "English",
                "au": "English (AU & NZ)",
                "uk": "English (UK)",
                "fr": "Français",
                "es": "Español (Europa)",
                "es-la": "Español (América Latina)",
                "it": "Italiano",
                "jp": "日本語",
                "pt-br": "Português",
                "kr": "한국어",
                "hk": "繁體中文",
                "nl": "Nederlands",
                "th": "ไทย"
            },
            hrefLangReady = false,
            // country mapped to supported languages
            geoCountryMap = ql_routing_custom_data.geoip_lang || {},
            // browser language mapped to supported languages
            RFC5646tagMap = ql_routing_custom_data.browser_lang || {},
            diagnosticInterval = false,
            diagnosticOn = getCookie(cookieDiagnostic) === "1" || getCookie(cookieDiagnostic) === "true";

        // User is intentially trying to affect diagnostic settings
        if (typeof windowParameters[paramDiagnostic] !== "undefined") {
            // SET
            if (
                windowParameters[paramDiagnostic] === "true" ||
                windowParameters[paramDiagnostic] === "1"
            ) {
                diagnosticOn = true;
                setCookie(cookieDiagnostic, true, 1); // 1 day
            }

            // UNSET
            if (
                windowParameters[paramDiagnostic] === "false" ||
                windowParameters[paramDiagnostic] === "0"
            ) {
                diagnosticOn = false;
                setCookie(cookieDiagnostic, false, 1); // 1 day
            }
        }

        // Exit for non-relevant traffic
        if (crawler || (!diagnosticOn && window.location.href.indexOf('wordpressstaging') > -1)) {
            return false;
        }

        ql.countryCode = mock_ISO ? mock_ISO : "";
        ql.langGeo = "";
        ql.geoRouteType = "";
        ql.langRequest = getValidRequestLanguage(); /* Use managed list of languages to determine current requested Langauge */
        ql.langCookie = getCookie(cookieLanguagePreference);
        ql.langBrowser = !!lang_browser ? lang_browser : getLangBrowser();
        ql.gaSessionActive = !!getCookie(cookieGaSession);
        gaSessionDuration = ((1 / 24) * 0.5); // 30 minutes
        ql.matchExists = false;
        ql.shouldAutoRedirect = false;
        ql.shouldPrompt = false;
        ql.suggestedRoute = "";
        ql.trackingParams = "";

        /* If we have language preference cookie or browser language does not contain `en` or `es`, init before GeoIP check*/
        if (ql.langCookie || ql.langBrowser) {
            init();
        }

        try {

            var xhr = new XMLHttpRequest();
            // Grab mapped list from requested language
            xhr.open(
                "GET",
                WIL.getWwwApiUrl('geoip')
            );
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var decodedResponse = {};
                    try{
                        decodedResponse = JSON.parse(xhr.responseText);
                    } catch (e){

                    }
                    var location = decodedResponse;
                    if (location) {
                        var countryCode = mock_ISO ? mock_ISO : location.iso_code;
                        ql.countryCode = countryCode;

                        geoBrowserLangRules = geoCountryMap[countryCode];
                        if (geoBrowserLangRules) {
                            // If browser language contains any of these language, apply special rules.
                            var geoMatchPartial = ['es','en'];

                            for (var i = 0; i < geoMatchPartial.length; i++) {
                                if(browserLangContains(geoMatchPartial[i]) && geoBrowserLangRules[geoMatchPartial[i]]){
                                    // ql.langGeo - path is the destination Qualtrics hosted path root
                                    ql.langGeo = geoBrowserLangRules[geoMatchPartial[i]]['path'];

                                    // ql.geoRouteType - this is how the redirect should operate (auto or prompt)
                                    ql.geoRouteType = geoBrowserLangRules[geoMatchPartial[i]]['type'];
                                }
                            }
                        } else {
                            // ql.langGeo = geoBrowserLangRules[geoMatchPartial[i]]['path'];
                        }

                        init();
                    } else {
                        // console.error(location);
                    }
                }
            };
            xhr.send();
        } catch (e) {
            console.warn(e);
        }

        function excludedExactPath(pathname) {
            // for exact matches, using object with truthy val for paths
            var exclusions_exact = ql_routing_custom_data.exclusions.exact || {};
            return !!exclusions_exact[pathname] ?
                "exact match: " + exclusions_exact[pathname] :
                false;
        }

        function excludedPartialPath(pathname) {
            // for partial matches, using array to iterate
            var exclusions_partial =
                Object.keys(ql_routing_custom_data.exclusions.partial) || [];

            for (var i = 0; i < exclusions_partial.length; i++) {
                if (pathname.indexOf(exclusions_partial[i]) > -1) {
                    return "partial match: " + exclusions_partial[i];
                }
            }

            return false;
        }

        function exponentialBackoff(
            condition,
            checkMax,
            checkRate,
            callbackSuccess,
            callbackFailure
        ) {
            var result = condition();

            if (result) {
                callbackSuccess(result);
            } else {
                if (checkMax > 0) {
                    setTimeout(function() {
                        exponentialBackoff(
                            condition,
                            --checkMax,
                            checkRate * 2,
                            callbackSuccess,
                            callbackFailure
                        );
                    }, checkRate);
                } else {
                    callbackFailure();
                }
            }
        }

        function dataLayerPushAtSessionStart(obj) {
            if(ql.gaSessionActive) {
                // Don't want to push on every page view, just at start of ga session
            } else {
                dataLayerPush(obj);
            }
        }

        /* GTM dataLayer pre-pubh function - clean and avoid duplicate data, since we run logic several times to ensure complete data */
        function dataLayerPush(obj) {
            var existingPush = dataLayer.filter(function(el) {
                return (
                    el.event === obj.event &&
                    el.intRoutingCondition === obj.intRoutingCondition &&
                    el.geo === obj.geo
                );
            });
            if (existingPush.length === 0) {
                dataLayer.push(obj);
            }
        }

        function transferParameters(){
          var fullParameters=window.location.search;
          console.log(window.location.search);
          if(fullParameters){
            if( fullParameters.indexOf('rid') >= 0){
              return fullParameters;
            }else{
              return fullParameters.replace("?", "&");
            }
          }else {
            return false;
          }
        }

        function getParams(url) {
            var params = {};
            var parser = document.createElement("a");
            parser.href = url;
            var query = parser.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                params[pair[0]] = decodeURIComponent(pair[1]);
            }
            return params;
        }

        function getLangBrowserRaw() {
            if(lang_browser) return lang_browser;

            return navigator.languages ?
                navigator.languages[0] :
                navigator.language || navigator.userLanguage;
        }

        function getLangBrowserMapped(browserLangRaw, supportedOnly) {
            return RFC5646tagMap[browserLangRaw] ?
                RFC5646tagMap[browserLangRaw] :
                (supportedOnly ? "" : browserLangRaw);
        }

        function browserLangContains(langPartial){
            return (getLangBrowserRaw()).indexOf(langPartial) > -1;
        }

        function getLangBrowser() {
            var browserLangPreference = getLangBrowserMapped(getLangBrowserRaw(), false);
            return browserLangPreference;
        }

        function getLangBrowserSupported() {
            var browserLangPreference = getLangBrowserMapped(getLangBrowserRaw(), true);
            return (browserLangContains('es') || browserLangContains('en')) ? false : browserLangPreference;
        }

        function init() {
            // if (initialized) return false;
            // Order of priority
            ql.langBrowserSupported = getLangBrowserSupported();

            // if(!ql.langBrowserSupported && ql.langGeo && ql.geoRouteType && ql.langBrowser !== "en" && ql.langBrowser !== "en-US") {
            //     ql.langBrowserSupported = getLangBrowserMapped(ql.langBrowser, false);
            // }

            if(ql.langGeo && diagnosticOn){
                console.log('\ncookie: ' + ql.langCookie , '\nbrowserLangRaw: ' + ql.langBrowser , '\nbrowserLangMapped: ' + ql.langBrowserSupported , '\ngeoRaw: ' + ql.countryCode , '\ngeoMapped: ' + ql.langGeo , '\nincomingRequest: ' + ql.langRequest);
            }

            ql.langTarget = ql.langCookie || ql.langBrowserSupported || ql.langGeo || ql.langRequest;
            ql.langPrefMismatch = ql.langTarget !== ql.langRequest;

            initialized = true;

            updateMenuPaths();

            try {
                // If on staging, query the pre-production version of the hreflang data
                var directivePrefix = dev ? "/live" : "";
                // var directivePrefix = "";
                var xhr = new XMLHttpRequest();
                // Grab mapped list from requested language
                xhr.open(
                    "GET",
                    directivePrefix + "/hreflang-routing/" + ql.langRequest + ".json"
                );
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        /*
                            ql.langRoutes is corrseponding path data -
                            managed in conjunction with hreflang
                        */
                        ql.langRoutes = getLanguageMap(xhr.responseText);
                        hrefLangReady = true;
                        ql.langPrev = windowParameters.prevsite;
                        ql.langNew = windowParameters.newsite;
                        ql.matchExists =
                            typeof ql.langRoutes !== "undefined" && // initial path {obj} exists
                            typeof ql.langRoutes[ql.langTarget] !== "undefined" && // preferred language path exists
                            ql.langRoutes[ql.langTarget] !== ""; // preferred language path is not empty string
                        try {
                            routingLogic(ql.langRoutes);
                        } catch (e) {
                            console.warn(e);
                        }
                    }
                };
                xhr.send();
            } catch (e) {
                console.warn(e);
            }

            return btoa(JSON.stringify(ql));
        }

        function updateMenuPaths() {
            var menuUpdateReadyCheck = function() {
                return (
                    hrefLangReady &&
                    document.querySelectorAll(".q-language-nav").length > 0
                );
            };
            var menuUpdateCallbackSuccess = function() {
                updateMenu(ql.langRoutes);
            };
            var menuUpdateCallbackFailure = function() {
                /* no Op*/
            };

            exponentialBackoff(
                menuUpdateReadyCheck,
                10,
                100,
                menuUpdateCallbackSuccess,
                menuUpdateCallbackFailure
            );
        }

        function getValidRequestLanguage() {
            var supportedLang = function reducer(accumulator, currentValue) {
                return windowPathname.indexOf("/" + currentValue + "/") > -1 ?
                    accumulator + currentValue :
                    accumulator + "";
            };
            var returnLang = supportedLanguages.reduce(supportedLang, "");
            return returnLang !== "" ? returnLang : "en";
        }

        function deleteCookie(name) {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }

        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2)
                return parts
                    .pop()
                    .split(";")
                    .shift();
            return false;
        }

        function getLanguageMap(xhrResponse) {
            var langRoutes = {};
            try {
                langRoutes = JSON.parse(xhrResponse)[windowPathname];
            } catch (e) {
                langRoutes = {};
            }
            return langRoutes;
        }

        // Routing logic pertains to pre-redirection logic, post redirect is handled higher up in init fn
        function routingLogic(langRoutes) {
            /* Is routing possible? (does a corresponding route exist & no overrides or exclusions) */
            ql.routePossible = (
                ql.langPrefMismatch &&
                !overrideEnabled &&
                !exclusionTriggered
            );

            /* Preference is mismatched, No overrides - can now check for optimal route */
            ql.suggestedRoute = (!!langRoutes && !!langRoutes[ql.langTarget]) ? langRoutes[ql.langTarget] : "";
            // alert(ql.suggestedRoute);

            /* Conditions for auto-redirect */
            ql.shouldAutoRedirect = ql.routePossible && (
                (ql.langCookie || (ql.langBrowserSupported && !ql.geoRouteType) || ql.geoRouteType === "auto") &&
                ql.matchExists &&
                langRoutes[ql.langTarget] !== windowPathname // prevent loop
            );

            /* conditions for prompt */
            ql.shouldPrompt = ql.routePossible && (
                ql.geoRouteType === "prompt" &&
                ql.matchExists &&
                !getCookie(cookieBannerDismiss)
            );

            if(ql.gaSessionActive) {
                // Pre Jared: User is non-idle - continue session
                setCookie(cookieGaSession, true, gaSessionDuration);
            } else {
                // Already matched
                // (!ql.shouldAutoRedirect && !ql.shouldPrompt) &&
                //Unsupported browser language
                if(ql.langBrowser !== ql.langBrowserSupported) {
                    dataLayerPushAtSessionStart({
                        event: "intRouting",
                        intRoutingCondition: "languageNotSupported",
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                } else if (!ql.langPrefMismatch) {
                    dataLayerPushAtSessionStart({
                        event: "intRouting",
                        intRoutingCondition: "alreadyMatched",
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                } else if (!ql.matchExists && ql.langPrefMismatch){
                    dataLayerPushAtSessionStart({
                        event: "intRouting",
                        intRoutingCondition: "noMatch",
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                }
                setCookie(cookieGaSession, true, gaSessionDuration);
            }

            if (ql.routePossible) {

                if (ql.shouldAutoRedirect) {
                    var ridParamVal = ql.langCookie ? "cookie" : "langMatch"; // cookie or browser langMatch
                    ridParamVal = (ql.geoRouteType === "auto") ? "ip" : ridParamVal; // geo param -> ip
                    if (ql.shouldAutoRedirect && ql.langBrowserSupported) {
                        ridParamVal = "langMatch";
                    }
                    if(ql.shouldAutoRedirect && ql.langCookie) {
                        ridParamVal = "cookie";
                    }
                    ql.trackingParams = "?" + paramRid + "=" + ridParamVal + "&prevsite=" + ql.langRequest + "&newsite=" + ql.langTarget + '&geo=' + ql.countryCode + '&geomatch=' + ql.langGeo + (mock_ISO ? "&mock_ISO=" + ql.countryCode : "");
                    ql_routing.navigate(ql.suggestedRoute + ql.trackingParams);
                } else if (ql.shouldPrompt) {
                    documentReady(showBanner(true));
                }
            }
        }

        function updateMenu(langRoutes) {
            const path = window.location.pathname;

            // Add site here if you want to enable this feature for different site. 
            const supportedSitesForGreyOutLang = ["support"];
            const pathParts = path.split("/");
            let isGreyOutFeatureEnabled = false;
            if (pathParts.length >= 2 && supportedSitesForGreyOutLang.includes(pathParts[1])) {
                isGreyOutFeatureEnabled = true;
            }

            supportedLanguages.map(function(lang) {
                var langURL = (typeof langRoutes !== "undefined") ? langRoutes[lang] : "";
                return typeof langURL !== "undefined" || langURL !== "" ?
                        updateMenuItem(lang, langURL, isGreyOutFeatureEnabled) :
                        "";
            });
        }

        function updateMenuItem(lang, langURL, isGreyOutFeatureEnabled) {
            var menuItemDOM = document.querySelector('[data-lang="' + lang + '"]');
            if (menuItemDOM) {
                if (isGreyOutFeatureEnabled && (typeof langURL == "undefined" || langURL == "")) {
                    menuItemDOM.style = "pointer-events: none;color: grey;";
                }

                if (typeof langURL !== "undefined" && langURL !== "") {
                    menuItemDOM.href = langURL;
                }
                return lang;
            }
            return false;
        }

        function updateQueryStringParameter(uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf("?") !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, "$1" + key + "=" + value + "$2");
            } else {
                return uri + separator + key + "=" + value;
            }
        }

        function getDisplayLanguage(language) {
            return localizedDisplayLanguages[language] ?
                localizedDisplayLanguages[language] :
                language;
        }

        function formatDynamicMessaging(message) {
            var dynamicData = {
                browserLang: getDisplayLanguage(ql.langTarget),
                lang: ql.langTarget.toUpperCase()
            };

            for (var key in dynamicData) {
                var value = dynamicData[key];
                if (dynamicData.hasOwnProperty(key)) {
                    message = message.replace(new RegExp("{{" + key + "}}", "gi"), value);
                }
            }

            return message;
        }

        function documentReady(fn) {
            if (
                document.attachEvent ?
                document.readyState === "complete" :
                document.readyState !== "loading"
            ) {
                if(typeof fn === "function")
                    fn();
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }

        function getBannerHTML(type, messaging) {
            var messagePrompt = type === "post" ?
                formatDynamicMessaging(messaging.message_post_prompt) :
                formatDynamicMessaging(messaging.message_prompt);
            var messageAccept = type === "post" ?
                formatDynamicMessaging(messaging.message_post_accept) :
                formatDynamicMessaging(messaging.message_accept);
            var messageReject = type === "post" ?
                formatDynamicMessaging(messaging.message_post_reject) :
                formatDynamicMessaging(messaging.message_reject);
            return (
                '<div class="custom-infobar-inner"><div class="container"><div class="infobar-content">' +
                '<span class="messaging text-white">' +
                    messagePrompt +
                "</span> " +
                '<button class="q-xm-btn q-xm-btn-white" onclick="ql_routing.bannerAccept(\'' + type + "');\">" +
                    messageAccept +
                "</button>" +
                '<button class="q-xm-btn q-xm-btn-white q-secondary" onclick="ql_routing.bannerReject(\'' + type + "');\">" +
                    messageReject +
                "</button>" +
                '<div class="close-x" onclick="ql_routing.bannerCloseSoft();">&times;</div>' +
                "</div></div></div>"
            );
        }

        var bannerShown = false;

        function showBanner(matchFound) {
	        if(!bannerShown){
		        bannerShown = true;
	        } else {
		        return false;
	        }
            setTimeout(function() {
                var dom_body = document.getElementsByTagName("body")[0],
                    customInfobar = document.createElement("div");
                customInfobar.className = "custom-infobar";

                if(document.getElementsByClassName('sap-info').length > 0)
                    customInfobar.classList.add("infobar-absolute");

                customInfobar.id = "lang-infobar";

                // if(typeof dom_body === "undefined") {
                //     documentReady(showBanner(true));
                //     return false;
                // }



                var messaging = localizedMessaging[ql.langTarget] ?
                    localizedMessaging[ql.langTarget] :
                    false;

                /* Only show banner if backend messaging present */
                if (!messaging) return false;

                if (
                    bannerPostRedirect &&
                    messaging.message_post_prompt &&
                    messaging.message_post_accept &&
                    messaging.message_post_reject
                ) {
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "postRedirect_modalImpression",
                        prevSite: ql.langPrev,
                        newSite: ql.langRequest, // aka - the site we are on currently
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                    customInfobar.innerHTML = getBannerHTML("post", messaging);
                } else if (
                    matchFound &&
                    messaging.message_prompt &&
                    messaging.message_accept &&
                    messaging.message_reject
                ) {
                    ql.trackingParams = ""; /* removing for now, for banner based */
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "preredirect_modalImpression",
                        currentSite: ql.langRequest,
                        suggestedSite: ql.langTarget,
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                    customInfobar.innerHTML = getBannerHTML("pre", messaging);
                }
                if (dom_body.firstChild) {
                    dom_body.insertBefore(customInfobar, dom_body.firstChild);
                } else {
                    dom_body.appendChild(customInfobar);
                }

                var container = document.getElementById("lang-infobar");
                container.classList.add("active");
                container.style.height = "auto";
                container.querySelector("#lang-infobar .custom-infobar-inner").style.height = 'auto';
                var sapHeight = document.querySelectorAll('.sap-info').length > 0 ? document.querySelector('.sap-info').scrollHeight : 0;
                var bannerHeight = Math.max(sapHeight, container.querySelector("#lang-infobar .custom-infobar-inner").scrollHeight) + "px";

                setTimeout(function() {
                    container.querySelector("#lang-infobar .custom-infobar-inner").style.height = bannerHeight;
                    container.style.maxHeight = bannerHeight;
                }, 10);

                (function() {
                    var throttle = function(type, name, obj) {
                        obj = obj || window;
                        var running = false;
                        var func = function() {
                            if (running) {
                                return;
                            }
                            running = true;
                            requestAnimationFrame(function() {
                                obj.dispatchEvent(new CustomEvent(name));
                                running = false;
                            });
                        };
                        obj.addEventListener(type, func);
                    };
                    throttle("resize", "optimizedResize");
                })();

                // handle event
                window.addEventListener("optimizedResize", function() {
                    if (document.querySelector("#lang-infobar .custom-infobar-inner")) {
                        var container = document.querySelector("#lang-infobar.active");
                        container.querySelector("#lang-infobar .custom-infobar-inner").style.height = 'auto';
                        var sapHeight = document.querySelectorAll('.sap-info').length > 0 ? document.querySelector('.sap-info').scrollHeight : 0;
                        var bannerHeight = Math.max(sapHeight, document.querySelector("#lang-infobar .custom-infobar-inner").scrollHeight) + "px";
                        if (container) {
                            setTimeout(function() {
                                container.querySelector("#lang-infobar .custom-infobar-inner").style.height = bannerHeight;
                                container.style.maxHeight = bannerHeight;
                            }, 10);
                        }
                    }
                });
            }, delayBanner);
        }

        /*
            Accepting with type pre results in setting language preference and navigating to matched URL
            Accepting with type post results in setting language preference and staying on matched URL
        */
        function bannerAccept(type) {
            var actions = {
                pre: function() {
                    // Accepting & performing suggested route
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "preredirect_modalGoToNewSite",
                        currentSite: ql.langRequest,
                        suggestedSite: ql.langTarget,
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                    ql_routing.setLanguagePreference(ql.langTarget);
                    ql_routing.navigate(ql.suggestedRoute);
                },
                post: function() {
                    // Accepting the (post) route & language preference, dismissing banners
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "postRedirect_modalDismiss",
                        prevSite: ql.langPrev,
                        newSite: ql.langRequest, // aka - the site we are on currently
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });

                    // ql_routing.setLanguagePreference(ql.langTarget);
                    ql_routing.bannerDismiss();
                }
            };
            if (typeof actions[type] === "function") {
                actions[type]();
            }
        }

        /*
            Dismissing with type pre results in staying on URL
            Accepting with type post results in setting language preference and staying on matched URL
        */
        function bannerReject(type) {
            var actions = {
                pre: function() {
                    // Rejecting routing, banner dismissed for 30 minutes
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "preredirect_modalDismiss",
                        currentSite: ql.langRequest,
                        suggestedSite: ql.langTarget,
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                    ql_routing.bannerDismiss();
                },
                post: function() {
                    // Reject & go back to prevsite
                    dataLayerPush({
                        event: "intRouting",
                        intRoutingCondition: "postRedirect_modalGoBack",
                        prevSite: ql.langPrev,
                        newSite: ql.langRequest, // aka - the site we are on currently
                        geo: ql.countryCode,
                        geoMatch: ql.langGeo
                    });
                    ql_routing.setLanguagePreference(ql.langPrev);
                    // ql_routing.navigate(ql.prevSite + '?l=0'); /* alternatively, could redirect back with exclusion parameter enabled
                    ql_routing.navigate(ql.prevSite);
                    setCookie(cookieBannerDismiss, true, (1 / 24) * 8); // Per Jared: Banner dismissal lasts 8 hours
                }
            };
            if (typeof actions[type] === "function") {
                actions[type]();
            }
        }

        function bannerCloseSoft() {
            dataLayerPush({
                event: "intRouting",
                intRoutingCondition: "preredirect_modalDismiss",
                currentSite: ql.langRequest,
                suggestedSite: ql.langTarget,
                geo: ql.countryCode,
                geoMatch: ql.langGeo
            });
            bannerDismiss();
        }

        /* Hide banner UI */
        function bannerDismiss() {
            var el = document.getElementById("lang-infobar");
            el.style.maxHeight = "0px";
            /* After slide-up/slide-down, wipe div */
            setTimeout(function() {
                el.innerHTML = "";
                el.classList = "";
            }, 1000);
            setCookie(cookieBannerDismiss, true, (1 / 24) * 8); // Per Jared: Banner dismissal lasts 8 hours
        }

        // Format diagnostic data, return structured html row
        function getDiagnosticWrappedHTML(name, set, val, type) {
            var bgset = {
                negative: ["#FFAAAA", "#AA2222"],
                positive: ["#AAFFAA", "#22AA22"],
                disabled: ["#FAFAFA", "#AAA"],
                neutral: ["#FFFFFF", "#222222"]
            };
            var bg = set ? bgset[type][0] : bgset.neutral[0];
            var color = set ? bgset[type][1] : bgset.neutral[1];
            return (
                '<div class="row diagnostic-row ' +
                type +
                " " +
                (set ? "active" : "") +
                '" style="margin:0;background-color:' +
                bg +
                ";color:" +
                color +
                ';">' +
                '<div class="col-xs col-bl-6">' +
                name +
                "</div>" +
                '<div class="col-xs col-bl-3">' +
                (set ? "Yes" : "No") +
                "</div>" +
                '<div class="col-xs col-bl-3">' +
                (val ? val : "") +
                "</div></div>"
            );
        }

        function setupDiagnosticPanel() {
            var pre_dom_diagnostic = document.createElement("div");
            pre_dom_diagnostic.setAttribute("id", "ql-diagnostic");
            document.querySelector("html").prepend(pre_dom_diagnostic);

            var diagnostic = document.getElementById("ql-diagnostic");
            var closeCustomInnerHTML = '<div class="closeCustom" onclick="ql_routing.toggleDisplay();">&times;</div>';
            diagnostic.innerHTML = "";
            diagnostic.className = "q-lr-diagnostic";
            diagnostic.innerHTML += closeCustomInnerHTML;

            diagnosticInterval = setInterval(function() {
                diagnostic.innerHTML = closeCustomInnerHTML;
                diagnostic.innerHTML += '<div class="col-xs col-bl-12">';
                diagnostic.innerHTML +=
                    '<div class="row diagnostic-row diagnostic-row-header"><div class="col-xs col-bl-6">Language Routing<br><small>(priority ordered)</small></div><div class="col-xs col-bl-3">Set?</div><div class="col-xs col-bl-3">Value</div></div>';
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Incoming Language",
                    ql.langRequest,
                    ql.langRequest,
                    "disabled"
                );
                diagnostic.innerHTML +=
                    '<h3 style="margin-top:0;">Behavior Overrides</h3>';
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Exclude By Rules",
                    exclusionTriggered,
                    exclusionTriggered,
                    "negative"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Parameter Override",
                    overrideEnabled,
                    overrideEnabled,
                    "negative"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Banner Dismissed",
                    bannerDismissed,
                    bannerDismissed,
                    "negative"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Stepthrough <small>[stop_route]</small>",
                    stopRoute,
                    stopRoute,
                    "negative"
                );
                diagnostic.innerHTML += "<h3>Criteria Priority</h3>";
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "1. Cookie",
                    ql.langCookie,
                    ql.langCookie,
                    "positive"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "2. Browser Lang<br><small>(mapped match?)</small>",
                    ql.langBrowser,
                    ql.langBrowser ? ql.langBrowser : getLangBrowserRaw() + "<br><small>(raw value)</small>",
                    "positive"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "3. Geo IP Mapped",
                    ql.langGeo,
                    ql.langGeo,
                    "positive"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "<small> Geo Route Type</small>",
                    ql.geoRouteType,
                    ql.geoRouteType,
                    "disabled"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "<small> Geo Code (ISO)<br>(true value)</small>",
                    ql.countryCode,
                    ql.countryCode,
                    "disabled"
                );
                diagnostic.innerHTML += "<h3>Action</h3>";
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Should prompt user?",
                    ql.shouldPrompt,
                    ql.shouldPrompt,
                    "positive"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Should auto redirect?",
                    ql.shouldAutoRedirect,
                    ql.shouldAutoRedirect,
                    "positive"
                );
                diagnostic.innerHTML += getDiagnosticWrappedHTML(
                    "Does 1:1 match exist?",
                    ql.matchExists,
                    ql.matchExists,
                    "positive"
                );
                diagnostic.innerHTML +=
                    '<div class="row diagnostic-row" style="pointer-events:all!important;margin:10px 0 0 0!important;background-color:#FAFAFA;border-top:1px solid #EEE;color:#000;padding:10px 20px!important"><div class="col-xs col-bl-12">Suggested Route:</div><div class="col-xs col-bl-12"><strong>' +
                    (ql.suggestedRoute && ql.langPrefMismatch ?
                        '<a href="' +
                        ql.suggestedRoute +
                        '">' +
                        ql.suggestedRoute +
                        "</a>" :
                        "No suggested route, stay on current") +
                    "</strong></div></div>";
                diagnostic.innerHTML +=
                    '<div class="row diagnostic-row" style="opacity:0.5;pointer-events:all!important;margin:10px 0 0 0!important;background-color:#FAFAFA;border-top:1px solid #EEE;color:#000;padding:10px 20px!important"><div class="col-xs col-bl-12"><div class="col-xs col-bl-12" style="padding-bottom:5px;">Developer Utilities:</div><button class="q-xm-btn" onclick="ql_routing.clearPreferences();">Reset Language, Banner & Session</div></div></div>';
                diagnostic.innerHTML += "</div>";
            }, 1000);
        }

        function toggleDisplay() {
            var diagnostic = document.getElementById("ql-diagnostic");
            diagnostic.classList.toggle("minimal");

            var diagnosticParam = diagnostic.classList.contains("minimal") ? 0 : 1;

            windowHref = updateQueryStringParameter(
                windowHref,
                "diagnostic",
                diagnosticParam
            );
            history.replaceState({}, "", windowHref);
        }

        // Wrapping window.open in this for now, later may want to open via window.location.href = or other means
        function navigate(url) {
            if(windowParametersDefault){
              url+=windowParametersDefault;
            }

            if(stopRoute && diagnosticOn) {
                console.log('would have routed to: ' + url);
            } else {
                if(typeof window.stop === "function")
                    window.stop();
                window.open(url, "_self");
            }
        }

        function setLanguagePreference(languagePreference) {
            /* Set language preference using ql.langTarget -> recommended language */
            setCookie(cookieLanguagePreference, languagePreference, 30);
        }

        // Set a cookie with default domain, path
        function setCookie(name, value, days) {
            // Making work across subdomains, such as wordpressstaging.qualtrics.com
            var host = windowHref.indexOf("qualtrics.q") > -1 ? "qualtrics.q" : "qualtrics.com";
            createCookie(name, value, days, "/", host);
        }

        // Format and write cookie to browser
        function createCookie(name, value, days, path, domain) {
            var cookie = name + "=" + encodeURIComponent(value) + ";";
            var milliseconds = days * 24 * 60 * 60 * 1000;
            var now = new Date();
            now.setTime(now.getTime() + milliseconds);
            var expires = now.toUTCString();
            if (expires) cookie += "expires=" + expires + ";";
            if (path) cookie += "path=" + path + ";";
            if (domain) cookie += "domain=." + domain + ";";

            document.cookie = cookie;
        }

        function eraseCookie(name) {
            var d = new Date();
            d.setTime(d.getTime() + (0*60*1000));
            var expires = "expires="+d.toUTCString();
            var domain = windowHref.indexOf("qualtrics.q") > -1 ? "qualtrics.q" : "qualtrics.com";
            document.cookie = name + "=" + "" + ";domain=." + domain + ";path=/;expires=" + expires;
        }

        function clearPreferences(){
            eraseCookie(cookieLanguagePreference);
            eraseCookie(cookieBannerDismiss);
            eraseCookie(cookieGaSession);
            window.location.reload();
        }

        if (diagnosticOn) {
            setupDiagnosticPanel();
        }

        return {
            ql: ql,
            run: init,
            toggleDisplay: toggleDisplay,
            navigate: navigate,
            eraseCookie: eraseCookie,
            clearPreferences : clearPreferences,
            bannerAccept: bannerAccept,
            bannerReject: bannerReject,
            bannerDismiss: bannerDismiss,
            bannerCloseSoft: bannerCloseSoft,
            setLanguagePreference: setLanguagePreference,
            diagnose: setupDiagnosticPanel
        };
    })();
