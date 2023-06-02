/*
====================================== VISITOR JS ADDITION ! ============================================================

*/

/**
 * @license
 * Adobe Visitor API for JavaScript version: 4.3.0
 * Copyright 2019 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!j.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e){for(var t=/^\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function r(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function a(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function o(e,t){if(e===t)return 0;var n=e.toString().split("."),o=t.toString().split(".");return i(n.concat(o))?(r(n,o),a(n,o)):NaN}function s(e){return e===Object(e)&&0===Object.keys(e).length}function l(e){return"function"==typeof e||e instanceof Array&&e.length}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=he("log",e,t),this.warn=he("warn",e,t),this.error=he("error",e,t)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isEnabled,n=e.cookieName,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.cookies;return t&&n&&r?{remove:function(){r.remove(n)},get:function(){var e=r.get(n),t={};try{t=JSON.parse(e)}catch(e){t={}}return t},set:function(e,t){t=t||{},r.set(n,JSON.stringify(e),{domain:t.optInCookieDomain||"",cookieLifetime:t.optInStorageExpiry||3419e4,expires:!0})}}:{get:Te,set:Te,remove:Te}}function d(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function f(){function e(e,t){var n=ve(e);return n.length?n.every(function(e){return!!t[e]}):De(t)}function t(){M(y),O(le.COMPLETE),_(h.status,h.permissions),m.set(h.permissions,{optInCookieDomain:l,optInStorageExpiry:c}),C.execute(Ne)}function n(e){return function(n,i){if(!Se(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(le.CHANGED),Object.assign(y,be(ve(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,l=i.optInCookieDomain,c=i.optInStorageExpiry,d=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=f.cookies,p=Le(a);Pe(p,"Invalid `previousPermissions`!"),Pe(o,"Invalid `preOptInApprovals`!");var m=u({isEnabled:!!s,cookieName:"adobeujs-optin"},{cookies:g}),h=this,_=se(h),C=ge(),I=Oe(p),v=Oe(o),D=m.get(),S={},b=function(e,t){return Me(e)||t&&Me(t)?le.COMPLETE:le.PENDING}(I,D),A=function(e,t,n){var i=be(fe,!r);return r?Object.assign({},i,e,t,n):i}(v,I,D),y=Ae(A),O=function(e){return b=e},M=function(e){return A=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,fe),h.approveAll=h.approve.bind(h,fe),h.isApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,v)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(le.COMPLETE,e):Te;return!r||r&&h.isComplete||!!o?setTimeout(e(h.permissions),0):t||C.add(Ne,function(){return e(h.permissions)}),n},h.complete=function(){h.status===le.CHANGED&&t()},h.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(xe);S[e.name]||(S[e.name]=e,e.onRegister.call(e,h))},h.execute=Fe(S),Object.defineProperties(h,{permissions:{get:function(){return A}},status:{get:function(){return b}},Categories:{get:function(){return ce}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===le.PENDING}},isComplete:{get:function(){return h.status===le.COMPLETE}},__plugins:{get:function(){return Object.keys(S)}},isIabContext:{get:function(){return d}}})}function g(e,t){function n(){r=null,e.call(e,new d("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function p(){if(window.__cmp)return window.__cmp;var e=window;if(e===window.top)return void Ce.error("__cmp not found");for(var t;!t;){e=e.parent;try{e.frames.__cmpLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void Ce.error("__cmp not found");var n={};return window.__cmp=function(e,i,r){var a=Math.random()+"",o={__cmpCall:{command:e,parameter:i,callId:a}};n[a]=r,t.postMessage(o,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__cmpReturn){var i=t.__cmpReturn;n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window.__cmp}function m(){var e=this;e.name="iabPlugin",e.version="0.0.1";var t=ge(),n={allConsentData:null},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);r({callback:i})},e.isApproved=function(e){var t=e.callback,i=e.category,a=e.timeout;if(n.allConsentData)return t(null,s(i,n.allConsentData.vendorConsents,n.allConsentData.purposeConsents));var o=g(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.vendorConsents,a=n.purposeConsents;t(e,s(i,r,a))},a);r({category:i,callback:o})},e.onRegister=function(t){var n=Object.keys(ue),i=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.purposeConsents,a=i.gdprApplies,o=i.vendorConsents;!e&&a&&o&&r&&(n.forEach(function(e){var n=s(e,o,r);t[n?"approve":"deny"](e,!0)}),t.complete())};e.fetchConsentData({callback:i})};var r=function(e){var r=e.callback;if(n.allConsentData)return r(null,n.allConsentData);t.add("FETCH_CONSENT_DATA",r);var s={};o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.purposeConsents,o=e.gdprApplies,l=e.vendorConsents;(arguments.length>1?arguments[1]:void 0)&&(s={purposeConsents:r,gdprApplies:o,vendorConsents:l},i("allConsentData",s)),a(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(arguments.length>1?arguments[1]:void 0)&&(s.consentString=e.consentData,i("allConsentData",s)),t.execute("FETCH_CONSENT_DATA",[null,n.allConsentData])})})},a=function(e){var t=p();t&&t("getConsentData",null,e)},o=function(e){var t=Re(ue),n=p();n&&n("getVendorConsents",t,e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!!t[ue[e]];return i&&function(){return de[e].every(function(e){return n[e]})}()}}function h(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var C,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},D={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},S={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",ALLFIELDS:"getVisitorValues"},b={CUSTOMERIDS:"getCustomerIDs"},A={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},y={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},O={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},M={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},k={GLOBAL:"global"},E={MESSAGES:v,STATE_KEYS_MAP:D,ASYNC_API_MAP:S,SYNC_API_MAP:b,ALL_APIS:A,FIELDGROUP_TO_FIELD:y,FIELDS:O,AUTH_STATE:M,OPT_OUT:k},T=E.STATE_KEYS_MAP,L=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}var i=this;this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(T.MCMID,e),r=n.call(this,T.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){i.getMarketingCloudVisitorID(function(t){e({MCMID:t})})}},P=E.MESSAGES,w=E.ASYNC_API_MAP,R=E.SYNC_API_MAP,F=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(P.GETSTATE),""}}function n(n){this[w[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[R[t]]=function(){return this.findField(t,e)||{}}}Object.keys(w).forEach(n,this),Object.keys(R).forEach(i,this)},N=E.ASYNC_API_MAP,x=function(){Object.keys(N).forEach(function(e){this[N[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},j=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)},n.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),V=(j.isObjectEmpty,j.isValueEmpty,j.getIeVersion,j.encodeAndBuildRequest,j.isObject,j.defineGlobalNamespace,j.pluck,j.parseOptOut,j.normalizeBoolean,n),U=E.MESSAGES,H={0:"prefix",1:"orgID",2:"state"},B=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[H[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=-1===Object.keys(U).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},G=E.MESSAGES,q=function(e,t,n,i){function r(e){Object.assign(g,e)}function a(e){Object.assign(g.state,e),Object.assign(g.state.ALLFIELDS,e),g.callbackRegistry.executeAll(g.state)}function o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);g.setStateAndPublish(t.state)}}function s(e){!m&&p&&(m=!0,h.send(i,e))}function l(){r(new L(n._generateID)),g.getMarketingCloudVisitorID(),g.callbackRegistry.executeAll(g.state,!0),_.removeEventListener("message",c)}function c(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,_.clearTimeout(g._handshakeTimeout),_.removeEventListener("message",c),r(new F(g)),_.addEventListener("message",o),g.setStateAndPublish(t.state),g.callbackRegistry.hasCallbacks()&&s(G.GETSTATE)}}function u(){p&&postMessage?(_.addEventListener("message",c),s(G.HANDSHAKE),g._handshakeTimeout=setTimeout(l,250)):l()}function d(){_.s_c_in||(_.s_c_il=[],_.s_c_in=0),g._c="Visitor",g._il=_.s_c_il,g._in=_.s_c_in,g._il[g._in]=g,_.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(g[e]=function(){})}Object.keys(n).forEach(e),g.getSupplementalDataID=n.getSupplementalDataID,g.isAllowed=function(){return!0}}var g=this,p=t.whitelistParentDomain;g.state={ALLFIELDS:{}},g.version=n.version,g.marketingCloudOrgID=e,g.cookieDomain=n.cookieDomain||"",g._instanceType="child";var m=!1,h=new B(e,p);g.callbackRegistry=V(),g.init=function(){d(),f(),r(new x(g)),u()},g.findField=function(e,t){if(g.state[e])return t(g.state[e]),g.state[e]},g.messageParent=s,g.setStateAndPublish=a},Y=E.MESSAGES,X=E.ALL_APIS,z=E.ASYNC_API_MAP,W=E.FIELDGROUP_TO_FIELD,J=function(e,t){function n(){var t={};return Object.keys(X).forEach(function(n){var i=X[n],r=e[i]();j.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=W[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var o=z[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function o(e){l(e),a(e,Y.HANDSHAKE)}function s(e){r(function(){a(e,Y.PARENTSTATE)})()}function l(n){function i(i){r.call(e,i),t.send(n,Y.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===Y.HANDSHAKE?o:s)(e.source)}}},K=function(e,t){function n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},Q=function(e){var t;if(!e&&_.location&&(e=_.location.hostname),t=e)if(/^[0-9.]+$/.test(t))t="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",i=t.split("."),r=i.length-1,a=r-1;if(r>1&&i[r].length<=2&&(2===i[r-1].length||n.indexOf(","+i[r]+",")<0)&&a--,a>0)for(t="";r>=a;)t=i[r]+(t?".":"")+t,r--}return t},$={compare:o,isLessThan:function(e,t){return o(e,t)<0},areVersionsDifferent:function(e,t){return 0!==o(e,t)},isGreaterThan:function(e,t){return o(e,t)>0},isEqual:function(e,t){return 0===o(e,t)}},Z=!!_.postMessage,ee={postMessage:function(e,t,n){var i=1;t&&(Z?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{Z&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),_.addEventListener?_[e?"addEventListener":"removeEventListener"]("message",n):_[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},te=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,l=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*l),a+=i.substring(n,n+1),0===t&&9==n?l=3:(1==t||2==t)&&10!=l&&2>n?l=10:2<t&&(l=10);return r+a},ne=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(_.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new _[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=_,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErrorHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},ie={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},re=function(e,t){var n=_.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:ie.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIframeLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,l=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.stringify(s.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!ie.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var c=this.jsonWaiting.shift();this.process(c),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=ie.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:function(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),j.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,l=e._getField(a),c=!1,u=!1,d=Math.ceil((new Date).getTime()/ie.MILLIS_PER_DAY);l?(o=l.split("*"),s=this.pruneSyncData(o,t.id,d),c=s.dataPresent,u=s.dataValid,c&&u||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t,n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var l,c,u,d,f=n.url,g=e.loadSSL?"https:":"http:";for(l=0,c=f.length;l<c;l++){u=f[l],d=/^\/\//.test(u);var p=new Image;p.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,l=e._getField(a),c=[];if(l){o=l.split("*");var u,d,f;for(u=0,d=o.length;u<d;u++)f=o[u],f.match("^"+n.id+"-")||c.push(f)}s.setSyncTrackingData(c,n,i,r)}}(this.onPagePixels.length,n,a,o)),p.src=(d?g:"")+u,this.onPagePixels.push(p)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((ie.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.push(n.id+"-"+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?ie.POST_MESSAGE_ENABLED?(e=n+i("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){ee.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>ie.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},ae={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},oe={getConfigNames:function(){return Object.keys(ae)},getConfigs:function(){return ae},normalizeConfig:function(e){return"function"!=typeof e?e:e()}},se=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},le={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ce={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",VIDEO_ANALYTICS:"videoaa"},ue=(C={},t(C,ce.AAM,565),t(C,ce.ECID,565),C),de=(I={},t(I,ce.AAM,[1,2,5]),t(I,ce.ECID,[1,2,5]),I),fe=function(e){return Object.keys(e).map(function(t){return e[t]})}(ce),ge=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!l(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!s(t))&&Object.keys(e.callbacks).forEach(function(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},pe=function(){},me=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},he=function(e,t,n){return n()?function(){if(me(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:pe},_e=c,Ce=new _e("[ADOBE OPT-IN]"),Ie=function(t,n){return e(t)===n},ve=function(e,t){return e instanceof Array?e:Ie(e,"string")?[e]:t||[]},De=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Se=function(e){return!(!e||ye(e))&&ve(e).every(function(e){return fe.indexOf(e)>-1})},be=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},Ae=function(e){return JSON.parse(JSON.stringify(e))},ye=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Oe=function(e){if(Ee(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Me=function(e){return void 0===e||(Ee(e)?Se(Object.keys(e)):ke(e))},ke=function(e){try{var t=JSON.parse(e);return!!e&&Ie(e,"string")&&Se(Object.keys(t))}catch(e){return!1}},Ee=function(e){return null!==e&&Ie(e,"object")&&!1===Array.isArray(e)},Te=function(){},Le=function(e){return Ie(e,"function")?e():e},Pe=function(e,t){Me(e)||Ce.error("".concat(t))},we=function(e){return Object.keys(e).map(function(t){return e[t]})},Re=function(e){return we(e).filter(function(e,t,n){return n.indexOf(e)===t})},Fe=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?Te:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),l=e[s[0]],c=s[1];if(!l||"function"!=typeof l[c])throw new Error("Make sure the plugin and API name exist.");var u=Object.assign(r,{callback:o});l[c].call(l,u)}catch(e){Ce.error("[execute] Something went wrong: "+e.message)}}};d.prototype=Object.create(Error.prototype),d.prototype.constructor=d;var Ne="fetchPermissions",xe="[OptIn#registerPlugin] Plugin is invalid.";f.Categories=ce,f.TimeoutError=d;var je=Object.freeze({OptIn:f,IabPlugin:m}),Ve={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var i=h(n,"cookieLifetime"),r=h(n,"expires"),a=h(n,"domain"),o=h(n,"secure"),s=o?"Secure":"";if(r&&"SESSION"!==i&&"NONE"!==i){var l=""!==t?parseInt(i||0,10):-60;if(l)r=new Date,r.setTime(r.getTime()+1e3*l);else if(1===r){r=new Date;var c=r.getYear();r.setYear(c+2+(c<1900?1900:0))}}else r=0;return e&&"NONE"!==i?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(r?" expires="+r.toGMTString()+";":"")+(a?" domain="+a+";":"")+s,this.get(e)===t):0},remove:function(e,t){var n=h(t,"domain")
;n=n?" domain="+n+";":"",document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n}},Ue=function(e,t){e.publishDestinations=function(n){var i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!j.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var l=s.urlDestinations;if(!(l instanceof Array&&l.length))return void r({error:"config.urlDestinations is not a populated array."});var c=[];l.forEach(function(e){j.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):c.push(e))});!function e(){c.length&&setTimeout(function(){var t=new Image,n=c.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},He=je.OptIn;j.defineGlobalNamespace(),window.adobe.OptInCategories=He.Categories;var Be=function(t,n,i){function r(e){var t=e;return function(e){var n=e||h.location.href;try{var i=d._extractParamFromUri(n,t);if(i)return L.parsePipeDelimetedKeyValues(i)}catch(e){}}}function a(e){function t(e,t,n){e&&e.match(ie.VALID_VISITOR_ID_REGEX)&&(n===v&&(m=!0),t(e))}t(e[v],d.setMarketingCloudVisitorID,v),d._setFieldExpire(y,-1),t(e[b],d.setAnalyticsVisitorID)}function o(e){e=e||{},d._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",d._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},d._supplementalDataIDLast=e.supplementalDataIDLast||"",d._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function s(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==O&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var t=L.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function l(e){var t=e.minutesToLive,n="";return(d.idSyncDisableSyncs||d.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function c(){return!!d.configs.doesOptInApply&&!(f.optIn.isComplete&&u())}function u(){return d.configs.isIabContext?f.optIn.isApproved(f.optIn.Categories.ECID)&&p:f.optIn.isApproved(f.optIn.Categories.ECID)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var d=this,f=window.adobe,g="",p=!1,m=!1;d.version="4.3.0";var h=_,C=h.Visitor;C.version=d.version,C.AuthState=E.AUTH_STATE,C.OptOut=E.OPT_OUT,h.s_c_in||(h.s_c_il=[],h.s_c_in=0),d._c="Visitor",d._il=h.s_c_il,d._in=h.s_c_in,d._il[d._in]=d,h.s_c_in++,d._instanceType="regular",d._log={requests:[]},d.marketingCloudOrgID=t,d.cookieName="AMCV_"+t,d.sessionCookieName="AMCVS_"+t,d.cookieDomain=Q(),d.cookieDomain===h.location.hostname&&(d.cookieDomain=""),d.loadSSL=h.location.protocol.toLowerCase().indexOf("https")>=0,d.loadTimeout=3e4,d.CORSErrors=[],d.marketingCloudServer=d.audienceManagerServer="dpm.demdex.net",d.sdidParamExpiry=30;var I=null,v="MCMID",D="MCIDTS",S="A",b="MCAID",A="AAM",y="MCAAMB",O="NONE",M=function(e){return!Object.prototype[e]},k=ne(d);d.FIELDS=E.FIELDS,d.cookieRead=function(e){return Ve.get(e)},d.cookieWrite=function(e,t,n){var i=d.cookieLifetime?(""+d.cookieLifetime).toUpperCase():"",r=!1;return d.configs&&d.configs.secureCookie&&"https:"===location.protocol&&(r=!0),Ve.set(e,""+t,{expires:n,domain:d.cookieDomain,cookieLifetime:i,secure:r})},d.resetState=function(e){e?d._mergeServerState(e):o()},d._isAllowedDone=!1,d._isAllowedFlag=!1,d.isAllowed=function(){return d._isAllowedDone||(d._isAllowedDone=!0,(d.cookieRead(d.cookieName)||d.cookieWrite(d.cookieName,"T",1))&&(d._isAllowedFlag=!0)),"T"===d.cookieRead(d.cookieName)&&d._helpers.removeCookie(d.cookieName),d._isAllowedFlag},d.setMarketingCloudVisitorID=function(e){d._setMarketingCloudFields(e)},d._use1stPartyMarketingCloudServer=!1,d.getMarketingCloudVisitorID=function(e,t){d.marketingCloudServer&&d.marketingCloudServer.indexOf(".demdex.net")<0&&(d._use1stPartyMarketingCloudServer=!0);var n=d._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return d._getRemoteField(v,i,e,t,n)},d.getVisitorValues=function(e,t){var n={MCMID:{fn:d.getMarketingCloudVisitorID,args:[!0],context:d},MCOPTOUT:{fn:d.isOptedOut,args:[void 0,!0],context:d},MCAID:{fn:d.getAnalyticsVisitorID,args:[!0],context:d},MCAAMLH:{fn:d.getAudienceManagerLocationHint,args:[!0],context:d},MCAAMB:{fn:d.getAudienceManagerBlob,args:[!0],context:d}},i=t&&t.length?j.pluck(n,t):n;K(i,e)},d._currentCustomerIDs={},d._customerIDsHashChanged=!1,d._newCustomerIDsHash="",d.setCustomerIDs=function(t){function n(){d._customerIDsHashChanged=!1}if(!d.isOptedOut()&&t){if(!j.isObject(t)||j.isObjectEmpty(t))return!1;d._readVisitor();var i,r;for(i in t)if(M(i)&&(r=t[i]))if("object"===e(r)){var a={};r.id&&(a.id=r.id),void 0!=r.authState&&(a.authState=r.authState),d._currentCustomerIDs[i]=a}else d._currentCustomerIDs[i]={id:r};var o=d.getCustomerIDs(),s=d._getField("MCCIDH"),l="";s||(s=0);for(i in o)M(i)&&(r=o[i],l+=(l?"|":"")+i+"|"+(r.id?r.id:"")+(r.authState?r.authState:""));d._newCustomerIDsHash=String(d._hash(l)),d._newCustomerIDsHash!==s&&(d._customerIDsHashChanged=!0,d._mapCustomerIDs(n))}},d.getCustomerIDs=function(){d._readVisitor();var e,t,n={};for(e in d._currentCustomerIDs)M(e)&&(t=d._currentCustomerIDs[e],n[e]||(n[e]={}),t.id&&(n[e].id=t.id),void 0!=t.authState?n[e].authState=t.authState:n[e].authState=C.AuthState.UNKNOWN);return n},d.setAnalyticsVisitorID=function(e){d._setAnalyticsFields(e)},d.getAnalyticsVisitorID=function(e,t,n){if(!L.isTrackingServerPopulated()&&!n)return d._callCallback(e,[""]),"";var i="";if(n||(i=d.getMarketingCloudVisitorID(function(t){d.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?d.marketingCloudServer:d.trackingServer,a="";d.loadSSL&&(n?d.marketingCloudServerSecure&&(r=d.marketingCloudServerSecure):d.trackingServerSecure&&(r=d.trackingServerSecure));var o={};if(r){var s="http"+(d.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+d.version+"&mcorgid="+encodeURIComponent(d.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",d._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+l+"&callback=s_c_il%5B"+d._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+l,o.callback=c}return o.url=a,d._getRemoteField(n?v:b,a,e,t,o)}return""},d.getAudienceManagerLocationHint=function(e,t){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})){var n=d._getField(b);if(!n&&L.isTrackingServerPopulated()&&(n=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})),n||!L.isTrackingServerPopulated()){var i=d._getAudienceManagerURLData(),r=i.url;return d._getRemoteField("MCAAMLH",r,e,t,i)}}return""},d.getLocationHint=d.getAudienceManagerLocationHint,d.getAudienceManagerBlob=function(e,t){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})){var n=d._getField(b);if(!n&&L.isTrackingServerPopulated()&&(n=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})),n||!L.isTrackingServerPopulated()){var i=d._getAudienceManagerURLData(),r=i.url;return d._customerIDsHashChanged&&d._setFieldExpire(y,-1),d._getRemoteField(y,r,e,t,i)}}return""},d._supplementalDataIDCurrent="",d._supplementalDataIDCurrentConsumed={},d._supplementalDataIDLast="",d._supplementalDataIDLastConsumed={},d.getSupplementalDataID=function(e,t){d._supplementalDataIDCurrent||t||(d._supplementalDataIDCurrent=d._generateID(1));var n=d._supplementalDataIDCurrent;return d._supplementalDataIDLast&&!d._supplementalDataIDLastConsumed[e]?(n=d._supplementalDataIDLast,d._supplementalDataIDLastConsumed[e]=!0):n&&(d._supplementalDataIDCurrentConsumed[e]&&(d._supplementalDataIDLast=d._supplementalDataIDCurrent,d._supplementalDataIDLastConsumed=d._supplementalDataIDCurrentConsumed,d._supplementalDataIDCurrent=n=t?"":d._generateID(1),d._supplementalDataIDCurrentConsumed={}),n&&(d._supplementalDataIDCurrentConsumed[e]=!0)),n};var T=!1;d._liberatedOptOut=null,d.getOptOut=function(e,t){var n=d._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(u())return d._getRemoteField("MCOPTOUT",i,e,t,n);if(d._registerCallback("liberatedOptOut",e),null!==d._liberatedOptOut)return d._callAllCallbacks("liberatedOptOut",[d._liberatedOptOut]),T=!1,d._liberatedOptOut;if(T)return null;T=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/dpm\.demdex\.net\/id\?/,"dpm.demdex.net/optOutStatus?"),n.callback=[r],_[r]=function(e){if(e===Object(e)){var t,n,i=j.parseOptOut(e,t,O);t=i.optOut,n=1e3*i.d_ottl,d._liberatedOptOut=t,setTimeout(function(){d._liberatedOptOut=null},n)}d._callAllCallbacks("liberatedOptOut",[t]),T=!1},k.fireCORS(n),null},d.isOptedOut=function(e,t,n){t||(t=C.OptOut.GLOBAL);var i=d.getOptOut(function(n){var i=n===C.OptOut.GLOBAL||n.indexOf(t)>=0;d._callCallback(e,[i])},n);return i?i===C.OptOut.GLOBAL||i.indexOf(t)>=0:null},d._fields=null,d._fieldsExpired=null,d._hash=function(e){var t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},d._generateID=te,d._generateLocalMID=function(){var e=d._generateID(0);return w.isClientSideMarketingCloudVisitorID=!0,e},d._callbackList=null,d._callCallback=function(e,t){try{"function"==typeof e?e.apply(h,t):e[1].apply(e[0],t)}catch(e){}},d._registerCallback=function(e,t){t&&(null==d._callbackList&&(d._callbackList={}),void 0==d._callbackList[e]&&(d._callbackList[e]=[]),d._callbackList[e].push(t))},d._callAllCallbacks=function(e,t){if(null!=d._callbackList){var n=d._callbackList[e];if(n)for(;n.length>0;)d._callCallback(n.shift(),t)}},d._addQuerystringParam=function(e,t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=L.parseHash(e),o=L.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),l=s[0]+"?",c=s[1];return l+L.addQueryParamAtLocation(c,r,i)+a},d._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},d._parseAdobeMcFromUrl=r(ie.ADOBE_MC),d._parseAdobeMcSdidFromUrl=r(ie.ADOBE_MC_SDID),d._attemptToPopulateSdidFromUrl=function(e){var n=d._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=L.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&i<d.sdidParamExpiry&&(d._supplementalDataIDCurrent=n.SDID,d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},d._attemptToPopulateIdsFromUrl=function(){var e=d._parseAdobeMcFromUrl();if(e&&e.TS){var n=L.getTimestampInSeconds(),i=n-e.TS;if(Math.floor(i/60)>ie.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;a(e)}},d._mergeServerState=function(e){if(e)try{if(e=function(e){return L.isObject(e)?e:JSON.parse(e)}(e),e[d.marketingCloudOrgID]){var t=e[d.marketingCloudOrgID];!function(e){L.isObject(e)&&d.setCustomerIDs(e)}(t.customerIDs),o(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},d._timeout=null,d._loadData=function(e,t,n,i){t=d._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=d._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=d._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),w.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===k.corsMetadata.corsType&&k.fireCORS(i,n,e)},d._clearTimeout=function(e){null!=d._timeout&&d._timeout[e]&&(clearTimeout(d._timeout[e]),d._timeout[e]=0)},d._settingsDigest=0,d._getSettingsDigest=function(){if(!d._settingsDigest){var e=d.version;d.audienceManagerServer&&(e+="|"+d.audienceManagerServer),d.audienceManagerServerSecure&&(e+="|"+d.audienceManagerServerSecure),d._settingsDigest=d._hash(e)}return d._settingsDigest},d._readVisitorDone=!1,d._readVisitor=function(){if(!d._readVisitorDone){d._readVisitorDone=!0;var e,t,n,i,r,a,o=d._getSettingsDigest(),s=!1,l=d.cookieRead(d.cookieName),c=new Date;if(l||m||d.discardTrackingServerECID||(l=d.cookieRead(ie.FIRST_PARTY_SERVER_COOKIE)),null==d._fields&&(d._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==o&&(s=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),n=t[0],i=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n&&(i=""),r>0&&(r=c.getTime()/1e3-60)),n&&i&&(d._setField(n,i,1),r>0&&(d._fields["expire"+n]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!d.cookieRead(d.sessionCookieName))&&(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[n]=!0)));!d._getField(b)&&L.isTrackingServerPopulated()&&(l=d.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(i=l[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(ie.VALID_VISITOR_ID_REGEX)&&d._setField(b,i)))}},d._appendVersionTo=function(e){var t="vVersion|"+d.version,n=e?d._getCookieVersion(e):null;return n?$.areVersionsDifferent(n,d.version)&&(e=e.replace(ie.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},d._writeVisitor=function(){var e,t,n=d._getSettingsDigest();for(e in d._fields)M(e)&&d._fields[e]&&"expire"!==e.substring(0,6)&&(t=d._fields[e],n+=(n?"|":"")+e+(d._fields["expire"+e]?"-"+d._fields["expire"+e]:"")+"|"+t);n=d._appendVersionTo(n),d.cookieWrite(d.cookieName,n,1)},d._getField=function(e,t){return null==d._fields||!t&&d._fieldsExpired&&d._fieldsExpired[e]?null:d._fields[e]},d._setField=function(e,t,n){null==d._fields&&(d._fields={}),d._fields[e]=t,n||d._writeVisitor()},d._getFieldList=function(e,t){var n=d._getField(e,t);return n?n.split("*"):null},d._setFieldList=function(e,t,n){d._setField(e,t?t.join("*"):"",n)},d._getFieldMap=function(e,t){var n=d._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},d._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)M(i)&&(r.push(i),r.push(t[i]))}d._setFieldList(e,r,n)},d._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==d._fields&&(d._fields={}),d._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[e]=!0):d._fieldsExpired&&(d._fieldsExpired[e]=!1),n&&(d.cookieRead(d.sessionCookieName)||d.cookieWrite(d.sessionCookieName,"1"))},d._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=O),t&&(t===O||t.match(ie.VALID_VISITOR_ID_REGEX))||(t="")),t},d._setFields=function(t,n){if(d._clearTimeout(t),null!=d._loading&&(d._loading[t]=!1),w.fieldGroupObj[t]&&w.setState(t,!1),"MC"===t){!0!==w.isClientSideMarketingCloudVisitorID&&(w.isClientSideMarketingCloudVisitorID=!1);var i=d._getField(v);if(!i||d.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:d._findVisitorID(n))){if(d._use1stPartyMarketingCloudServer&&!d.tried1stPartyMarketingCloudServer)return d.tried1stPartyMarketingCloudServer=!0,void d.getAnalyticsVisitorID(null,!1,!0);i=d._generateLocalMID()}d._setField(v,i)}i&&i!==O||(i=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&d._setFields(A,n),d._use1stPartyMarketingCloudServer&&n.mid&&d._setFields(S,{id:n.id})),d._callAllCallbacks(v,[i])}if(t===A&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=P.getRegionAndCheckIfChanged(n,r);d._callAllCallbacks("MCAAMLH",[a]);var o=d._getField(y);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),d._setFieldExpire(y,r),d._setField(y,o)),o||(o=""),d._callAllCallbacks(y,[o]),!n.error_msg&&d._newCustomerIDsHash&&d._setField("MCCIDH",d._newCustomerIDsHash)}if(t===S){var s=d._getField(b);s&&!d.overwriteCrossDomainMCIDAndAID||(s=d._findVisitorID(n),s?s!==O&&d._setFieldExpire(y,-1):s=O,d._setField(b,s)),s&&s!==O||(s=""),d._callAllCallbacks(b,[s])}if(d.idSyncDisableSyncs||d.disableIdSyncs)P.idCallNotProcesssed=!0;else{P.idCallNotProcesssed=!1;var l={};l.ibs=n.ibs,l.subdomain=n.subdomain,P.processIDCallData(l)}if(n===Object(n)){var c,f;u()&&d.isAllowed()&&(c=d._getField("MCOPTOUT"));var g=j.parseOptOut(n,c,O);c=g.optOut,f=g.d_ottl,d._setFieldExpire("MCOPTOUT",f,!0),d._setField("MCOPTOUT",c),d._callAllCallbacks("MCOPTOUT",[c])}},d._loading=null,d._getRemoteField=function(e,t,n,i,r){var a,o="",s=L.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(u()&&d.isAllowed()){d._readVisitor(),o=d._getField(e,!0===l[e]);if(function(){return(!o||d._fieldsExpired&&d._fieldsExpired[e])&&(!d.disableThirdPartyCalls||s)}()){if(e===v||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===y?a=A:e===b&&(a=S),a)return!t||null!=d._loading&&d._loading[a]||(null==d._loading&&(d._loading={}),d._loading[a]=!0,d._loadData(a,t,function(t){if(!d._getField(e)){t&&w.setState(a,!0);var n="";e===v?n=d._generateLocalMID():a===A&&(n={error_msg:"timeout"}),d._setFields(a,n)}},r)),d._registerCallback(e,n),o||(t||d._setFields(a,{id:O}),"")}else o||(e===v?(d._registerCallback(e,n),o=d._generateLocalMID(),d.setMarketingCloudVisitorID(o)):e===b?(d._registerCallback(e,n),o="",d.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==v&&e!==b||o!==O||(o="",i=!0),n&&i&&d._callCallback(n,[o]),o},d._setMarketingCloudFields=function(e){d._readVisitor(),d._setFields("MC",e)},d._mapCustomerIDs=function(e){d.getAudienceManagerBlob(e,!0)},d._setAnalyticsFields=function(e){d._readVisitor(),d._setFields(S,e)},d._setAudienceManagerFields=function(e){d._readVisitor(),d._setFields(A,e)},d._getAudienceManagerURLData=function(e){var t=d.audienceManagerServer,n="",i=d._getField(v),r=d._getField(y,!0),a=d._getField(b),o=a&&a!==O?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(d.loadSSL&&d.audienceManagerServerSecure&&(t=d.audienceManagerServerSecure),t){var s,l,c=d.getCustomerIDs();if(c)for(s in c)M(s)&&(l=c[s],o+="&d_cid_ic="+encodeURIComponent(s)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(d.loadSSL?"s":"")+"://"+t+"/id",f="d_visid_ver="+d.version+(g&&-1!==u.indexOf("demdex.net")?"&gdpr=1&gdpr_force=1&gdpr_consent="+g:"")+"&d_rtbd=json&d_ver=2"+(!i&&d._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(d.marketingCloudOrgID)+"&d_nsid="+(d.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===I?"&d_coop_safe=1":!1===I?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o,p=["s_c_il",d._in,e];return n=u+"?"+f+"&d_cb=s_c_il%5B"+d._in+"%5D."+e,{url:n,corsUrl:u+"?"+f,callback:p}}return{url:n}},d.appendVisitorIDsTo=function(e){try{var t=[[v,d._getField(v)],[b,d._getField(b)],["MCORGID",d.marketingCloudOrgID]];return d._addQuerystringParam(e,ie.ADOBE_MC,s(t))}catch(t){return e}},d.appendSupplementalDataIDTo=function(e,t){if(!(t=t||d.getSupplementalDataID(L.generateRandomString(),!0)))return e;try{var n=s([["SDID",t],["MCORGID",d.marketingCloudOrgID]]);return d._addQuerystringParam(e,ie.ADOBE_MC_SDID,n)}catch(t){return e}};var L={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==b)return!1;var i;return t||(t=d.trackingServer),n||(n=d.trackingServerSecure),!("string"!=typeof(i=d.loadSSL?n:t)||!i.length)&&(i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){Ve.remove(e,{domain:d.cookieDomain})},isTrackingServerPopulated:function(){return!!d.trackingServer||!!d.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};d._helpers=L;var P=re(d,C);d._destinationPublishing=P,d.timeoutMetricsLog=[];var w={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case S:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case A:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};d.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID},d.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut},d.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut},d.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut},d.idSyncGetOnPageSyncInfo=function(){return d._readVisitor(),d._getField("MCSYNCSOP")},d.idSyncByURL=function(e){if(!d.isOptedOut()){var t=l(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=P;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=j.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},d.idSyncByDataSource=function(e){if(!d.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,d.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},Ue(d,P),d._getCookieVersion=function(e){e=e||d.cookieRead(d.cookieName);var t=ie.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},d._resetAmcvCookie=function(e){var t=d._getCookieVersion();t&&!$.isLessThan(t,e)||L.removeCookie(d.cookieName)},d.setAsCoopSafe=function(){I=!0},d.setAsCoopUnsafe=function(){I=!1},function(){if(d.configs=Object.create(null),L.isObject(n))for(var e in n)M(e)&&(d[e]=n[e],d.configs[e]=n[e])}(),function(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=d[t];d[t]=function(e){return u()&&d.isAllowed()?i.apply(d,arguments):("function"==typeof e&&d._callCallback(e,[n]),n)}})}(),d.init=function(){if(c())var e=f.optIn.fetchPermissions(function(){f.optIn.isApproved(f.optIn.Categories.ECID)&&(d.configs.isIabContext?f.optIn.execute({command:"iabPlugin.fetchConsentData",callback:function(t,n){if(p=!0,t)throw new Error("[IAB plugin] : "+t);n.gdprApplies&&(g=n.consentString),d.init(),e()}}):(d.init(),e()))},!0);else!function(){if(L.isObject(n)){d.idSyncContainerID=d.idSyncContainerID||0,I="boolean"==typeof d.isCoopSafe?d.isCoopSafe:L.parseBoolean(d.isCoopSafe),d.resetBeforeVersion&&d._resetAmcvCookie(d.resetBeforeVersion),d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl(),d._readVisitor();var e=d._getField(D),t=Math.ceil((new Date).getTime()/ie.MILLIS_PER_DAY);d.idSyncDisableSyncs||d.disableIdSyncs||!P.canMakeSyncIDCall(e,t)||(d._setFieldExpire(y,-1),d._setField(D,t)),d.getMarketingCloudVisitorID(),d.getAudienceManagerLocationHint(),d.getAudienceManagerBlob(),d._mergeServerState(d.serverState)}else d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl()}(),function(){if(!d.idSyncDisableSyncs&&!d.disableIdSyncs){P.checkDPIframeSrc();var e=function(){var e=P;e.readyToAttachIframe()&&e.attachIframe()};h.addEventListener("load",function(){C.windowLoaded=!0,e()});try{ee.receiveMessage(function(e){P.receiveMessage(e.data)},P.iframeHost)}catch(e){}}}(),function(){d.whitelistIframeDomains&&ie.POST_MESSAGE_ENABLED&&(d.whitelistIframeDomains=d.whitelistIframeDomains instanceof Array?d.whitelistIframeDomains:[d.whitelistIframeDomains],d.whitelistIframeDomains.forEach(function(e){var n=new B(t,e),i=J(d,n);ee.receiveMessage(i,e)}))}()}};Be.config=oe,_.Visitor=Be;var Ge=Be,qe=je.OptIn,Ye=je.IabPlugin;return Ge.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=_.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=function(){if(j.isObject(t))return Object.keys(t).reduce(function(e,n){var i="doesOptInApply"!==n?t[n]:oe.normalizeConfig(t[n]),r=j.normalizeBoolean(i);return e[n]=r,e},Object.create(null))}();!function(e){_.adobe.optIn=_.adobe.optIn||function(){var t=j.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||Q(),n=n===window.location.hostname?"":n,t.optInCookieDomain=n;var i=new qe(t,{cookies:Ve});if(t.isIabContext){var r=new Ye(window.__cmp);i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new Ge(e,null,a);j.isObject(i)&&i.cookieDomain&&(o.cookieDomain=i.cookieDomain),function(){_.s_c_il.splice(--_.s_c_in,1)}();var s=j.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var l=function(){try{return _.self!==_.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(o)&&_.parent?new q(e,i,o,_.parent):new Ge(e,i,a);return o=null,l.init(),l},function(){function e(){Ge.windowLoaded=!0}_.addEventListener?_.addEventListener("load",e):_.attachEvent&&_.attachEvent("onload",e),Ge.codeLoadEnd=(new Date).getTime()}(),Ge}();

var visitor = Visitor.getInstance("1E0D22CE527845790A490D4D@AdobeOrg", {
     trackingServer: "metric.makemytrip.com", // same as s.trackingServer
     trackingServerSecure: "metrics.makemytrip.com", // same as s.trackingServerSecure

     // To enable CNAME support, add the following configuration variables
     marketingCloudServer: "metric.makemytrip.com",
     marketingCloudServerSecure: "metrics.makemytrip.com" // same as s.trackingServerSecure
});



/*
====================================== OMNITURE JS ADDITION ! ============================================================

*/


