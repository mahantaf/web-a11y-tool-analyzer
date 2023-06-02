/**
 * @copyright Copyright (c) 2016 Grupa OLX. All rights reserved.
 * @disclaimer This software and its documentation are confidential and proprietary
 * information of the author. No part of the software and documents may be copied,
 * reproduced, transmitted, translated, or reduced to any electronic medium or
 * machine-readable form without the prior written consent of the author.
 * Author makes no representations with respect to the contents,
 * and assumes no responsibility for any errors that might appear in the
 * software and documents. This publication and the contents hereof are subject
 * to change without notice.
 */


// Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#polyfill
if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

/**
 * @description Defines specific actions to easily integrate Ninja tracker with OLX EU websites.
 * @version 0.0.1
 * @namespace NinjaTracker
 * @module NinjaTracker
 */

var NinjaTracker = (function () {
    "use strict";

    if (typeof window._NINJAURL === "undefined" ) {
        var _NINJAURL = ("https:" === document.location.protocol ? "https://" : "http://") + "ninja.data.olxcdn.com/ninja-cee.js";
    } else {
        var _NINJAURL = window._NINJAURL;
    }

    var _initialized = false;
    var _listeners = [];

    // Cache
    var _cache = [0];
    var _cacheExpand = 'data' + +new Date();

    var _widget = {
        init: function () {
            console.log('Widget has not been attached!', 'Page view not injected.');
            return this;
        },
        bindUIActions: function () {
            console.log('Widget has not been attached!', 'Events not injected.');
            return this;
        },
        bindUIFormActions: function() {
            console.log('Widget has not been attached!', 'Events not injected.');
            return this;
        },
        XHRCompleted: function() {
            console.log('Widget has not been attached!', 'Ajax callback not injected.');
            return this;
        }
    };

    // Add or update existing JSON properties on obj1 with values from obj2
    var _mergeJSON = function (obj1, obj2) {
        // Iterate over all the properties in the object which is being consumed
        for (var p in obj2) {
            // Property in destination object set; update its value.
            if (obj2.hasOwnProperty(p) && typeof obj1[p] !== "undefined") {
                _mergeJSON(obj1[p], obj2[p]);
            }
            else {
                // Don't have that level in the heirarchy so add it
                obj1[p] = obj2[p];
            }
        }
    };

    var _contains = function (source, needle) {
        for (var i in source) {
            if (source[i] == needle) return true;
        }
        return false;
    };

    var _outdatedKeys = ["account"];
    var _removeOutdatedKeys = function (obj) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p) && _contains(_outdatedKeys, p)) {
                delete obj[p];
            }
        }
    };

    var _loadScript = function (filepath) {
        console.debug('_loadScript()', filepath);

        var script = document.createElement("script");
        script.setAttributeNode(
            document.createAttribute('data-ot-ignore')
        );
        script.type = "text/javascript";
        script.async = true;
        script.src = filepath;
        script.setAttribute('class', 'optanon-category-C0001');
        (document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]).appendChild(script);
    };

    var _unregisterEvents = function (onlyAsyncPayload) {
        console.debug('_unregisterEvents()', onlyAsyncPayload);

        var remove = function (nodes, listener) {
                [].forEach.call(nodes, function(node) {
                    node.removeEventListener(listener.eventType, listener.callback, false);
                });
            },
            i = _listeners.length;

        while (i--) {
            var listener = _listeners[i],
                nodes = document.querySelectorAll(listener.selector);

            if (!onlyAsyncPayload) { // remove all registered events
                remove(nodes, listener);
            }
            else if (onlyAsyncPayload && listener.asyncPayload) {
                remove(nodes, listener);
            }
        }
    };
    var _checkForOrigin = function () {
        if (typeof trackingData !== 'undefined' && trackingData.hasOwnProperty('pageView')) {

            var location = window.location.href;
            var isLocal = location.indexOf('file://') !== -1;
            var locationOther = trackingData.pageView.platform == null || trackingData.pageView.platform === 'null' ? true : false;

            return (isLocal || locationOther);

        } else {

            return false;
        }
    };

    var _restrictedOrigin = false;

    var _init = function (configJson) {
        window.dataLayer = window.dataLayer || [];
        // Injecting `userId` is needed for "logged users only" laquesis experiments / feature flags to work.
        // With the `userId` within the config, ninja will also fetch those experiments / feature flags.
        // When `userId` is not present, ninja only fetches experiments / feature flags which are configured to be for "all users"
        window.configTracking = Object.assign(configJson, {userId: _getCookie("user_id")}) || {};
        _loadScript(_NINJAURL);
    };


    var _setCookie = function(name,value,days) {

        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + ";path=/;domain=." + window.session_domain;
    };

    var _getCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

    var _dfpGetCookieOrTargeting = function (name) {
        if (typeof window.GPT !== 'undefined' && typeof window.GPT.targeting !== 'undefined' && typeof window.GPT.targeting[name] !== 'undefined') {
            return window.GPT.targeting[name];
        };

        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2];
        };

        return null;
    };

    var _getSessionStorage = function(key) {
       return sessionStorage.getItem(key);
    };

    var _setSessionStorage = function(key,value) {
        sessionStorage.setItem(key, value);
    };

    return {

        isTrackingDataValid: function(){

            if (typeof trackingData === 'undefined') {
                console.log('JSON object "trackingData" is undefined!');
                return false;
            } else if (typeof trackingData.$config === 'undefined') {
                console.log('JSON object "trackingData.$config" is undefined!');
                return false;
            } else if (typeof trackingData.pageView === 'undefined') {
                console.log('JSON object "trackingData.pageView" is undefined!');
                return false;
            }

            if (typeof trackingData.$data === 'undefined') {
                console.log('JSON object "trackingData.$data" is undefined but is not required.');
                trackingData.$data = {};
            }

            return true;
        },

        init: function () {

            if (!NinjaTracker.isTrackingDataValid()) {
                return;
            }

            _restrictedOrigin = _checkForOrigin();

            //stop execution when href location is local;
            if(_restrictedOrigin) {
                console.log('NinjaTracker has not been initialized, origin restricted');
                return;
            }

            if (_initialized) {
                console.log('NinjaTracker has been initialized!');
                return;
            }

            console.debug('NinjaTracker.init()');
            _initialized = true;

            // Backend data cleanup
            _removeOutdatedKeys(trackingData.pageView);
            _mergeJSON(trackingData.pageView, trackingData.$data.pageView);
            // --

            _init(trackingData.$config);

            NinjaTracker.onStartupPush();
        },

        reInit: function () {

            console.debug('NinjaTracker.reInit()');

            this.reBuild();
            NinjaTracker.onStartupPush(trackingData.pageView);
        },

        reBuild: function() {
            _removeOutdatedKeys(trackingData.pageView);
            _mergeJSON(trackingData.pageView, trackingData.$data.pageView);
        },
        initEvents: function() {

            //stop execution when href location is local;
            if (_restrictedOrigin) {
                return;
            }

            if (typeof NinjaTracker.widgetBase !== 'undefined') {
                NinjaTracker.widgetBase.init();
            }

            if (typeof NinjaTracker.widget !== 'undefined') {
                NinjaTracker.widget.init();
            }
        },

        onStartupPush: function () {
            console.debug('NinjaTracker.onStartupPush()');

            if (NinjaTracker.isTrackingDataValid()) {
                var events = trackingData.$data.delayedEvents;
                if (typeof events !== 'undefined' && events !== null && events.length > 0) {
                    var len = events.length - 1;
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({"cleanup": function () {
                        for (var i = 0; i <= len; i++) {
                            var value = events[i];

                            value.trackEvent = [ value.click_name ];
                            value.action_type = value.click_name;
                            value.touch_point_page = value.touch_point_page || trackingData.pageView.listing_type || trackingData.pageView.trackPage;
                            value.dfp_user_id = _dfpGetCookieOrTargeting('dfp_user_id') || 0;
                            value.dfp_segment_test_v2 = _dfpGetCookieOrTargeting('dfp_segment_test_v2') || 0;
                            value.dfp_segment_test_v3 = _dfpGetCookieOrTargeting('dfp_segment_test_v3') || 0;
                            value.dfp_segment_test_v4 = _dfpGetCookieOrTargeting('dfp_segment_test_v4') || 0;
                            value.dfp_segment_test_oa = _dfpGetCookieOrTargeting('dfp_segment_test_oa') || 0;
                            value.dfp_segment = _getCookie('dfp_segment') || "";

                            if (window.checkDivElement) {
                                value.used_adblock = NinjaTracker.checkIsDivElementWasDisabledByAdblock()  ? 'adblock_enabled' : 'adblock_disabled';
                                _setCookie('used_adblock', value.used_adblock, 365);
                            } else {
                                value.used_adblock = _getCookie('used_adblock') || 'adblock_disabled';
                            }

                            value = NinjaTracker.applyDFPStatics(value);

                            if (typeof value.click_name !== 'undefined') {
                                delete value.click_name;
                            }

                            value = NinjaTracker.mergeValidOptionalParams(
                                NinjaTracker.getDataFrom(trackingData.pageView, false), value
                            );

                            if (i === len) {
                                value.linkCallBack = function() {
                                    NinjaTracker.push(trackingData.pageView);
                                };
                            }

                            NinjaTracker.delayPush(value);
                        }
                    }});

                } else {
                    NinjaTracker.push(trackingData.pageView);
                }
            }
        },
        hasSetAdblockInfo: function(json) {
            return _getCookie('used_adblock') || window.checkDivElement === true;
        },
        checkIsDivElementWasDisabledByAdblock: function () {
            if (window.getComputedStyle !== undefined) {
                return getComputedStyle(document.getElementById("div-gpt-ad-test"))["display"] === 'none'
            } else {
                return document.getElementById("div-gpt-ad-test").offsetHeight === 0
            }
        },
        applyAdBlockInfo : function(json) {
            if (NinjaTracker.hasSetAdblockInfo()) {
                if (window.checkDivElement) {
                    json['used_adblock'] = NinjaTracker.checkIsDivElementWasDisabledByAdblock()  ? 'adblock_enabled' : 'adblock_disabled';
                    _setCookie('used_adblock',  json['used_adblock'], 365);
                } else {
                    json['used_adblock'] = _getCookie('used_adblock') || 'adblock_disabled';
                }
            }
            return json;
        },
        applyDFPStatics : function (json) {
            json['last_pv_imps'] = _getCookie('avppv') || 0;
            json['user-ad-fq'] = _getCookie('avps') || 0;
            json['ses_pv_seq'] = _getCookie('pvps') || 0;
            json['user-ad-dens'] = json['ses_pv_seq'] > 0 ? json['user-ad-fq'] / json['ses_pv_seq'] : 0;

            return json;
        },
        getActionName: function(name) {
            return name.match(/_(.*?)_/g)[0].replace(/_/g , '');
        },
        push: function (json) {
            if (!NinjaTracker.isTrackingDataValid()) {
                return;
            }

            //stop execution when href location is local;
            if(_restrictedOrigin) {
                console.debug('NinjaTracker has not been initialized, origin restricted');

                return;
            }
            if (typeof json === 'object') {
                json['dfp_user_id'] = _dfpGetCookieOrTargeting('dfp_user_id') || 0;
                json['dfp_segment_test_v2'] = _dfpGetCookieOrTargeting('dfp_segment_test_v2') || 0;
                json['dfp_segment_test_v3'] = _dfpGetCookieOrTargeting('dfp_segment_test_v3') || 0;
                json['dfp_segment_test_v4'] = _dfpGetCookieOrTargeting('dfp_segment_test_v4') || 0;
                json['dfp_segment_test_oa'] = _dfpGetCookieOrTargeting('dfp_segment_test_oa') || 0;
                json['dfp_segment'] = _getCookie('dfp_segment') || "";

                json = NinjaTracker.applyAdBlockInfo(json);
                json = NinjaTracker.applyDFPStatics(json);
            }

            var json_translated = Object.assign({}, json);

            if (typeof json_translated.linkCallBack === 'function') {
                json_translated.trackLinkEvent = json_translated.trackEvent;
                delete json_translated.trackEvent;
            }

            console.debug('NinjaTracker.push()', json_translated);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({"cleanup": function () {
                window.dataLayer.push(json_translated);
            }});
        },

        delayPush: function (json) {
            //stop execution when href location is local;
            if(_restrictedOrigin) {
                console.debug('NinjaTracker has not been initialized, origin restricted');

                return;
            }

            if (typeof json === 'object') {
                json['dfp_user_id'] = _dfpGetCookieOrTargeting('dfp_user_id') || 0;
                json['dfp_segment_test_v2'] = _dfpGetCookieOrTargeting('dfp_segment_test_v2') || 0;
                json['dfp_segment_test_v3'] = _dfpGetCookieOrTargeting('dfp_segment_test_v3') || 0;
                json['dfp_segment_test_v4'] = _dfpGetCookieOrTargeting('dfp_segment_test_v4') || 0;
                json['dfp_segment_test_oa'] = _dfpGetCookieOrTargeting('dfp_segment_test_oa') || 0;
                json['dfp_segment'] = _getCookie('dfp_segment') || "";

                json = NinjaTracker.applyAdBlockInfo(json);
                json = NinjaTracker.applyDFPStatics(json);
            }
            var json_translated = Object.assign({}, json);

            if (typeof json_translated.linkCallBack === 'function') {
                json_translated.trackLinkEvent = json_translated.trackEvent;
                delete json_translated.trackEvent;
            }

            console.debug('NinjaTracker.delayPush()', json_translated);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(json_translated);
        },

        pushDFP: function (eventName, json) {
            if (!NinjaTracker.isTrackingDataValid()) {
                return;
            }

            //stop execution when href location is local;
            if(_restrictedOrigin) {
                console.debug('NinjaTracker has not been initialized, origin restricted');
                return;
            }

            json['trackEvent'] = [ eventName ];
            json['action_type'] = eventName;
            json['touch_point_page'] = trackingData.pageView.listing_type || trackingData.pageView.trackPage;

            console.debug('NinjaTracker.pushDFP()', json);

            NinjaTracker.push(NinjaTracker.mergeValidOptionalParams(
                NinjaTracker.getDataFrom(trackingData.pageView),
                json
            ));
        },

        pushEventDFP: function (eventName, json) {
            if (!NinjaTracker.isTrackingDataValid()) {
                return;
            }

            //stop execution when href location is local;
            if(_restrictedOrigin) {
                console.debug('NinjaTracker has not been initialized, origin restricted');
                return;
            }

            json['trackEvent'] = [ eventName ];
            json['action_type'] = eventName;
            json['touch_point_page'] = trackingData.pageView.listing_type || trackingData.pageView.trackPage;

            console.debug('NinjaTracker.pushEventDFP()', json);

            NinjaTracker.push(NinjaTracker.mergeValidOptionalParams(
                NinjaTracker.getDataFrom(trackingData.pageView),
                json
            ));
        },

        unregisterAll: function () {
            console.debug('NinjaTracker.unregisterAll()');

            _unregisterEvents(false);
        },

        unregisterAsyncPayload: function () {
            console.debug('NinjaTracker.unregisterAsyncPayload()');

            _unregisterEvents(true);
        },

        getDataFrom: function(obj, defaultClick) {

            var defaultClick =  typeof defaultClick === 'undefined' ? true : defaultClick;
            var selected = {},
                k = 'trackPage';

            for (var p in obj) {
                if (obj.hasOwnProperty(p) && (p !== k)) {
                    selected[p] = obj[p];
                }
            }

            if (!!defaultClick) {
                selected["event_type"] = "click";
            }

            return selected;
        },

        getClosest: function(el, selector) {
            if (window.Element && !Element.prototype.closest) {
                Element.prototype.closest =
                    function(s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i,
                            el = this;
                        do {
                            i = matches.length;
                            while (--i >= 0 && matches.item(i) !== el) {};
                        } while ((i < 0) && (el = el.parentElement));
                        return el;
                    };
            }

            return el.closest(selector);
        },

        hasClass: function (el, selector) {
            var className = " " + selector + " ";
            var elemClassName = el.getAttribute("class");

            if ((" " + elemClassName + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
                return true;
            }

            return false;
        },

        cache: function (elem) {
            var cacheIndex = elem[_cacheExpand],
                nextCacheIndex = _cache.length;

            if (!cacheIndex) {
                cacheIndex = elem[_cacheExpand] = nextCacheIndex;
                _cache[cacheIndex] = {};
            }

            return {
                get : function(key) {
                    return _cache[cacheIndex][key];
                },
                set : function(key, val) {
                    _cache[cacheIndex][key] = val;
                    return val;
                }
            }
        },
        registerDelegatedEvent: function (selector, event, params, asyncPayload,
                                          optionalCallbackBefore, optionalCallbackAfter, delayChangingLocation, parentSelector) {

            console.debug('NinjaTracker.registerDelegatedEvent()', selector, ', delegateParent: ' + parentSelector);

            try {

                var delegateParent = document.body.querySelector(parentSelector);
                var eventType = event;
                var data = params || {};
                var isDelay = !!delayChangingLocation;
                var delegateListener = function(e) {

                    var clickTarget = NinjaTracker.getClosest(e.target, selector) || false;

                    if (!clickTarget) {
                        console.log('The element\'s selector could not be found.' );
                        e.preventDefault();
                        return;
                    }

                    if (typeof trackingData === "undefined") {
                        console.log('JSON object "trackingData" is undefined!');
                        e.preventDefault();
                        return;
                    }

                    var node = clickTarget;
                    var isDelayMode = isDelay && !_adblock;
                    var href = node.getAttribute('href');

                    if (href !== null && href !== '' && isDelayMode) {
                        e.preventDefault();
                    }

                    var key = '$dataset';
                    var keyJson = '$datajson';
                    var params = (typeof data === 'function') ? data() : data;


                    if (params.hasOwnProperty(key)) {
                        var $dataset = params[key];
                        delete params[key];

                        for (var p in $dataset) {
                            if ($dataset.hasOwnProperty(p)) {
                                key = $dataset[p];

                                if (!node.hasAttribute(key)) {
                                    console.log('Nodes for selector "%s" doesn\'t contain data attribute ' +
                                        '"%s"! Please check $dataset for registered event.', selector, key);
                                }

                                params[p] = node.getAttribute(key);
                            }
                        }
                    }

                    if (params.hasOwnProperty(keyJson)) {
                        var dataAttr = params[keyJson];
                        delete params[keyJson];

                        if (!node.getAttribute(dataAttr)) {
                            console.log('Nodes for selector "%s" doesn\'t contain data attribute ' +
                                '"%s"! Please check $dataPageView for registered event.', selector, dataAttr);
                        } else {
                            params = NinjaTracker.mergeValidOptionalParams(
                                params, NinjaTracker.getDataFrom(JSON.parse(node.getAttribute(dataAttr)))
                            );
                        }
                    }

                    if (isDelayMode) {
                        params.linkCallBack = function() {
                            window.location.href = href;
                        };
                    }
                    NinjaTracker.push(params);

                    if (typeof optionalCallbackAfter === 'function') {
                        optionalCallbackAfter();
                    }
                };

                if (typeof optionalCallbackBefore === 'function') {
                    var _listener = delegateListener;
                    delegateListener = function (e) {
                        optionalCallbackBefore(node, e, _listener, eventType);
                    };
                }

                delegateParent.addEventListener(eventType, delegateListener, true);

                // by default all events are set without async payload => unregisterAsyncPayload();
                _listeners.push({
                    'selector': selector, 'eventType': eventType, 'callback': delegateListener,
                    'asyncPayload': !!asyncPayload
                });
            } catch (e) {
                console.log('Cannot register delegated event for selector "%s" in NinjaTracker library!', selector);
            }

        },
        registerEvent: function (selector, event, params, asyncPayload,
                                 optionalCallbackBefore, optionalCallbackAfter, delayChangingLocation) {
            console.debug('NinjaTracker.registerEvent()', selector);


            var nodes = document.querySelectorAll(selector);

            [].forEach.call(nodes, function(node) {
                try {
                    var eventType = event,
                        data = params || {},
                        isDelay = !!delayChangingLocation,

                        listener = function(e) {

                            if (!NinjaTracker.isTrackingDataValid()) {
                                return;
                            }

                            var isDelayMode = isDelay && !_adblock;

                            var href = node.getAttribute('href');
                            if (href !== null && href !== '' && isDelayMode) {
                                e.preventDefault();
                            }

                            var key = '$dataset';
                            var keyJson = '$datajson';
                            var params = (typeof data === 'function') ? data(e) : data;

                            if (params.hasOwnProperty(key)) {
                                var $dataset = params[key];
                                delete params[key];

                                for (var p in $dataset) {
                                    if ($dataset.hasOwnProperty(p)) {
                                        key = $dataset[p];

                                        if (!node.hasAttribute(key)) {
                                            console.log('Nodes for selector "%s" doesn\'t contain data attribute ' +
                                                '"%s"! Please check $dataset for registered event.', selector, key);
                                        }

                                        params[p] = node.getAttribute(key);
                                    }
                                }
                            }

                            if (params.hasOwnProperty(keyJson)) {
                                var dataAttr = params[keyJson];
                                delete params[keyJson];

                                if (!node.getAttribute(dataAttr)) {
                                    console.log('Nodes for selector "%s" doesn\'t contain data attribute ' +
                                        '"%s"! Please check $dataPageView for registered event.', selector, dataAttr);
                                } else {
                                    params = NinjaTracker.mergeValidOptionalParams(
                                        params, NinjaTracker.getDataFrom(JSON.parse(node.getAttribute(dataAttr)))
                                    );
                                }
                            }

                            if (isDelayMode) {
                                params.linkCallBack = function() {
                                    window.location.href = href;
                                };
                            }

                            NinjaTracker.push(params);

                            if (typeof optionalCallbackAfter === 'function') {
                                optionalCallbackAfter();
                            }

                        };

                    if (typeof optionalCallbackBefore === 'function') {
                        var _listener = listener;
                        listener = function (e) {
                            optionalCallbackBefore(node, e, _listener, eventType);
                        };
                    }

                    node.addEventListener(eventType, listener, false);

                    // by default all events are set without async payload => unregisterAsyncPayload();
                    _listeners.push({
                        'selector': selector, 'eventType': eventType, 'callback': listener,
                        'asyncPayload': !!asyncPayload
                    });
                } catch (e) {
                    console.log('Cannot register event for selector "%s" in NinjaTracker library!', selector);
                }
            });

        },

        widget: _widget,

        mergeValidOptionalParams: function (required, optional) {
            for (var key in optional) {
                if (optional.hasOwnProperty(key)) {
                    var value = optional[key];
                    if (typeof value !== 'undefined' && value !== null && value !== "") {
                        required[key] = value;
                    }
                }
            }

            return required;
        },

        isElementInViewport: function(el) {
            var rect = el.getBoundingClientRect();

            return rect.bottom > 0 &&
                rect.right > 0 &&
                rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                rect.top < (window.innerHeight || document.documentElement.clientHeight);
        },

        userActionTracking: function(params) {
            this.push(this.mergeValidOptionalParams(
                this.getDataFrom(trackingData.pageView),
                { 'touch_point_page': trackingData.pageView.trackPage, ...params })
            );
        },

        $: function(selector) {
            return document.querySelector(selector);
        }
    };

})();
