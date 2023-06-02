(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function q(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var r=q(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var f=0;f<a.length-1;f++){var h=a[f];if(!(h in c))break a;c=c[h]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(f+(l||"")+"_"+h++,l)}
function c(l,m){this.g=l;p(this,"description",{configurable:!0,writable:!0,value:m})}
if(a)return a;c.prototype.toString=function(){return this.g};
var f="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var f=r[b[c]];"function"===typeof f&&"function"!=typeof f.prototype[a]&&p(f.prototype,a,{configurable:!0,writable:!0,value:function(){return v(n(this))}})}return a});
function v(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:n(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(d){this.g=(e+=Math.random()+1).toString();if(d){d=w(d);for(var g;!(g=d.next()).done;)g=g.value,this.set(g[0],g[1])}}
function c(){}
function f(d){var g=typeof d;return"object"===g&&null!==d||"function"===g}
function h(d){if(!y(d,m)){var g=new c;p(d,m,{value:g})}}
function l(d){var g=Object[d];g&&(Object[d]=function(k){if(k instanceof c)return k;Object.isExtensible(k)&&h(k);return g(k)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),g=Object.seal({}),k=new a([[d,2],[g,3]]);if(2!=k.get(d)||3!=k.get(g))return!1;k.delete(d);k.set(g,4);return!k.has(d)&&4==k.get(g)}catch(u){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var e=0;b.prototype.set=function(d,g){if(!f(d))throw Error("Invalid WeakMap key");h(d);if(!y(d,m))throw Error("WeakMap key fail: "+d);d[m][this.g]=g;return this};
b.prototype.get=function(d){return f(d)&&y(d,m)?d[m][this.g]:void 0};
b.prototype.has=function(d){return f(d)&&y(d,m)&&y(d[m],this.g)};
b.prototype.delete=function(d){return f(d)&&y(d,m)&&y(d[m],this.g)?delete d[m][this.g]:!1};
return b});
t("Map",function(a){function b(){var e={};return e.previous=e.next=e.head=e}
function c(e,d){var g=e.g;return v(function(){if(g){for(;g.head!=e.g;)g=g.previous;for(;g.next!=g.head;)return g=g.next,{done:!1,value:d(g)};g=null}return{done:!0,value:void 0}})}
function f(e,d){var g=d&&typeof d;"object"==g||"function"==g?l.has(d)?g=l.get(d):(g=""+ ++m,l.set(d,g)):g="p_"+d;var k=e.data_[g];if(k&&y(e.data_,g))for(e=0;e<k.length;e++){var u=k[e];if(d!==d&&u.key!==u.key||d===u.key)return{id:g,list:k,index:e,h:u}}return{id:g,list:k,index:-1,h:void 0}}
function h(e){this.data_={};this.g=b();this.size=0;if(e){e=w(e);for(var d;!(d=e.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),d=new a(w([[e,"s"]]));if("s"!=d.get(e)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var g=d.entries(),k=g.next();if(k.done||k.value[0]!=e||"s"!=k.value[1])return!1;k=g.next();return k.done||4!=k.value[0].x||"t"!=k.value[1]||!g.next().done?!1:!0}catch(u){return!1}}())return a;
var l=new WeakMap;h.prototype.set=function(e,d){e=0===e?0:e;var g=f(this,e);g.list||(g.list=this.data_[g.id]=[]);g.h?g.h.value=d:(g.h={next:this.g,previous:this.g.previous,head:this.g,key:e,value:d},g.list.push(g.h),this.g.previous.next=g.h,this.g.previous=g.h,this.size++);return this};
h.prototype.delete=function(e){e=f(this,e);return e.h&&e.list?(e.list.splice(e.index,1),e.list.length||delete this.data_[e.id],e.h.previous.next=e.h.next,e.h.next.previous=e.h.previous,e.h.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
h.prototype.has=function(e){return!!f(this,e).h};
h.prototype.get=function(e){return(e=f(this,e).h)&&e.value};
h.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};
h.prototype.keys=function(){return c(this,function(e){return e.key})};
h.prototype.values=function(){return c(this,function(e){return e.value})};
h.prototype.forEach=function(e,d){for(var g=this.entries(),k;!(k=g.next()).done;)k=k.value,e.call(d,k[1],k[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
function z(a,b){a instanceof String&&(a+="");var c=0,f=!1,h={next:function(){if(!f&&c<a.length){var l=c++;return{value:b(l,a[l]),done:!1}}f=!0;return{done:!0,value:void 0}}};
h[Symbol.iterator]=function(){return h};
return h}
t("Array.prototype.values",function(a){return a?a:function(){return z(this,function(b,c){return c})}});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var f;!(f=c.next()).done;)this.add(f.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),f=new a(w([c]));if(!f.has(c)||1!=f.size||f.add(c)!=f||1!=f.size||f.add({x:4})!=f||2!=f.size)return!1;var h=f.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||l.value[1]!=l.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,f){var h=this;this.g.forEach(function(l){return c.call(f,l,l,h)})};
return b});
t("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var f=this+"";b+="";void 0===c&&(c=f.length);c=Math.max(0,Math.min(c|0,f.length));for(var h=b.length;0<h&&0<c;)if(f[--c]!=b[--h])return!1;return 0>=h}});
var A=this||self;function B(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var f;a.length&&(f=a.shift());)a.length||void 0===b?c[f]&&c[f]!==Object.prototype[f]?c=c[f]:c=c[f]={}:c[f]=b}
;var C,D;a:{for(var E=["CLOSURE_FLAGS"],F=A,G=0;G<E.length;G++)if(F=F[E[G]],null==F){D=null;break a}D=F}var H=D&&D[610401301];C=null!=H?H:!1;var I,J=A.navigator;I=J?J.userAgentData||null:null;function K(a){return C?I?I.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function L(a){var b;a:{if(b=A.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)}
;function M(){return C?!!I&&0<I.brands.length:!1}
function N(){return M()?K("Chromium"):(L("Chrome")||L("CriOS"))&&!(M()?0:L("Edge"))||L("Silk")}
;!L("Android")||N();N();L("Safari")&&(N()||(M()?0:L("Coast"))||(M()?0:L("Opera"))||(M()?0:L("Edge"))||(M()?K("Microsoft Edge"):L("Edg/"))||M()&&K("Opera"));var O=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P(a){return a?decodeURI(a):a}
;var Q=A.window,R,S,T=(null==Q?void 0:null==(R=Q.yt)?void 0:R.config_)||(null==Q?void 0:null==(S=Q.ytcfg)?void 0:S.data_)||{};B("yt.config_",T);var U=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),V=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),W=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),X=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),aa=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function ba(){return U.map(function(a){return ca(a)}).filter(function(a){return!!a})}
function ca(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,f){return c&&c[f]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function Y(a){var b=a.match(O)[1]||null;return aa.some(function(c){return b==c})}
function Z(a){var b=P(a.match(O)[3]||null);return!b||Y(a)?!0:V.some(function(c){return b==c})||X.some(function(c){return b.endsWith(c)})}
function da(a){if(!Y(a))return null;var b=P(a.match(O)[3]||null);return b?W.some(function(c){return b==c})?null:b:null}
function ea(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&!Z(b.src)&&a.add(b.src)});
[].concat(x(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||Z(b.href)||a.add(b.href)});
return[].concat(x(a)).sort()}
function fa(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=da(b.src))&&a.add(b)});
return[].concat(x(a)).sort()}
;B("ytbin.polymer.shared.lib.tampering.info",function(){var a=ea(),b=ba(),c=fa(),f=[];c.length&&f.push("extensions",c);a.length&&f.push("suspiciousIncludes",a);b.length&&f.push("suspiciousApis",b);return f.length?f:null});}).call(this);