var d = new Date();

if (typeof isTestServ == 'undefined')
	var isTestServ = false;

if (typeof server_IP == 'undefined')
	var server_IP = 'NoServerIP';

var trackserverIP = server_IP;

/*
if (!isTestServ) {
	if (typeof(omnitureABrsid) == 'undefined')
		var s_account = "mmtprod";
	else if (omnitureABrsid == "")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "A")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "B")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "C")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "D")
		var s_account = "mmtprod";

} else {
	if (typeof(omnitureABrsid) == 'undefined')
		var s_account = "mmtdev";
	else if (omnitureABrsid == "")
		var s_account = "mmtdev";
	else if (omnitureABrsid == "A")
		var s_account = "mmtdev";
	else if (omnitureABrsid == "B")
		var s_account = "mmtdev";
}
*/

var s_account = "mmtprod";

var s_year = d.getFullYear();

var s=s_gi(s_account);

s.visitor = Visitor.getInstance("1E0D22CE527845790A490D4D@AdobeOrg");

s.account = s_account;

s.trackDownloadLinks = true
	s.trackExternalLinks = true
	s.trackInlineStats = true
	s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
	s.linkInternalFilters = "javascript:,javascrip:,www.securesuite.net,www.verifiedbyvisa.com,3dsecure.payseal.com,secure5.arcot.com,cardsecurity.enstage.com,acs.bccard.com,3dsecure.banquepopulaire.fr,secure2.arcot.com,cardsecure.kkb.kz,hsbc.com.my,handelsbanken.modirum.com,acs-3dsecure.creditmutuel.fr,3ds-par-ab.fortisbanking.be,securecode.ing.nl,acs-3dsecure.cic.fr,3ds.cardcenter.ch,hsbc.wlp-acs.com,citibank.com.sg,hsbc.com.hk,www.mycardsecure.com,bankserv.co.za,bor.electracard.com,secure6.arcot.com,www.verifiedbyvisa-mastercardsecurecode.com,cap.securecode.com,barclaycard.co.uk,ubi.electracard.com,pnb.electracard.com,corpbank.electracard.com,securesuite.co.uk,secure.axisbank.com,hsbc.co.in,cardsecurity.standardchartered.com,secure4.arcot.com,citibank.co.in,netsafe.hdfcbank.com,3dsecure.icicibank.com,secure.avenues.info,//makemytrip.com,.makemytrip.com,acs1.3dsecure.no,hsbc.com.ph,sicheres-bezahlen.bw-bank.de,3dsecure.paylife.at,3dsecure.vinea.es,samsungcard.co.kr,3dsecure-prd2.monext.fr,hsbc.com.vn,visa.com.ar,taishinbank.com.tw,tds.pbebank.com,securevbv.concordefs.com,yescard.co.kr,securepay.hsbc.lk,vbv.shinhancard.com,cimbsecuree-pay.com.my,directaccess-securee-pay.com.my,www.dbindia.in,telepago.4b.com,lbp.wlp-acs.com,acs.luottokunta.fi,acsbcc.banxafe.be,tdsc.53.com,barclays.co.uk,acscartasi.ssb.it,cnce.wlp-acs.com,bnpp.wlp-acs.com,chinatrust.com.tw,acs.sbrf.ru,onlineauthentication.com.au,clicksafe.lloydstsb.com,www.tpsl-india.in,acs.cmbchina.com,sas.sermepa.es,acs.cafis-paynet.jp,ipay.bangkokbank.com,ca-sp.wlp-acs.com,sg.wlp-acs.com,bred.wlp-acs.com,www.sebkort.com,cdn.wlp-acs.com,168.1.87,168.1.94,secure3d.ing.be,paymate.co.in,acsweb.dnp-cdms.jp,hsbc.co.id,stgeorge.com.au,3ds.e-cartebleue.com,www.monetaonline.it,lottecard.co.kr,credit-mutuel.wlp-acs.com,160.224.66,3dauthentication.bankcomm.com,3dsolution.com.br,boccc.com.hk,verifiedbyvisa.skandiabanken.no,www.alignet-acs2.com,www.secure2gw.ro,suche.aolsvc.de,scb.co.th,3ds-par-a.fortisbanking.be,notify.barclays.com,25.1.3,icbc.com.cn,www.mbfcards.com,3d.seb.lv,rt03.kasikornbank.com,verifiedbyvisa.skandiabanken.se,vbv.mbnet.pt,ipg.cardcomplete.com,acsv.centrum24.pl,fisc.com.tw,3d-secure.seb-bank.de,finansbank.com.tr,3d.cupdata.com,acsm.centrum24.pl,acs1.swedbank.se,3dsecure.monext.fr,www.ccavenue.com,www.billdesk.com,.makemytrip.co.in,.makemytrip.ae,.makemytrip.ca,www.tecprocesssolution.in,www.paypal.com,secure.paymate.co.in,www.mchek.com,india.makemytrip.com,www.itzcash.com,onlineverification.icicibank.com,infinity.icicibank.co.in,www.beam.co.in,services.atomtech.in,vpos.amxvpos.com,migs.mastercard.com.au,makemytripdeals.com,makemytrip.custhelp.com,makemytrip.ae,makemytrip.ca,makemytrip.sg,secure.booking.com,secureonline.idbibank.com,mbnapayerauth.com,3dsg.dbs.com,vcas1.visa.com,tsys.arcot.com,sibacs.electrapay.com,3dsecure.icscards.nl,cbi.electracard.com,axis-acs1.enstage-sas.com,acs3.3dsecure.no,uob3ds.uobgroup.com,maybank.com.my,fnb.co.za,acs1.luottokunta.fi,acs4.3dsecure.no,secure7.arcot.com,apac.citibank.com,ccb.com.cn,3dsecure.deutsche-bank.de,sicher-einkaufen.commerzbank.de,secure.lcl.fr,3dssg.ocbc.com,acs.alfabank.ru,cosacs.electrapay.com,acs1.viseca.ch,acs.sia.eu,sicheresbezahlen.lbb.de,cal-online.co.il,acs.netcetera.ch,betalen.rabobank.nl,acs2.swedbank.se,acs.swisscard.ch,3d-secure.postbank.de,cardsecurity.enstage-sas.com,3ds.bnpparibas.com,belgium-3dsecure.wlp-acs.com,3dsecure.bpce.fr,verifiedbyvisa.comdirect.de,acs2.sbrf.ru,keb.co.kr,cimb-securee-pay.cimb.com,orbitall.com.br,acs1.edb.com,acs1.sbrf.ru,bkm.com.tr,doubleclick.net,zedo.com"
	s.linkLeaveQueryString = false
	s.linkTrackVars = "None"
	s.linkTrackEvents = "None"

	s.ActionDepthTest = true;

if (!isTestServ) {
	s.dynamicAccountSelection = true;
	s.dynamicAccountMatch = window.location.host;
	s.dynamicAccountList = "mmtotb=oktatabyebye.com;mmtprod=makemytrip.us;mmtprod=makemytrip.ae;mmtprod=makemytrip.ca;mmtprod=b2b.makemytrip.com,b2brail.makemytrip.com,intl.makemytrip.com,b2bhotels.makemytrip.com,b2b-int-hotels.makemytrip.com,b2bholidays.makemytrip.com,europe.makemytrip.com";
}

s.siteID = "" // leftmost value in pagename
	s.defaultPage = "" // filename to add when none exists
	s.queryVarsList = "" // query parameters to keep
	s.pathExcludeDelim = ";" // portion of the path to exclude
	s.pathConcatDelim = "" // page name component separator
	s.pathExcludeList = "" // elements to exclude from the path

	s.cookieDomainPeriods = "2"
	s.fpCookieDomainPeriods = "2"
	var d = window.location.hostname
	if (d.indexOf('.co.in') > -1) {
		s.cookieDomainPeriods = "3"
			s.fpCookieDomainPeriods = "3"
	}

	if (typeof(trackserverIP) == 'undefined') {
		var trackserverIP = 'NoServer';
	}

s.eVar28 = trackserverIP;
s.prop28 = trackserverIP;

s.usePlugins = true

	/*Function to read cookie*/
function getmmtCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}

function s_doPlugins(s) {

	if (s.ActionDepthTest) {
		s.pdvalue = s.getActionDepth("s_depth");
		if (s.pdvalue) {
			s.prop57 = s.pdvalue;
		}
	}

	s.ActionDepthTest = false;

if(s.pageName)
{
var ppv_c = s.getPercentPageViewed(); //Get values for prior page, pass this page's identifier
	if (ppv_c && ppv_c.length >= 4) { //Were values for the prior page returned?
		var ppv_pn = (ppv_c.length > 0) ? (ppv_c[0]) : (''); //Extract last page's identifier
		var ppv_v = ((ppv_c.length > 0) ? (ppv_c[1]) : ('')) //Extract last page's total % viewed
		 + ((ppv_c.length > 2) ? ('|' + ppv_c[2]) : ('')); //Extract last page's initial % viewed, separated by '|'
		if (ppv_pn && ppv_v) { //Was pageName and percent % viewed values found?
			s.prop72 = ppv_pn; //Store percent page viewed values in the variable of your choice
			s.prop73 = ppv_v; //Store the page identifier in the variable of your choice
		}
		if (ppv_c.length > 0) {
			if (ppv_c[2] <= 25) {
				s.prop74 = "Less than 25%";
			} else if (ppv_c[2] > 25 && ppv_c[2] <= 50) {
				s.prop74 = "25% to 50%";
			} else if (ppv_c[2] > 50 && ppv_c[2] <= 75) {
				s.prop74 = "50% to 75%";
			} else if (ppv_c[2] > 75) {
				s.prop74 = "More than 75%";
			} else {
				s.prop74 = "None";
			}

			if (ppv_c[1] <= 25) {
				s.prop75 = "Less than 25%";
			} else if (ppv_c[1] > 25 && ppv_c[1] <= 50) {
				s.prop75 = "25% to 50%";
			} else if (ppv_c[1] > 50 && ppv_c[1] <= 75) {
				s.prop75 = "50% to 75%";
			} else if (ppv_c[1] > 75) {
				s.prop75 = "More than 75%";
			} else {
				s.prop75 = "None";
			}

		}

	}
}
    /* Legacy Visitor ID */
	s.prop26 = s.c_r("s_vi");

	/* Marketing Cloud ID */
	s.prop38 = s.eVar84 = s.marketingCloudVisitorID;

	s.eVar100 = s.getQueryParam('source');

	/* Marketing Cloud Visitor ID present/absent */
	s.prop37 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

	s.prop56 = s.getDaysSinceLastVisit('s_lv');

	if (!s.campaign) {
		var omCmp = s.getQueryParam('cmp');
		if (!omCmp && (typeof(cmp) != 'undefined' && cmp)) {
			omCmp = cmp;
		}
		if (omCmp)
			s.campaign = omCmp;
	}
	if (s.campaign != '') {
		s.prop36 = s.getAndPersistValue(s.campaign, 's_cmp_pages', 0);
	}
	if (s.prop36 != '') {
		s.prop51 = s.prop36 + " | " + s.pageName;
	}

	var ref = document.referrer
		if (ref != '') {
			var kw = s.getQueryParam('q', '', ref);
			if (typeof(kw) != 'undefined' && kw != '') {
				s.prop33 = s.getAndPersistValue(kw, 's_google_query', 0);
			}
		}
		if (s.prop33 && typeof(s.prop33) != 'undefined' && s.prop33 != '') {
			s.prop21 = s.prop33 + " | " + s.pageName;
		}

		if (s.campaign != '') {
			s.eVar51 = 'D=v0'
				s.eVar52 = 'D=v0'
				s.eVar53 = 'D=v0'
				s.eVar54 = 'D=v0'
				s.eVar55 = 'D=v0'
				s.eVar56 = 'D=v0'
				s.eVar57 = 'D=v0'
		}

		s.clickThruQuality('cmp', 'event19', 'event20')
		if (!s.eVar21)
			s.eVar21 = s.getValOnce(s.getQueryParam('intid'), 's_eVar21', 0)

				/*virenderb for MTR cookie*/
				if (!s.eVar71)
					s.eVar71 = s.getValOnce(s.c_r('_z'), 's_eVar71', 0)

						if (s.events && s.events.indexOf("event1") == -1)
							s.events = s.apl(s.events, "event1", ",", 1)
								if (!s.pageName)
									s.pageName = s.getPageName()
										s.prop23 = s.getPreviousValue(s.pageName, 'gpv_pn', '')
										s.eVar15 = s.pageName
										s.prop27 = window.location.pathname
										s.eVar18 = s.getVisitNum();
								var r3650 = s.getNewRepeat(3650, 's_nr3650');
						var r30 = s.getNewRepeat(30, 's_nr30');
				var r120 = s.getNewRepeat(120, 's_nr120');
		var r7 = s.getNewRepeat(7, 's_nr7');
	s.prop41 = r7 + "|" + r30 + "|" + r120 + "|" + r3650;
	if (r30 == 'New')
		s.events = s.apl(s.events, "event17", ",", 1);
	if (r3650 == 'New')
		s.events = s.apl(s.events, "event18", ",", 1);


	//s.prop26=s.getValOnce(s.c_r('s_vi'),'s_c26',0);
	if (!s.eVar34)
		s.eVar34 = s.getValOnce(s.getQueryParam('eid'), 's_eVar34', 0);
	var propsToCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19, 22, 23, 24, 25, 26, 27, 29, 30, 40, 41, 43, 44, 48, 49, 50];
	var index;
	for (var i = 0; i < propsToCopy.length; i++) {
		index = propsToCopy[i];
		eval('if (s.prop' + index + ' && !s.evar' + index + ') s.eVar' + index + '=\'D=c' + index + '\'');


	}
/*SC to TT Integration - Commented as integration will now be handled by A4T
mboxLoadSCPlugin(s);
s.tnt = s.trackTNT();
*/

} //end do plugins

s.doPlugins = s_doPlugins

	/************************** PLUGINS SECTION *************************/
/*
 * Utility: AppMeasurement Compatibility v1.1
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s.wd=window;
s.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x");
s.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l"
+"]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs"
+"tring(z,x[l]);t=z<x[l]?t:''}return''");
s.rep=new Function("x","o","n",""
+"var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for("
+"i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){"
+"j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i"
+">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi"
+"n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s.ape=new Function("x",""
+"var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y"
+"='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp"
+"onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf("
+"n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}"
+"else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub"
+"string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e="
+"h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='"
+"+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2"
+"B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)"
+"{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst"
+"ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst"
+"ring(i);i=x.indexOf('%',i)}}}return x");
s.epa=new Function("x",""
+"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
+"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
+"(x)}return y');return tcf(x)}else return unescape(x)}return y");
s.parseUri=new Function("u",""
+"if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')"
+"==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr"
+"eateElement('a'),l=['href','protocol','host','hostname','port','pat"
+"hname','search','hash'],p,r={href:u,toString:function(){return this"
+".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p"
+"]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam"
+"e='/'+p;return r");
s.gtfs=new Function(""
+"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
+"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
+"d.referrer:d.location;return{location:s.parseUri(u)}");

function mboxLoadSCPlugin(a){if(!a){return null}a.m_tt=function(c){var b=c.m_i("tt");b.W=true;b.r="makemytrip";b._t=function(){if(!this.isEnabled()){return}var e=this._c();if(e){var d=new mboxScPluginFetcher(this.r,this.s);e.setFetcher(d);e.load()}};b.isEnabled=function(){return this.W&&mboxFactoryDefault.isEnabled()};b._c=function(){var e=this.ad();var d=document.createElement("DIV");return mboxFactoryDefault.create(e,new Array(),d)};b.ad=function(){var d=this.s.events&&this.s.events.indexOf("purchase")!=-1;return"SiteCatalyst: "+(d?"purchase":"event")}};return a.loadModule("tt")}
/*
* TNT Integration Plugin v2.1AM
*/
s.trackTNT=new Function("v","p","b",""
+"var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false"
+",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get"
+"QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c"
+"ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if("
+"(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in"
+"dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B"
+"ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:"
+"00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara"
+"m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp"
+"ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util."
+"getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi"
+"ned)r+=window[v];if(b)window[v]='';return r;");

/*
 * Plugin: getPercentPageViewed 2.0 (Minified)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="";if(!s.c_r("tp")||decodeURIComponent(s.c_r("s_ppv").split(",")[0])!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):pv,cy=a.length>3?parseInt(a[3]):
0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit = new Function("c", ""
		 + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
		 + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
		 + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
		 + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
		 + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
		 + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
		 + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
		 + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
		 + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
		 + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
		 + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
		 + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
		 + "!=f5) return '';else return cval_s;");

/*
 * Plugin: getActionDepth v1.0
 */
s.getActionDepth = new Function("c", ""
		 + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
		 + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
		 + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

/*
 * Plugin: getQueryParam 2.4
 */
s.getQueryParam = new Function("p", "d", "u", "h", ""
		 + "var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
		 + "tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
		 + "?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
		 + "')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
		 + "g(i==p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "h", ""
		 + "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
		 + "string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", ""
		 + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
		 + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
		 + "epa(v)}return''");

/*
 * Plugin: channelExtract : 1.0 - returns site section based on delimiter
 */
s.channelExtract=new Function("d","p","u","pv",""
+"var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
+")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
+"ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
+"l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
+"'';");

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName = new Function("u", ""
		 + "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
		 + "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
		 + "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
		 + "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
		 + "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
		 + "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
		 + "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
		 + "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
		 + ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
		 + "ubstring(x+1)}return n");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce = new Function("v", "c", "e", ""
		 + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
		 + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin Utility: Append to List v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");

/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
 */

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: clickThruQuality 1.0
 */
s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", ""
		 + "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even"
		 + "ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct"
		 + "h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct"
		 + ",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c"
		 + "_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev"
		 + "+cp_ev;}}}");
s.p_fo = new Function("n", ""
		 + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
		 + "new Object;return 1;}else {return 0;}");

/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join=new Function("v","p",""
+"var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'"
+"';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x"
+"<v.length;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else s"
+"tr+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Utility Function: p_c
 */
s.p_c = new Function("v", "c", ""
		 + "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
		 + "ngth:x).toLowerCase()?v:0");

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");


/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");


  /*
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");

/*
 * Cookie Combining Utility v.5
 */

if(!s.__ccucr)
{
    s.c_rr = s.c_r;
    s.__ccucr = true;
    function c_r(k)
    {
        var s = this, d = new Date, v = s.c_rr(k), c = s.c_rspers(), i, m, e;
        if(v) return v; k = s.escape ? s.escape(k) : encodeURIComponent(k);
        i = c.indexOf(' ' + k + '='); c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i); m = m > 0 ? m : e;
        v = i < 0 ? '' : s.unescape ? s.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        return v;
    }
    function c_rspers()
    {
        var s = this, cv = s.c_rr("s_pers"), date = new Date().getTime(), expd = null, cvarr = [], vcv = "";
        if(!cv) return vcv; cvarr = cv.split(";"); for(var i = 0, l = cvarr.length; i < l; i++)  { expd = cvarr[i].match(/\|([0-9]+)$/);
        if(expd && parseInt(expd[1]) >= date) { vcv += cvarr[i] + ";"; } } return vcv;
    }
    s.c_rspers = c_rspers;
    s.c_r = s.cookieRead = c_r;
}
if(!s.__ccucw)
{
    s.c_wr = s.c_w;
    s.__ccucw = true;
    function c_w(k, v, e)
    {
        var s = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t, f;
        d.setTime(d.getTime() - 60000); if(s.c_rr(k)) s.c_wr(k, '', d); k = s.escape ? s.escape(k) : encodeURIComponent(k);
        pv = s.c_rspers(); i = pv.indexOf(' ' + k + '='); if(i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; }
        sv = s.c_rr(sn); i = sv.indexOf(' ' + k + '='); if(i > -1) { sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
        sc = 1; } d = new Date; if(e) { if(e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
        if(e.getTime() > d.getTime()) {  pv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
        pc = 1; } } else { sv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + ';';
        sc = 1; } sv = sv.replace(/%00/g, ''); pv = pv.replace(/%00/g, ''); if(sc) s.c_wr(sn, sv, 0);
        if(pc) { t = pv; while(t && t.indexOf(';') != -1) { var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
        t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht; } d.setTime(ht); s.c_wr(pn, pv, d); }
        return v == s.c_r(s.unescape ? s.unescape(k) : decodeURIComponent(k));
    }
    s.c_w = s.cookieWrite = c_w;
}

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "makemytrip"
	s.trackingServer = "metric.makemytrip.com"
	s.trackingServerSecure = "metrics.makemytrip.com"
	s.dc = "122"

	/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,m;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(m=0;m<b.length&&(c=b[m++]);)if(-1<a.indexOf(c))return null;n=1;return a}function p(a,d,b,c,e){var g,k;if(a.dataset&&(k=a.dataset[d]))g=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+b))g=k;else if(k=a.getAttribute(b))g=k;if(!g&&f.useForcedLinkTracking&&e){var h;a=a.onclick?""+a.onclick:"";varValue="";if(c&&a&&(d=a.indexOf(c),0<=d)){for(d+=c.length;d<a.length;)if(b=a.charAt(d++),
0<="'\"".indexOf(b)){h=b;break}for(k=!1;d<a.length&&h;){b=a.charAt(d);if(!k&&b===h)break;"\\"===b?k=!0:(varValue+=b,k=!1);d++}}(h=varValue)&&(f.w[c]=h)}return g||e&&f.w[c]}function q(a,d,b){var c;return(c=e[d](a,b))&&(n?(n=0,c):g(h(c),e[d+"Exclusions"]))}function r(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&s[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==
(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)r(c[a],d,b)}function h(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}",
"mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var l=window;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);e._il=l.s_c_il;e._in=l.s_c_in;e._il[e._in]=e;l.s_c_in++;e._c="s_m";e.c={};var n=0,s={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=q(e,"link",f.linkName))&&(b=q(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,
127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(h(d),e.linkExclusions);else if((b=a)&&!(b=p(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(h(a.innerText||a.textContent),e.linkExclusions))||(r(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(h(c.join(""))))||(f=g(h(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(h(a.value)):"IMAGE"==c&&a.src&&(f=g(h(a.src)))));b=f}return b};
e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=p(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.14.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.14.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.ac;q||(q=null);var p=k,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!=""+s&&p.location&&""+m.location!=""+p.location&&m.location.host==s.host;)p=m,m=p.parent}catch(u){}a.D=function(a){try{console.log(a)}catch(b){}};a.Pa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Hb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ha&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ha=0<d?c.substring(d):c}return a.Ha};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Hb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.Eb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.sb(a,function(){}))};a.sb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.M=[];a.fa=function(c,b,d){if(a.Ia)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ga)for(a.ga=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ga=0,a.delayReady())});f=1;e=0}else d||a.o("_d")&&(f=1);f&&(a.M.push({m:c,a:b,t:e}),a.ga||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.za();0<a.M.length;){d=a.M.shift();if(b&&!d.t&&d.t>c){a.M.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ia=1;a[d.m].apply(a,d.a);a.Ia=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.fa("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.Q,(h=a.lightTrackVars)&&(h=","+h+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Yb,f=a[e].Xb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.q=function(c,
b,d,f,e){var g="",h,l,k,n,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),n=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Pa(n)&&("prop"==k?h="c"+n:"eVar"==k?h="v"+n:"list"==k?h="l"+n:"hier"==k&&(h="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Kb=function(){var c="",b,d,f,e,g,h,l,k,n="",m="",p=e="",r=a.V();if(a.lightProfileID)b=a.Q,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Yb,m=a[e].Xb));n&&(n=","+n+","+a.G.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&a.xa()&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",e))}a.AudienceManagement&&
a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.X("ECID")&&(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],n,e));g="";break;default:a.Pa(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.ec||"undefined"!=""+a.Tb&&"HTML"!=(""+a.Tb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.La=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.N=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.La(c),e)?{id:e.substring(0,100),type:g}:0};a.bc=function(c){for(var b=a.C(c),d=a.N(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.N(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Sb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.N(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.N(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.La(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(p=g[h])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Oa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)p=g[h],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Lb=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Ob()){var b={},d=0,e=a.nb(),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.q("c",h)+
(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),
h--);a.tb(e)}}}return c};a.nb=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return k.sessionStorage.getItem(a.R)}else return a.cookieRead(a.R)};a.Ca=function(){return k.sessionStorage?!0:!1};a.tb=function(c){a.useLinkTrackSessionStorage?a.Ca()&&k.sessionStorage.setItem(a.R,c):a.cookieWrite(a.R,c)};a.Mb=function(){if(!a.Wb){var c=new Date,b=p.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l=
"1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.cc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=q;a.homepage=m;a.Wb=1}};a.S={};a.loadModule=function(c,b){var d=a.S[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.S[c]=a[c]=d;d.ib=function(){return d.qb};d.ub=function(b){if(d.qb=b)a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.ib,set:d.ub}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d))};a.o=function(c){var b,d;for(b in a.S)if(!Object.prototype[b]&&(d=a.S[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Ob=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Pb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);
if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.T=function(c,b){var d,f,e,g,h,k,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Da:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(h&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])h[k]||(h[k]=a[g][k]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=h}return m};a.$b=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Da:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&
"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"referrer"!==e||(c["!"+e]=1)};a.Gb=function(a){var b,d,f,e,g,h=0,k,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),
0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?k=m+"&"+n:n=""}d=
253-(k.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.bb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ca=!1;a.J=!1;a.wb=function(){a.J=!0;a.H()};a.K=!1;a.U=!1;a.xb=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=
c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.K=!1;a.U=!0;a.H()};a.ab=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.aa=!1;a.I=!1;a.za=function(){a.I=!0;a.H()};a.isReadyToTrack=function(){var c=!0;if(!a.mb()||!a.lb())return!1;a.xa()||(c=!1);a.pb()||(c=!1);return c};a.mb=function(){a.ca||a.J||(a.bb(a.wb)?a.J=!0:a.ca=!0);return a.ca&&!a.J?!1:!0};a.lb=function(){var c=a.va();
if(c)if(a.ta||a.ba)if(a.ta){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.rb,!0),a.ba=!0,!1;return!0};a.X=function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return k.adobe&&k.adobe.optIn?k.adobe.optIn:null};a.xa=function(){var c=a.V();return c&&c.getVisitorValues&&(a.K||a.U||(a.K=!0,c.getVisitorValues(a.xb)),a.K&&!a.U)?!1:!0};a.V=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.pb=function(){a.aa||
a.I||(a.ab(a.za)?a.I=!0:a.aa=!0);return a.aa&&!a.I?!1:!0};a.ba=!1;a.rb=function(){a.ba=!1;a.ta=!0};a.l=q;a.r=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Bb=c;f.Ab=b;f.yb=d;a.l==q&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100))};a.H=function(){var c;if(a.isReadyToTrack()&&(a.vb(),a.l!=q))for(;0<a.l.length;)c=a.l.shift(),c.Ab.apply(c.Bb,c.yb)};a.vb=function(){a.r&&(clearInterval(a.r),a.r=0)};a.kb=function(c){var b,d=q;if(!a.isReadyToTrack()){d={};a.$b(d);if(c!=q)for(b in c)d[b]=
c[b];a.callbackWhenReadyToTrack(a,a.track,[d]);return!0}return!1};a.Ib=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),
g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset()),h=a.V();a.o("_s");b&&a.T(b);a.kb(c)||(c&&(d=a.T(c,1)),a.Pb()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Ib()),a.Sb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Za||(f=a.Util.getQueryParam("adobe_mc_ref",
null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:p.document.referrer),a.Za=1,a.referrer=a.Gb(a.referrer),a.o("_g")),a.Lb()&&!a.abort&&(h&&a.X("TARGET")&&!a.supplementalDataID&&h.getSupplementalDataID&&(a.supplementalDataID=h.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.X("AAM")||(a.contextData["cm.ssf"]=1),a.Mb(),g+=a.Kb(),a.ob(e,g),a.o("_t"),a.referrer=""))));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=
a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0;d&&a.T(d,1)};a.Ba=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback")};a.fb=function(c){a.ua(a.Ba,c)};a.Aa=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&
a.D("DEBUG: Non function type passed to registerPostTrackCallback")};a.eb=function(c){a.ua(a.Aa,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.D(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=
d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.ob=function(c,b){var d=a.gb()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.ya()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";
a.fb(d);a.cb(d);a.W()};a.gb=function(){var c=a.hb();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.ya()?"10":"1")+"/JS-"+a.version+(a.Vb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.ya=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.hb=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=
a.jb()+"."+c+".2o7.net");return b};a.jb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.Zb=RegExp(a.Ya.source,"g");a.Fb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Zb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ya),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&
"timestampz"==h[2]&&(k=a.Jb());d.c=d.c.replace(g,a.escape(k))}}};a.Jb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Fb(c),
"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.cb=function(c){a.i||a.Nb();a.i.push(c);a.ia=
a.B();a.Wa()};a.Nb=function(){a.i=a.Qb();a.i||(a.i=[])};a.Qb=function(){var c,b;if(a.oa()){try{(b=k.localStorage.getItem(a.ma()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ma=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;return c};a.W=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.ra(),a.p))return;a.Na=q;if(a.na)a.ia>a.P&&a.Ua(a.i),a.qa(500);else{var c=a.zb();if(0<c)a.qa(c);else if(c=a.Ja())a.p=
1,a.Rb(c),a.Ub(c)}};a.qa=function(c){a.Na||(c||(c=0),a.Na=setTimeout(a.W,c))};a.zb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Sa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ja=function(){if(0<a.i.length)return a.i.shift()};a.Rb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};
a.Z=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Z=!0,a.Y=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.Y=function(a){return k.$.parseJSON(a)},a.Z=!0):a.Y=function(){return null};a.Ub=function(c){var b,d,f;a.wa()&&2047<c.length&&(a.$a()&&(d=1,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Z?b.Ea=!0:b=0));!b&&a.Xa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&
(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=2):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.Ta=Date.now();b.Ga=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ra=function(){b.Ta&&(a.ja=Date.now()-b.Ta);a.eb(c);b.Ga();a.Db();a.da();a.p=0;a.W();if(b.Ea){b.Ea=!1;try{a.doPostbacks(a.Y(b.responseText))}catch(d){}}};
b.onabort=b.onerror=b.Ka=function(){b.Ga();(a.trackOffline||a.na)&&a.p&&a.i.unshift(a.Cb);a.p=0;a.ia>a.P&&a.Ua(a.i);a.da();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.ra():b.Ka())};a.Sa=a.B();if(1==d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,2==d){if(a.Qa)try{f.removeChild(a.Qa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);
a.Qa=a.A}b.F=setTimeout(function(){b.F&&(b.complete?b.ra():(a.trackOffline&&b.abort&&b.abort(),b.Ka()))},5E3);a.Cb=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.L||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,a.forcedLinkTrackingTimeout)};a.$a=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.Db=function(){if(a.oa()&&!(a.Ra>a.P))try{k.localStorage.removeItem(a.ma()),a.Ra=a.B()}catch(c){}};
a.Ua=function(c){if(a.oa()){a.Wa();try{k.localStorage.setItem(a.ma(),k.JSON.stringify(c)),a.P=a.B()}catch(b){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ja()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.B=function(){return(new Date).getTime()};a.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&
0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Vb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.T(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&
(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>
e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.Q=a.ka.slice(0);a.Da="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.Q.push("prop"+m)),a.g.push("eVar"+m),a.Q.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.R="s_sq";a.Sa=0;a.ia=0;a.P=0;a.Ra=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Xa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Xa=!0}}catch(x){}a.da=function(){a.ea&&(k.clearTimeout(a.ea),a.ea=q);a.k&&a.L&&a.k.dispatchEvent(a.L);a.v&&("function"==typeof a.v?
a.v():a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.L=a.v=0};a.Va=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Fa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.Fa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.O&&a.O==a.clickObject||!(a.clickObject.tagName||
a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var h=a.O=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.O==h&&(a.O=0)},1E4);f=a.Ma();a.track();if(f<a.Ma()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Oa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.L=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Fa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Va,30)};a.Eb();a.fc||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Va(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(k)for(q=0;!t&&q<k.length;){a=k[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,q,p;if(a)for(k=0;k<a.length;k++)q=a[k],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();
