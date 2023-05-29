(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.W=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={Zb:b,lc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function w(a,b,c){a.g=c;return{value:b}}
ta.prototype.C=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a,b){a.g=b;a.o=0}
function Aa(a){a.o=0;var b=a.i.Zb;a.i=null;return b}
function Ba(a){a.W=[a.i];a.o=0;a.u=0}
function Ca(a){var b=a.W.splice(0)[0];(b=a.i=a.i||b)?b.lc?a.g=a.o||a.u:void 0!=b.C&&a.u<b.C?(a.g=b.C,a.i=null):a.g=a.u:a.g=0}
function Da(a){this.g=new ta;this.h=a}
function Ea(a,b){ua(a.g);var c=a.g.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ga(a)}a.g.l=null;d.call(a.g,f);return Ga(a)}
function Ga(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.lc)throw b.Zb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ua(a.g);a.g.l?b=Fa(a,a.g.l.next,b,a.g.M):(a.g.M(b),b=Ga(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Fa(a,a.g.l["throw"],b,a.g.M):(va(a.g,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.u()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.u=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Db),reject:g(this.u)}};
b.prototype.Db=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Ec(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Cb(g):this.o(g)}};
b.prototype.Cb=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.Fc(h,g):this.o(g)};
b.prototype.u=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Eb();this.W()};
b.prototype.Eb=function(){var g=this;e(function(){if(g.La()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.La=function(){if(this.G)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.W=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.Ec=function(g){var h=this.l();g.qb(h.resolve,h.reject)};
b.prototype.Fc=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.qb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).qb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).qb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Xa.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){}
function rb(a){return new qb(sb,a)}
var sb={};rb("");var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function Bb(a){this.g=a}
Bb.prototype.toString=function(){return this.g.toString()};
var Hb={},Ib=new Bb("about:invalid#zClosurez",Hb);var Jb,Kb=C("CLOSURE_FLAGS"),Lb=Kb&&Kb[610401301];Jb=null!=Lb?Lb:!1;function Mb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=z.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Jb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Jb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:F("Trident")||F("MSIE")}
function Sb(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Tb(a){this.g=a}
Tb.prototype.toString=function(){return this.g.toString()};function Ub(a){Ab.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;")));return a}
;var Vb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a){var b=a.match(Vb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
var ac=/#|$/;function bc(a,b){var c=a.search(ac);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function cc(a){z.setTimeout(function(){throw a;},0)}
;function dc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=function(){};var fc=Qb()?!1:F("Opera"),gc=Rb(),hc=F("Edge"),nc=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),oc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");function pc(){var a=z.document;return a?a.documentMode:void 0}
var qc;a:{var rc="",sc=function(){var a=Mb();if(nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sc&&(rc=sc?sc[1]:"");if(gc){var tc=pc();if(null!=tc&&tc>parseFloat(rc)){qc=String(tc);break a}}qc=rc}var uc=qc,vc;if(z.document&&gc){var wc=pc();vc=wc?wc:parseInt(uc,10)||void 0}else vc=void 0;var xc=vc;var yc=dc()||F("iPod"),zc=F("iPad");!F("Android")||Sb();Sb();var Ac=F("Safari")&&!(Sb()||(Qb()?0:F("Coast"))||(Qb()?0:F("Opera"))||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(dc()||F("iPad")||F("iPod"));var Bc={},Cc=null;
function Dc(a,b){Oa(a);void 0===b&&(b=0);if(!Cc){Cc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Bc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Cc[h]&&(Cc[h]=g)}}}b=Bc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ec="undefined"!==typeof Uint8Array,Fc=!gc&&"function"===typeof btoa;var Gc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Hc(a,b){if(Gc)return a[Gc]|=b;if(void 0!==a.ja)return a.ja|=b;Object.defineProperties(a,{ja:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Ic(a){var b=G(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Jc(a,b|1))}
function Kc(a,b){Gc?a[Gc]&&(a[Gc]&=~b):void 0!==a.ja&&(a.ja&=~b)}
function G(a){var b;Gc?b=a[Gc]:b=a.ja;return null==b?0:b}
function Jc(a,b){Gc?a[Gc]=b:void 0!==a.ja?a.ja=b:Object.defineProperties(a,{ja:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Lc(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Jc(a,b);return a}
function Nc(a){Hc(a,1);return a}
function Oc(a,b){Jc(b,(a|0)&-51)}
function Pc(a,b){Jc(b,(a|18)&-41)}
;var Qc={};function Rc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Sc,Tc=Object.freeze(Jc([],23));function Uc(a){if(G(a.L)&2)throw Error();}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor)));return a}
function Xc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Mb===Qc)return a;if(d){var e=d=G(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Jc(a,e);return new b(a)}}
;function Yc(a,b,c){return-1===b?null:b>=a.h?a.g?a.g[b]:void 0:c&&a.g&&(c=a.g[b],null!=c)?c:a.L[b+a.i]}
function H(a,b,c){Uc(a);return Zc(a,b,c)}
function Zc(a,b,c,d){a.l&&(a.l=void 0);if(b>=a.h||d)return d=a.h+a.i,(a.g||(a.g=a.L[d]={}))[b]=c,a;a.L[b+a.i]=c;(c=a.g)&&b in c&&delete c[b];return a}
function $c(a,b,c,d){var e=Yc(a,b);Array.isArray(e)||(e=Tc);var f=G(e);f&1||Nc(e);if(d)f&2||Hc(e,18),c&1||Object.freeze(e);else{d=!(c&2);var g=f&2;c&1||!g?d&&f&16&&!g&&Kc(e,16):(e=Nc(Array.prototype.slice.call(e)),Zc(a,b,e))}return e}
function ad(a,b,c,d){Uc(a);(c=bd(a,c))&&c!==b&&null!=d&&Zc(a,c,void 0,!1);Zc(a,b,d)}
function bd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Yc(a,e)&&(0!==c&&Zc(a,c,void 0,!1),c=e)}return c}
function fd(a,b,c){var d=void 0===d?!1:d;var e=Yc(a,c,d);b=Xc(e,b,G(a.L));b!==e&&null!=b&&Zc(a,c,b,d);e=b;if(null==e)return e;if(!(G(a.L)&2)){b=e;if(G(b.L)&2){var f=gd(b,!1);f.l=b;b=f}b!==e&&(e=b,Zc(a,c,e,d))}return e}
function J(a,b,c,d){Uc(a);null!=d?Wc(d,b):d=void 0;return Zc(a,c,d)}
function hd(a,b,c,d,e){Uc(a);null!=e?Wc(e,b):e=void 0;ad(a,c,d,e)}
function id(a,b,c,d){var e=G(a.L);if(e&2)throw Error();var f=!!(e&2),g=$c(a,b,1,f);if(g!==Tc&&G(g)&4){if(!f){f=Object.isFrozen(g);var h=G(g);e=h&-19;f&&(g=Array.prototype.slice.call(g),h=0,Zc(a,b,g));h!==e&&Jc(g,e)}a=g}else{h=g;g=!!(e&2);var k=!!(G(h)&2);f=h;!g&&k&&(h=Array.prototype.slice.call(h));e|=k?2:0;for(var l=0,m=0;l<h.length;l++){var n=Xc(h[l],c,e);void 0!==n&&(k||(k=!!(2&G(n.L))),h[m++]=n)}m<l&&(h.length=m);k=!k;e=G(h);l=e|5;k=k?l|8:l&-9;e!=k&&(h=Lc(h,k));f!==h&&Zc(a,b,h);g&&Object.freeze(h);
a=h}c=null!=d?Wc(d,c):new c;a.push(c);G(c.L)&2&&Kc(a,8)}
function jd(a,b){a=Yc(a,b);return null==a?"":a}
function kd(a,b){var c=bd(a,ld)===b;return Yc(a,c?b:-1)}
;var md;function nd(a,b){return od(b)}
function od(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Ec&&null!=a&&a instanceof Uint8Array){if(Fc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Dc(a);return a}}return a}
;function pd(a,b){for(var c=Array.prototype.slice.call(a.L),d=a.g,e=c.length+(d?-1:0),f=0;f<e;f++)c[f]=b(c[f]);if(d){e=c[f]={};for(var g in d)e[g]=b(d[g])}b=a.constructor;Hc(c,16);G(c);md=c;c=new b(c);md=void 0;a.kc&&(c.kc=a.kc.slice());return c}
function qd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&G(a)&1?void 0:f&&G(a)&2?a:rd(a,b,c,void 0!==d,e,f);else if(Rc(a)){var g={},h;for(h in a)g[h]=qd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function rd(a,b,c,d,e,f){var g=d||c?G(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=qd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function sd(a){return a.Mb===Qc?a.toJSON():od(a)}
;function td(a,b,c){c=void 0===c?Pc:c;if(null!=a){if(Ec&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Jc(a,d|18),a;a=rd(a,td,d&4?Pc:c,!0,!1,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}a.Mb===Qc&&(G(a.L)&2||(a=gd(a,!0),Hc(a.L,18)));return a}}
function gd(a,b){var c=a.L,d=b||G(a.L)&2?Pc:Oc,e=!!(G(c)&16);return pd(a,function(f){return td(f,e,d)})}
;function K(a,b,c){null==a&&(a=md);md=void 0;if(null==a)a=c?[c]:[],Jc(a,48);else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();var d=Hc(a,0)|32;Jc(a,d)}this.i=c?0:-1;this.L=a;a:{c=this.L.length;a=c-1;if(c&&(c=this.L[a],Rc(c))){this.g=c;this.h=a-this.i;break a}b?(this.h=Math.max(b,a+1-this.i),this.g=void 0):this.h=Number.MAX_VALUE}G(this.L)}
K.prototype.toJSON=function(){if(Sc)var a=ud(this,this.L,!1);else a=rd(this.L,sd,void 0,void 0,!1,!1),a=ud(this,a,!0);return a};
function vd(a){Sc=!0;try{return JSON.stringify(a.toJSON(),nd)}finally{Sc=!1}}
K.prototype.clone=function(){return gd(this,!1)};
K.prototype.Mb=Qc;K.prototype.toString=function(){return ud(this,this.L,!1).toString()};
function ud(a,b,c){var d=a?a.constructor.ma:void 0,e=a.h;if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&Rc(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;f=a.h;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<f){k+=a.i;var l=e[k];null==l?e[k]=c?Tc:Nc([]):c&&l!==Tc&&Ic(l)}else h||(l=void 0,e.length&&Rc(l=e[e.length-1])?h=l:e.push(h={})),l=h[k],null==h[k]?h[k]=c?Tc:Nc([]):c&&l!==Tc&&Ic(l)}}return b}
;var wd=window;rb("csi.gstatic.com");rb("googleads.g.doubleclick.net");rb("partner.googleadservices.com");rb("pubads.g.doubleclick.net");rb("securepubads.g.doubleclick.net");rb("tpc.googlesyndication.com");function xd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=xd.prototype;q.clone=function(){return new xd(this.x,this.y)};
q.equals=function(a){return a instanceof xd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function yd(a,b){this.width=a;this.height=b}
q=yd.prototype;q.clone=function(){return new yd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ad(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dd[c])c=Dd[c];else{c=String(c);if(!Dd[c]){var f=/function\s+([^\(]+)/m.exec(c);Dd[c]=f?f[1]:"[Anonymous]"}c=Dd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cd(a,b){b||(b={});b[Ed(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ed(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cd(a,b));return c}
function Ed(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Fd;try{new URL("s://g"),Fd=!0}catch(a){Fd=!1}var Gd=Fd;function Hd(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Bb)b instanceof Bb&&b.constructor===Bb?b=b.g:(Na(b),b="type_error:SafeUrl");else{b:if(Gd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Id(a){this.bd=a}
function Jd(a){return new Id(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Kd=[Jd("data"),Jd("http"),Jd("https"),Jd("mailto"),Jd("ftp"),new Id(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ld(a,b){b=void 0===b?Kd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Id&&d.bd(a))return new Bb(a,Hb)}}
function Md(a){var b=void 0===b?Kd:b;return Ld(a,b)||Ib}
;function Nd(a){var b=Od;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Pd(){var a=[];Nd(function(b){a.push(b)});
return a}
var Od={rd:"allow-forms",sd:"allow-modals",td:"allow-orientation-lock",ud:"allow-pointer-lock",vd:"allow-popups",wd:"allow-popups-to-escape-sandbox",xd:"allow-presentation",yd:"allow-same-origin",zd:"allow-scripts",Ad:"allow-top-navigation",Bd:"allow-top-navigation-by-user-activation"},Qd=bb(function(){return Pd()});
function Rd(){var a=Sd(),b={};E(Qd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Sd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Td=(new Date).getTime();function Ud(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Vd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(Vd);function Wd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],I=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=I^y&(A^I);var Q=1518500249}else T=y^A^I,Q=1859775393;else 60>p?(T=y&A|I&(y|A),Q=2400959708):(T=y^A^I,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=I;I=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Lc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Xd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Yd(Ud(d),a,c||null)].join(" "):null}
function Yd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Zd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Zd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Zd(a){var b=Wd();b.update(a);return b.Lc().toLowerCase()}
;var $d={};function ae(a){this.g=a||{cookie:""}}
q=ae.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Jb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var be=new ae("undefined"==typeof document?null:document);function ce(a){return!!$d.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function de(a,b,c,d){(a=z[a])||"undefined"===typeof document||(a=(new ae(document)).get(b));return a?Xd(a,c,d):null}
function ee(a){var b=void 0===b?!1:b;var c=Ud(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;ce(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new ae(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");ce(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
z.__SAPISID:z.__APISID,e||"undefined"===typeof document||(e=new ae(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Xd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ce(b)&&((b=de("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=de("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var fe="undefined"!==typeof TextEncoder?new TextEncoder:null,ge=fe?function(a){return fe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function he(){this.i=this.i;this.u=this.u}
he.prototype.i=!1;he.prototype.dispose=function(){this.i||(this.i=!0,this.xa())};
he.prototype.xa=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function ie(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
ie.prototype.stopPropagation=function(){this.i=!0};
ie.prototype.preventDefault=function(){this.defaultPrevented=!0};var je=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
z.addEventListener("test",c,b);z.removeEventListener("test",c,b)}catch(d){}return a}();function ke(a,b){ie.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
D(ke,ie);var le={2:"touch",3:"pen",4:"mouse"};
ke.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(nc){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:le[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&ke.na.preventDefault.call(this)};
ke.prototype.stopPropagation=function(){ke.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ke.prototype.preventDefault=function(){ke.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var me="closure_listenable_"+(1E6*Math.random()|0);var ne=0;function oe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ub=e;this.key=++ne;this.ib=this.pb=!1}
function pe(a){a.ib=!0;a.listener=null;a.proxy=null;a.src=null;a.ub=null}
;function qe(a){this.src=a;this.listeners={};this.g=0}
qe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.pb=!1)):(b=new oe(b,this.src,f,!!d,e),b.pb=c,a.push(b));return b};
qe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(pe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(pe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ib&&f.listener==b&&f.capture==!!c&&f.ub==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)Ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Be(c),a&&a[me]?a.Ga(b,c,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!1,d,e)}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=De(a);h||(a[we]=h=new qe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ee();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)je||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++}}
function Ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ge;return a}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Be(c),a&&a[me]?a.g.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Be(c),a&&a[me])?a.g.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.ib){var b=a.src;if(b&&b[me])ve(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.g&&(c.src=null,b[we]=null)):pe(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Ge(a,b){if(a.ib)a=!0;else{b=new ke(b,this);var c=a.listener,d=a.ub||a.src;a.pb&&Ie(a);a=c.call(d,b)}return a}
function De(a){a=a[we];return a instanceof qe?a:null}
var Je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if("function"===typeof a)return a;a[Je]||(a[Je]=function(b){return a.handleEvent(b)});
return a[Je]}
;function Ke(){he.call(this);this.g=new qe(this);this.La=this;this.M=null}
D(Ke,he);Ke.prototype[me]=!0;Ke.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Ke.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
function Le(a,b){var c=a.M;if(c){var d=[];for(var e=1;c;c=c.M)d.push(c),++e}a=a.La;c=b.type||b;"string"===typeof b?b=new ie(b,a):b instanceof ie?b.target=b.target||a:(e=b,b=new ie(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Me(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Me(g,c,!0,b)&&e,b.i||(e=Me(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Me(g,c,!1,b)&&e}
Ke.prototype.xa=function(){Ke.na.xa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,pe(d[e]);delete a.listeners[c];a.g--}}this.M=null};
Ke.prototype.Ga=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Me(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ib&&g.capture==c){var h=g.listener,k=g.ub||g.src;g.pb&&ve(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){Ke.call(this);var b=this;this.W=this.l=0;this.fa=null!=a?a:{ha:function(e,f){return setTimeout(e,f)},
Oa:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return w(e,Oe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.W||Pe(this)}
v(Ne,Ke);function Qe(){var a=Re;Ne.g||(Ne.g=new Ne(a));return Ne.g}
Ne.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.fa.Oa(this.W);delete Ne.g};
Ne.prototype.ba=function(){return this.h};
function Pe(a){a.W=a.fa.ha(function(){var b;return x(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.C(3):w(c,Oe(a),3):w(c,Oe(a),3);Pe(a);c.g=0})},3E4)}
function Oe(a,b){return a.G?a.G:a.G=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.fa.ha(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.G=void 0;a.l&&(a.fa.Oa(a.l),a.l=0);g!==a.h&&(a.h=g,a.h?Le(a,"networkstatus-online"):Le(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.C(3)}})})}
;function Se(){this.data_=[];this.g=-1}
Se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
Se.prototype.get=function(a){return!!this.data_[a]};
function Te(a){-1===a.g&&(a.g=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Ue(a){K.call(this,a)}
v(Ue,K);function Ve(a){K.call(this,a)}
v(Ve,K);function We(a,b){return H(a,2,b)}
function Xe(a,b){return H(a,3,b)}
function Ye(a,b){return H(a,4,b)}
function Ze(a,b){return H(a,5,b)}
function $e(a,b){return H(a,9,b)}
function af(a,b){Uc(a);if(null!=b){for(var c=!!b.length,d=0;d<b.length;d++){var e=b[d];Wc(e,Ue);c=c&&!(G(e.L)&2)}d=G(b);e=d|1;e=(c?e|8:e&-9)|4;e!=d&&(b=Lc(b,e))}null==b&&(b=void 0);return Zc(a,10,b)}
function bf(a,b){return H(a,11,null==b?b:!!b)}
function cf(a,b){return H(a,1,b)}
function df(a,b){return H(a,7,null==b?b:!!b)}
Ve.ma=[10,6];var ef="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function ff(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function gf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function hf(){var a=window;if(!gf(a))return null;var b=ff(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ef).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function jf(a){var b;return bf(af(Ze(We(cf(Ye(df($e(Xe(new Ve,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ue;d=H(d,1,c.brand);return H(d,2,c.version)}))||[]),a.wow64||!1)}
function kf(){var a,b;return null!=(b=null==(a=hf())?void 0:a.then(function(c){return jf(c)}))?b:null}
;function lf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
lf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function mf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var nf;function of(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=zd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Wb;c.Wb=null;e()}};
return function(e){d.next={Wb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function pf(){this.h=this.g=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
pf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var qf=new lf(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.g=null}
rf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.g=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Qb()||!F("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(nf||(nf=of()),nf(b)):z.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.g.call(a.scope)}catch(b){cc(b)}mf(qf,a)}tf=!1}
;function yf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
yf.prototype[Symbol.iterator]=function(){return this};
yf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function zf(a,b){return new yf(a,b)}
;function Af(){this.blockSize=-1}
;function Bf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.u=[];this.o=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
D(Bf,Af);Bf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Cf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Bf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.h;d<b;){if(0==f)for(;d<=c;)Cf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Cf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Cf(this,e);f=0;break}}this.h=f;this.l+=b}};
Bf.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Cf(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Df(){}
Df.prototype.next=function(){return Ef};
var Ef={done:!0,value:void 0};function Ff(a){return{value:a,done:!1}}
Df.prototype.ga=function(){return this};function Gf(a){if(a instanceof Hf||a instanceof If||a instanceof Jf)return a;if("function"==typeof a.next)return new Hf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Hf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ga)return new Hf(function(){return a.ga()});
throw Error("Not an iterator or iterable.");}
function Hf(a){this.h=a}
Hf.prototype.ga=function(){return new If(this.h())};
Hf.prototype[Symbol.iterator]=function(){return new Jf(this.h())};
Hf.prototype.g=function(){return new Jf(this.h())};
function If(a){this.h=a}
v(If,Df);If.prototype.next=function(){return this.h.next()};
If.prototype[Symbol.iterator]=function(){return new Jf(this.h)};
If.prototype.g=function(){return new Jf(this.h)};
function Jf(a){Hf.call(this,function(){return a});
this.i=a}
v(Jf,Hf);Jf.prototype.next=function(){return this.i.next()};function Kf(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Kf)for(c=Lf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Lf(a){Mf(a);return a.g.concat()}
q=Kf.prototype;q.has=function(a){return Nf(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Of;Mf(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Of(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Nf(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Mf(this),!0):!1};
function Mf(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Nf(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Nf(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return Nf(this.h,a)?this.h[a]:b};
q.set=function(a,b){Nf(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Lf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Kf(this)};
q.keys=function(){return Gf(this.ga(!0)).g()};
q.values=function(){return Gf(this.ga(!1)).g()};
q.entries=function(){var a=this;return zf(this.keys(),function(b){return[b,a.get(b)]})};
q.ga=function(a){Mf(this);var b=0,c=this.i,d=this,e=new Df;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Ef;var f=d.g[b++];return Ff(a?f:d.h[f])};
return e};
function Nf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Pf=z.JSON.stringify;function Qf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Rf(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.u=this.o=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Sf(b,2,c)},function(c){Sf(b,3,c)})}catch(c){Sf(this,3,c)}}
function Tf(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Tf.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Uf=new lf(function(){return new Tf},function(a){a.reset()});
function Vf(a,b,c){var d=Uf.get();d.i=a;d.h=b;d.context=c;return d}
Rf.prototype.then=function(a,b,c){return Wf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rf.prototype.$goog_Thenable=!0;Rf.prototype.cancel=function(a){if(0==this.g){var b=new Xf(a);vf(function(){Yf(this,b)},this)}};
function Yf(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Yf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Zf(c),$f(c,e,3,b)))}a.i=null}else Sf(a,3,b)}
function ag(a,b){a.h||2!=a.g&&3!=a.g||bg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Wf(a,b,c,d){var e=Vf(null,null,null);e.g=new Rf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Xf?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;ag(a,e);return e.g}
Rf.prototype.W=function(a){this.g=0;Sf(this,2,a)};
Rf.prototype.La=function(a){this.g=0;Sf(this,3,a)};
function Sf(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.W,f=a.La;if(d instanceof Rf){ag(d,Vf(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){cg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,bg(a),3!=b||c instanceof Xf||dg(a,c))}}
function cg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function bg(a){a.o||(a.o=!0,vf(a.M,a))}
function Zf(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Rf.prototype.M=function(){for(var a;a=Zf(this);)$f(this,a,this.g,this.G);this.o=!1};
function $f(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.u;a=a.i)a.u=!1;if(b.g)b.g.i=null,eg(b,c,d);else try{b.l?b.i.call(b.context):eg(b,c,d)}catch(e){fg.call(null,e)}mf(Uf,b)}
function eg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function dg(a,b){a.u=!0;vf(function(){a.u&&fg.call(null,b)})}
var fg=cc;function Xf(a){Za.call(this,a)}
D(Xf,Za);Xf.prototype.name="cancel";function M(a){he.call(this);this.G=1;this.l=[];this.o=0;this.g=[];this.h={};this.M=!!a}
D(M,he);q=M.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.G;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.G=e+3;d.push(e);return e};
function gg(a,b,c){var d=hg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.kb(a)}}
q.kb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.l.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.Xa=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.M)for(e=0;e<c.length;e++){var g=c[e];ig(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.kb(c)}}return 0!=e}return!1};
function ig(a,b,c){vf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.kb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.xa=function(){M.na.xa.call(this);this.clear();this.l.length=0};function jg(a){this.g=a}
jg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Pf(b))};
jg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jg.prototype.remove=function(a){this.g.remove(a)};function kg(a){this.g=a}
D(kg,jg);function lg(a){this.data=a}
function mg(a){return void 0===a||a instanceof lg?a:new lg(a)}
kg.prototype.set=function(a,b){kg.na.set.call(this,a,mg(b))};
kg.prototype.h=function(a){a=kg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
kg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ng(a){this.g=a}
D(ng,kg);ng.prototype.set=function(a,b,c){if(b=mg(b)){if(c){if(c<Date.now()){ng.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ng.na.set.call(this,a,b)};
ng.prototype.h=function(a){var b=ng.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ng.prototype.remove.call(this,a);else return b}};function og(){}
;function pg(){}
D(pg,og);pg.prototype[Symbol.iterator]=function(){return Gf(this.ga(!0)).g()};
pg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function qg(a){this.g=a}
D(qg,pg);q=qg.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ga=function(a){var b=0,c=this.g,d=new Df;d.next=function(){if(b>=c.length)return Ef;var e=c.key(b++);if(a)return Ff(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ff(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function rg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
D(rg,qg);function sg(a,b){this.h=a;this.g=null;var c;if(c=gc)c=!(9<=Number(xc));if(c){tg||(tg=new Kf);this.g=tg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),tg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
D(sg,pg);var ug={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},tg=null;function vg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ug[b]})}
q=sg.prototype;q.set=function(a,b){this.g.setAttribute(vg(a),b);wg(this)};
q.get=function(a){a=this.g.getAttribute(vg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(vg(a));wg(this)};
q.ga=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Df;d.next=function(){if(b>=c.length)return Ef;var e=c[b++];if(a)return Ff(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ff(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);wg(this)};
function wg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function xg(a,b){this.h=a;this.g=b+"::"}
D(xg,pg);xg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
xg.prototype.get=function(a){return this.h.get(this.g+a)};
xg.prototype.remove=function(a){this.h.remove(this.g+a)};
xg.prototype.ga=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Df;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Ff(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},yg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Qb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var zg={Na:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ac:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ag={Na:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ac:function(a){return[].concat.apply([],a)}};
N.ld=function(){yg?(N.Ma=Uint8Array,N.oa=Uint16Array,N.Dc=Int32Array,N.assign(N,zg)):(N.Ma=Array,N.oa=Array,N.Dc=Array,N.assign(N,Ag))};
N.ld();var Bg=!0;try{new Uint8Array(1)}catch(a){Bg=!1}
function Cg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Ma(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Dg={};Dg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Eg={},Fg,Gg=[],Hg=0;256>Hg;Hg++){Fg=Hg;for(var Ig=0;8>Ig;Ig++)Fg=Fg&1?3988292384^Fg>>>1:Fg>>>1;Gg[Hg]=Fg}Eg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Gg[(a^b[d])&255];return a^-1};var Jg={};Jg={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Kg(a){for(var b=a.length;0<=--b;)a[b]=0}
var Lg=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Mg=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ng=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Og=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pg=Array(576);Kg(Pg);var Qg=Array(60);Kg(Qg);var Rg=Array(512);Kg(Rg);var Sg=Array(256);Kg(Sg);var nh=Array(29);Kg(nh);var oh=Array(30);Kg(oh);function ph(a,b,c,d,e){this.yc=a;this.Qc=b;this.Pc=c;this.Mc=d;this.fd=e;this.ec=a&&a.length}
var qh,rh,sh;function th(a,b){this.Yb=a;this.Ua=0;this.Ba=b}
function uh(a,b){a.J[a.pending++]=b&255;a.J[a.pending++]=b>>>8&255}
function P(a,b,c){a.O>16-c?(a.U|=b<<a.O&65535,uh(a,a.U),a.U=b>>16-a.O,a.O+=c-16):(a.U|=b<<a.O&65535,a.O+=c)}
function vh(a,b,c){P(a,c[2*b],c[2*b+1])}
function wh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function xh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=wh(d[e]++,e))}
function yh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Fa[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.ta=a.Ya=0;a.ca=a.matches=0}
function zh(a){8<a.O?uh(a,a.U):0<a.O&&(a.J[a.pending++]=a.U);a.U=0;a.O=0}
function Ah(a,b,c){zh(a);uh(a,c);uh(a,~c);N.Na(a.J,a.window,b,c,a.pending);a.pending+=c}
function Bh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ch(a,b,c){for(var d=a.K[c],e=c<<1;e<=a.sa;){e<a.sa&&Bh(b,a.K[e+1],a.K[e],a.depth)&&e++;if(Bh(b,d,a.K[e],a.depth))break;a.K[c]=a.K[e];c=e;e<<=1}a.K[c]=d}
function Dh(a,b,c){var d=0;if(0!==a.ca){do{var e=a.J[a.bb+2*d]<<8|a.J[a.bb+2*d+1];var f=a.J[a.Ib+d];d++;if(0===e)vh(a,f,b);else{var g=Sg[f];vh(a,g+256+1,b);var h=Lg[g];0!==h&&(f-=nh[g],P(a,f,h));e--;g=256>e?Rg[e]:Rg[256+(e>>>7)];vh(a,g,c);h=Mg[g];0!==h&&(e-=oh[g],P(a,e,h))}}while(d<a.ca)}vh(a,256,b)}
function Eh(a,b){var c=b.Yb,d=b.Ba.yc,e=b.Ba.ec,f=b.Ba.Mc,g,h=-1;a.sa=0;a.Ra=573;for(g=0;g<f;g++)0!==c[2*g]?(a.K[++a.sa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.sa;){var k=a.K[++a.sa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.ta--;e&&(a.Ya-=d[2*k+1])}b.Ua=h;for(g=a.sa>>1;1<=g;g--)Ch(a,c,g);k=f;do g=a.K[1],a.K[1]=a.K[a.sa--],Ch(a,c,1),d=a.K[1],a.K[--a.Ra]=g,a.K[--a.Ra]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.K[1]=k++,Ch(a,c,1);while(2<=a.sa);a.K[--a.Ra]=
a.K[1];g=b.Yb;k=b.Ua;d=b.Ba.yc;e=b.Ba.ec;f=b.Ba.Qc;var l=b.Ba.Pc,m=b.Ba.fd,n,r=0;for(n=0;15>=n;n++)a.pa[n]=0;g[2*a.K[a.Ra]+1]=0;for(b=a.Ra+1;573>b;b++){var p=a.K[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.pa[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.ta+=A*(n+y);e&&(a.Ya+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.pa[n];)n--;a.pa[n]--;a.pa[n+1]+=2;a.pa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.pa[n];0!==p;)d=a.K[--b],d>k||(g[2*d+1]!==n&&(a.ta+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}xh(c,h,a.pa)}
function Fh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Gh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do vh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(vh(a,l,a.R),g--),vh(a,16,a.R),P(a,g-3,2)):10>=g?(vh(a,17,a.R),P(a,g-3,3)):(vh(a,18,a.R),P(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Hh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var Ih=!1;function Jh(a,b,c){a.J[a.bb+2*a.ca]=b>>>8&255;a.J[a.bb+2*a.ca+1]=b&255;a.J[a.Ib+a.ca]=c&255;a.ca++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Sg[c]+256+1)]++,a.Fa[2*(256>b?Rg[b]:Rg[256+(b>>>7)])]++);return a.ca===a.fb-1}
;function Kh(a,b){a.msg=Jg[b];return b}
function Lh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Mh(a){var b=a.state,c=b.pending;c>a.D&&(c=a.D);0!==c&&(N.Na(a.gb,b.J,b.hb,c,a.Va),a.Va+=c,b.hb+=c,a.Rb+=c,a.D-=c,b.pending-=c,0===b.pending&&(b.hb=0))}
function R(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.A.Fb&&(a.A.Fb=Hh(a));Eh(a,a.wb);Eh(a,a.sb);Fh(a,a.X,a.wb.Ua);Fh(a,a.Fa,a.sb.Ua);Eh(a,a.Ub);for(e=18;3<=e&&0===a.R[2*Og[e]+1];e--);a.ta+=3*(e+1)+14;var f=a.ta+3+7>>>3;var g=a.Ya+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)P(a,b?1:0,3),Ah(a,c,d);else if(4===a.strategy||g===f)P(a,2+(b?1:0),3),Dh(a,Pg,Qg);else{P(a,4+(b?1:0),3);c=a.wb.Ua+1;d=a.sb.Ua+1;e+=1;P(a,c-257,5);P(a,d-1,5);P(a,e-4,4);for(f=0;f<e;f++)P(a,a.R[2*Og[f]+1],
3);Gh(a,a.X,c-1);Gh(a,a.Fa,d-1);Dh(a,a.X,a.Fa)}yh(a);b&&zh(a);a.Z=a.j;Mh(a.A)}
function S(a,b){a.J[a.pending++]=b}
function Nh(a,b){a.J[a.pending++]=b>>>8&255;a.J[a.pending++]=b&255}
function Oh(a,b){var c=a.mc,d=a.j,e=a.aa,f=a.oc,g=a.j>a.S-262?a.j-(a.S-262):0,h=a.window,k=a.Ca,l=a.la,m=a.j+258,n=h[d+e-1],r=h[d+e];a.aa>=a.dc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Ta=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Ph(a){var b=a.S,c;do{var d=a.Bc-a.m-a.j;if(a.j>=b+(b-262)){N.Na(a.window,a.window,b,b,0);a.Ta-=b;a.j-=b;a.Z-=b;var e=c=a.vb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.A.T)break;e=a.A;c=a.window;f=a.j+a.m;var g=e.T;g>d&&(g=d);0===g?c=0:(e.T-=g,N.Na(c,e.input,e.Ja,g,f),1===e.state.wrap?e.v=Dg(e.v,c,g,f):2===e.state.wrap&&(e.v=Eg(e.v,c,g,f)),e.Ja+=g,e.Ka+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.B=a.window[d],a.B=
(a.B<<a.ra^a.window[d+1])&a.qa;a.Y&&!(a.B=(a.B<<a.ra^a.window[d+3-1])&a.qa,a.la[d&a.Ca]=a.head[a.B],a.head[a.B]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.A.T)}
function Qh(a,b){for(var c;;){if(262>a.m){Ph(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.la[a.j&a.Ca]=a.head[a.B],a.head[a.B]=a.j);0!==c&&a.j-c<=a.S-262&&(a.F=Oh(a,c));if(3<=a.F)if(c=Jh(a,a.j-a.Ta,a.F-3),a.m-=a.F,a.F<=a.Kb&&3<=a.m){a.F--;do a.j++,a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.la[a.j&a.Ca]=a.head[a.B],a.head[a.B]=a.j;while(0!==--a.F);a.j++}else a.j+=a.F,a.F=0,a.B=a.window[a.j],a.B=(a.B<<a.ra^a.window[a.j+1])&a.qa;else c=Jh(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(R(a,!1),0===a.A.D))return 1}a.Y=2>a.j?a.j:2;return 4===b?(R(a,!0),0===a.A.D?3:4):a.ca&&(R(a,!1),0===a.A.D)?1:2}
function Rh(a,b){for(var c,d;;){if(262>a.m){Ph(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.la[a.j&a.Ca]=a.head[a.B],a.head[a.B]=a.j);a.aa=a.F;a.sc=a.Ta;a.F=2;0!==c&&a.aa<a.Kb&&a.j-c<=a.S-262&&(a.F=Oh(a,c),5>=a.F&&(1===a.strategy||3===a.F&&4096<a.j-a.Ta)&&(a.F=2));if(3<=a.aa&&a.F<=a.aa){d=a.j+a.m-3;c=Jh(a,a.j-1-a.sc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.la[a.j&a.Ca]=a.head[a.B],a.head[a.B]=a.j);while(0!==
--a.aa);a.Ha=0;a.F=2;a.j++;if(c&&(R(a,!1),0===a.A.D))return 1}else if(a.Ha){if((c=Jh(a,0,a.window[a.j-1]))&&R(a,!1),a.j++,a.m--,0===a.A.D)return 1}else a.Ha=1,a.j++,a.m--}a.Ha&&(Jh(a,0,a.window[a.j-1]),a.Ha=0);a.Y=2>a.j?a.j:2;return 4===b?(R(a,!0),0===a.A.D?3:4):a.ca&&(R(a,!1),0===a.A.D)?1:2}
function Sh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Ph(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.F=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.F=258-(e-d);a.F>a.m&&(a.F=a.m)}3<=a.F?(c=Jh(a,1,a.F-3),a.m-=a.F,a.j+=a.F,a.F=0):(c=Jh(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(R(a,!1),0===a.A.D))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.A.D?3:4):a.ca&&
(R(a,!1),0===a.A.D)?1:2}
function Th(a,b){for(var c;;){if(0===a.m&&(Ph(a),0===a.m)){if(0===b)return 1;break}a.F=0;c=Jh(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(R(a,!1),0===a.A.D))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.A.D?3:4):a.ca&&(R(a,!1),0===a.A.D)?1:2}
function Uh(a,b,c,d,e){this.Tc=a;this.ed=b;this.hd=c;this.dd=d;this.Rc=e}
var Vh;Vh=[new Uh(0,0,0,0,function(a,b){var c=65535;for(c>a.da-5&&(c=a.da-5);;){if(1>=a.m){Ph(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,R(a,!1),0===a.A.D)return 1;if(a.j-a.Z>=a.S-262&&(R(a,!1),0===a.A.D))return 1}a.Y=0;if(4===b)return R(a,!0),0===a.A.D?3:4;a.j>a.Z&&R(a,!1);return 1}),
new Uh(4,4,8,4,Qh),new Uh(4,5,16,8,Qh),new Uh(4,6,32,32,Qh),new Uh(4,4,16,16,Rh),new Uh(8,16,32,32,Rh),new Uh(8,16,128,128,Rh),new Uh(8,32,128,256,Rh),new Uh(32,128,258,1024,Rh),new Uh(32,258,258,4096,Rh)];
function Wh(){this.A=null;this.status=0;this.J=null;this.wrap=this.pending=this.hb=this.da=0;this.s=null;this.ea=0;this.method=8;this.Sa=-1;this.Ca=this.Sb=this.S=0;this.window=null;this.Bc=0;this.head=this.la=null;this.oc=this.dc=this.strategy=this.level=this.Kb=this.mc=this.aa=this.m=this.Ta=this.j=this.Ha=this.sc=this.F=this.Z=this.ra=this.qa=this.Gb=this.vb=this.B=0;this.X=new N.oa(1146);this.Fa=new N.oa(122);this.R=new N.oa(78);Lh(this.X);Lh(this.Fa);Lh(this.R);this.Ub=this.sb=this.wb=null;this.pa=
new N.oa(16);this.K=new N.oa(573);Lh(this.K);this.Ra=this.sa=0;this.depth=new N.oa(573);Lh(this.depth);this.O=this.U=this.Y=this.matches=this.Ya=this.ta=this.bb=this.ca=this.fb=this.Ib=0}
function Xh(a,b){if(!a||!a.state||5<b||0>b)return a?Kh(a,-2):-2;var c=a.state;if(!a.gb||!a.input&&0!==a.T||666===c.status&&4!==b)return Kh(a,0===a.D?-5:-2);c.A=a;var d=c.Sa;c.Sa=b;if(42===c.status)if(2===c.wrap)a.v=0,S(c,31),S(c,139),S(c,8),c.s?(S(c,(c.s.text?1:0)+(c.s.za?2:0)+(c.s.ya?4:0)+(c.s.name?8:0)+(c.s.comment?16:0)),S(c,c.s.time&255),S(c,c.s.time>>8&255),S(c,c.s.time>>16&255),S(c,c.s.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.s.Qd&255),c.s.ya&&c.s.ya.length&&(S(c,
c.s.ya.length&255),S(c,c.s.ya.length>>8&255)),c.s.za&&(a.v=Eg(a.v,c.J,c.pending,0)),c.ea=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.Sb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Nh(c,e+(31-e%31));0!==c.j&&(Nh(c,a.v>>>16),Nh(c,a.v&65535));a.v=1}if(69===c.status)if(c.s.ya){for(e=c.pending;c.ea<(c.s.ya.length&65535)&&(c.pending!==c.da||(c.s.za&&c.pending>
e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Mh(a),e=c.pending,c.pending!==c.da));)S(c,c.s.ya[c.ea]&255),c.ea++;c.s.za&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e));c.ea===c.s.ya.length&&(c.ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.s.name){e=c.pending;do{if(c.pending===c.da&&(c.s.za&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Mh(a),e=c.pending,c.pending===c.da)){var f=1;break}f=c.ea<c.s.name.length?c.s.name.charCodeAt(c.ea++)&255:0;S(c,f)}while(0!==f);c.s.za&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-
e,e));0===f&&(c.ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.s.comment){e=c.pending;do{if(c.pending===c.da&&(c.s.za&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Mh(a),e=c.pending,c.pending===c.da)){f=1;break}f=c.ea<c.s.comment.length?c.s.comment.charCodeAt(c.ea++)&255:0;S(c,f)}while(0!==f);c.s.za&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.s.za?(c.pending+2>c.da&&Mh(a),c.pending+2<=c.da&&(S(c,a.v&255),S(c,a.v>>8&255),a.v=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Mh(a),0===a.D)return c.Sa=-1,0}else if(0===a.T&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Kh(a,-5);if(666===c.status&&0!==a.T)return Kh(a,-5);if(0!==a.T||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Th(c,b):3===c.strategy?Sh(c,b):Vh[c.level].Rc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.D&&(c.Sa=-1),0;if(2===d&&(1===b?(P(c,2,3),vh(c,256,Pg),16===c.O?(uh(c,c.U),c.U=0,c.O=0):8<=c.O&&(c.J[c.pending++]=c.U&255,c.U>>=8,c.O-=
8)):5!==b&&(P(c,0,3),Ah(c,0,0),3===b&&(Lh(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Mh(a),0===a.D))return c.Sa=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.v&255),S(c,a.v>>8&255),S(c,a.v>>16&255),S(c,a.v>>24&255),S(c,a.Ka&255),S(c,a.Ka>>8&255),S(c,a.Ka>>16&255),S(c,a.Ka>>24&255)):(Nh(c,a.v>>>16),Nh(c,a.v&65535));Mh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Yh={};Yh=function(){this.input=null;this.Ka=this.T=this.Ja=0;this.gb=null;this.Rb=this.D=this.Va=0;this.msg="";this.state=null;this.Fb=2;this.v=0};var Zh=Object.prototype.toString;
function $h(a){if(!(this instanceof $h))return new $h(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Da:15,gd:8,strategy:0,Ac:""},a||{});a.raw&&0<a.Da?a.Da=-a.Da:a.Uc&&0<a.Da&&16>a.Da&&(a.Da+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.A=new Yh;this.A.D=0;var b=this.A;var c=a.level,d=a.method,e=a.Da,f=a.gd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Kh(b,-2);else{8===e&&(e=9);var k=new Wh;
b.state=k;k.A=b;k.wrap=h;k.s=null;k.Sb=e;k.S=1<<k.Sb;k.Ca=k.S-1;k.Gb=f+7;k.vb=1<<k.Gb;k.qa=k.vb-1;k.ra=~~((k.Gb+3-1)/3);k.window=new N.Ma(2*k.S);k.head=new N.oa(k.vb);k.la=new N.oa(k.S);k.fb=1<<f+6;k.da=4*k.fb;k.J=new N.Ma(k.da);k.bb=1*k.fb;k.Ib=3*k.fb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ka=b.Rb=0;b.Fb=2;c=b.state;c.pending=0;c.hb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.v=2===c.wrap?0:1;c.Sa=0;if(!Ih){d=Array(16);for(f=g=0;28>f;f++)for(nh[f]=g,e=0;e<1<<Lg[f];e++)Sg[g++]=
f;Sg[g-1]=f;for(f=g=0;16>f;f++)for(oh[f]=g,e=0;e<1<<Mg[f];e++)Rg[g++]=f;for(g>>=7;30>f;f++)for(oh[f]=g<<7,e=0;e<1<<Mg[f]-7;e++)Rg[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Pg[2*e+1]=8,e++,d[8]++;for(;255>=e;)Pg[2*e+1]=9,e++,d[9]++;for(;279>=e;)Pg[2*e+1]=7,e++,d[7]++;for(;287>=e;)Pg[2*e+1]=8,e++,d[8]++;xh(Pg,287,d);for(e=0;30>e;e++)Qg[2*e+1]=5,Qg[2*e]=wh(e,5);qh=new ph(Pg,Lg,257,286,15);rh=new ph(Qg,Mg,0,30,15);sh=new ph([],Ng,0,19,7);Ih=!0}c.wb=new th(c.X,qh);c.sb=new th(c.Fa,rh);c.Ub=new th(c.R,
sh);c.U=0;c.O=0;yh(c);c=0}else c=Kh(b,-2);0===c&&(b=b.state,b.Bc=2*b.S,Lh(b.head),b.Kb=Vh[b.level].ed,b.dc=Vh[b.level].Tc,b.oc=Vh[b.level].hd,b.mc=Vh[b.level].dd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.F=b.aa=2,b.Ha=0,b.B=0);b=c}}else b=-2;if(0!==b)throw Error(Jg[b]);a.header&&(b=this.A)&&b.state&&2===b.state.wrap&&(b.state.s=a.header);if(a.cb){var l;"string"===typeof a.cb?l=Cg(a.cb):"[object ArrayBuffer]"===Zh.call(a.cb)?l=new Uint8Array(a.cb):l=a.cb;a=this.A;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.v=Dg(a.v,f,g,0));l.wrap=0;g>=l.S&&(0===b&&(Lh(l.head),l.j=0,l.Z=0,l.Y=0),c=new N.Ma(l.S),N.Na(c,f,g-l.S,l.S,0),f=c,g=l.S);c=a.T;d=a.Ja;e=a.input;a.T=g;a.Ja=0;a.input=f;for(Ph(l);3<=l.m;){f=l.j;g=l.m-2;do l.B=(l.B<<l.ra^l.window[f+3-1])&l.qa,l.la[f&l.Ca]=l.head[l.B],l.head[l.B]=f,f++;while(--g);l.j=f;l.m=2;Ph(l)}l.j+=l.m;l.Z=l.j;l.Y=l.m;l.m=0;l.F=l.aa=2;l.Ha=0;a.Ja=d;a.input=e;a.T=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Jg[b]);this.Hd=!0}}
$h.prototype.push=function(a,b){var c=this.A,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Cg(a):"[object ArrayBuffer]"===Zh.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ja=0;c.T=c.input.length;do{0===c.D&&(c.gb=new N.Ma(d),c.Va=0,c.D=d);a=Xh(c,e);if(1!==a&&0!==a)return ai(this,a),this.ended=!0,!1;if(0===c.D||0===c.T&&(4===e||2===e))if("string"===this.options.Ac){var f=N.Qb(c.gb,c.Va);b=f;f=f.length;if(65537>f&&(b.subarray&&Bg||!b.subarray))b=
String.fromCharCode.apply(null,N.Qb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Qb(c.gb,c.Va),this.chunks.push(b)}while((0<c.T||0===c.D)&&1!==a);if(4===e)return(c=this.A)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Kh(c,-2):(c.state=null,a=113===d?Kh(c,-3):0)):a=-2,ai(this,a),this.ended=!0,0===a;2===e&&(ai(this,0),c.D=0);return!0};
function ai(a,b){0===b&&(a.result="string"===a.options.Ac?a.chunks.join(""):N.ac(a.chunks));a.chunks=[];a.err=b;a.msg=a.A.msg}
;function bi(a){this.name=a}
;var ci=new bi("rawColdConfigGroup");var di=new bi("rawHotConfigGroup");function ei(a){K.call(this,a)}
v(ei,K);function fi(a){K.call(this,a)}
v(fi,K);function gi(a){K.call(this,a)}
v(gi,K);gi.ma=[2];function hi(a){K.call(this,a)}
v(hi,K);hi.prototype.getPlayerType=function(){var a=Yc(this,36);return null==a?0:a};
hi.prototype.setHomeGroupInfo=function(a){return J(this,gi,81,a)};
hi.ma=[9,66,24,32,86,100,101];function ii(a){K.call(this,a)}
v(ii,K);ii.prototype.getKey=function(){return jd(this,1)};
ii.prototype.ia=function(){return jd(this,2===bd(this,ji)?2:-1)};
var ji=[2,3,4,5,6];function ki(a){K.call(this,a)}
v(ki,K);ki.ma=[15,26,28];function li(a){K.call(this,a)}
v(li,K);li.ma=[5];function mi(a){K.call(this,a)}
v(mi,K);function ni(a){K.call(this,a)}
v(ni,K);ni.prototype.setSafetyMode=function(a){return H(this,5,a)};
ni.ma=[12];function oi(a){K.call(this,a)}
v(oi,K);oi.ma=[12];var pi={Gd:"WEB_DISPLAY_MODE_UNKNOWN",Cd:"WEB_DISPLAY_MODE_BROWSER",Ed:"WEB_DISPLAY_MODE_MINIMAL_UI",Fd:"WEB_DISPLAY_MODE_STANDALONE",Dd:"WEB_DISPLAY_MODE_FULLSCREEN"};function qi(a){K.call(this,a)}
v(qi,K);qi.prototype.getKey=function(){return jd(this,1)};
qi.prototype.ia=function(){return jd(this,2)};function ri(a){K.call(this,a)}
v(ri,K);ri.ma=[4,5];function si(a){K.call(this,a)}
v(si,K);function ti(a){K.call(this,a)}
v(ti,K);var ui=[2,3,4,5];function vi(a){K.call(this,a)}
v(vi,K);function wi(a){K.call(this,a)}
v(wi,K);function xi(a){K.call(this,a)}
v(xi,K);function yi(a){K.call(this,a)}
v(yi,K);yi.ma=[10,17];function zi(a){K.call(this,a)}
v(zi,K);function Ai(a){K.call(this,a)}
v(Ai,K);function Bi(a){K.call(this,a)}
v(Bi,K);function Ci(a){K.call(this,a,475)}
v(Ci,K);
var Di=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Ei(a){K.call(this,a)}
v(Ei,K);function Fi(a){K.call(this,a)}
v(Fi,K);Fi.prototype.getPlaylistId=function(){return kd(this,2)};
var ld=[1,2];function Gi(a){K.call(this,a)}
v(Gi,K);Gi.ma=[3];var Hi=z.window,Ii,Ji,Ki=(null==Hi?void 0:null==(Ii=Hi.yt)?void 0:Ii.config_)||(null==Hi?void 0:null==(Ji=Hi.ytcfg)?void 0:Ji.data_)||{};B("yt.config_",Ki);function Li(){var a=arguments;1<a.length?Ki[a[0]]=a[1]:1===a.length&&Object.assign(Ki,a[0])}
function U(a,b){return a in Ki?Ki[a]:b}
function Mi(){return U("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ni(){var a=Ki.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Oi=[];function Pi(a){Oi.forEach(function(b){return b(a)})}
function Qi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ri(b)}}:a}
function Ri(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Li("ERRORS",b));Pi(a)}
function Si(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=U("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Li("ERRORS",f))}
;function W(a){a=Ti(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ui(a,b){a=Ti(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ti(a){var b=U("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:U("EXPERIMENT_FLAGS",{})[a]}
function Vi(){for(var a=[],b=U("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=U("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Wi=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Wi});var Xi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xi||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.h=a.pageY}}catch(e){}}
function Zi(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
Yi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb);var $i=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",$i);
function aj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function bj(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?cj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var cj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function dj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=aj(a,b,c,d);if(e)return e;e=++$i.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yi(h);if(!Ad(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yi(h);
h.currentTarget=a;return c.call(a,h)};
g=Qi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),cj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
;function ej(a,b){"function"===typeof a&&(a=Qi(a));return window.setTimeout(a,b)}
function fj(a,b){"function"===typeof a&&(a=Qi(a));return window.setInterval(a,b)}
;var gj=/^[\w.]*$/,hj={q:!0,search_query:!0};function ij(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=jj(f[0]||""),h=jj(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(ij);k.args=[{key:l,value:f[1],query:a,method:kj==m?"unchanged":m}];hj.hasOwnProperty(l)||Si(k)}}return c}
var kj=String(ij);function lj(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function mj(a){"?"==a.charAt(0)&&(a=a.substr(1));return ij(a,"&")}
function nj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=$b(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function oj(a){if(!b)var b=window.location.href;var c=a.match(Vb)[1]||null,d=Xb(a);c&&d?(a=a.match(Vb),b=b.match(Vb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Xb(b)==d&&(Number(b.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;return a}
function jj(a){return a&&a.match(gj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function pj(a){var b=qj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Td;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ba){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?wd:g;try{var h=g.history.length}catch(ba){h=0}e.u_his=h;var k;e.u_h=null==(k=wd.screen)?void 0:k.height;var l;e.u_w=null==(l=wd.screen)?void 0:l.width;var m;e.u_ah=null==(m=wd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=wd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=wd.screen)?void 0:r.colorDepth}catch(ba){}h=b.g;try{var p=h.screenX;var y=h.screenY}catch(ba){}try{var A=h.outerWidth;var I=h.outerHeight}catch(ba){}try{var O=h.innerWidth;var T=h.innerHeight}catch(ba){}try{var Q=h.screenLeft;var ya=h.screenTop}catch(ba){}try{O=h.innerWidth,T=h.innerHeight}catch(ba){}try{var Mc=h.screen.availWidth;var La=h.screen.availTop}catch(ba){}p=[Q,ya,p,y,Mc,La,A,I,O,T];y=b.g.top;try{var za=(y||window).document,ca=
"CSS1Compat"==za.compatMode?za.documentElement:za.body;var ia=(new yd(ca.clientWidth,ca.clientHeight)).round()}catch(ba){ia=new yd(-12245933,-12245933)}za=ia;ia={};var ja=void 0===ja?z:ja;ca=new Se;"SVGElement"in ja&&"createElementNS"in ja.document&&ca.set(0);y=Rd();y["allow-top-navigation-by-user-activation"]&&ca.set(1);y["allow-popups-to-escape-sandbox"]&&ca.set(2);ja.crypto&&ja.crypto.subtle&&ca.set(3);"TextDecoder"in ja&&"TextEncoder"in ja&&ca.set(4);ja=Te(ca);ia.bc=ja;ia.bih=za.height;ia.biw=
za.width;ia.brdim=p.join();b=b.h;b=(ia.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ia.wgl=!!wd.WebGLRenderingContext,ia);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var qj=new function(){var a=window.document;this.g=window;this.h=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return lj(pj(a))});Date.now();var rj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function sj(){if(!rj)return null;var a=rj();return"open"in a?a:null}
;var tj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},uj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Vd)),vj=!1;
function wj(a,b){b=void 0===b?{}:b;var c=oj(a),d=W("web_ajax_ignore_global_headers_if_set"),e;for(e in tj){var f=U(tj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=U("VISITOR_DATA"));!f||!c&&Xb(a)||d&&void 0!==b[e]||(!W("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===U("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}W("move_vss_away_from_login_info_cookie")&&c&&U("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==U("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Xb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Xb(a)||(b["X-YouTube-Ad-Signals"]=lj(pj()));return b}
function xj(a){var b=window.location.search,c=Xb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&oj(a)&&(c=document.location.hostname);var d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mj(b),f={};E(uj,function(g){e[g]&&(f[g]=e[g])});
return nj(a,f||{},!1)}
function yj(a,b){var c=b.format||"JSON";a=zj(a,b);var d=Aj(a,b),e=!1,f=Bj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Cj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ej(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function zj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=nj(a,b||{},!0);return a}
function Aj(a,b){var c=U("XSRF_FIELD_NAME"),d=U("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=U("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=mj(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):$b(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!vj&&a&&"POST"!=b.method&&(vj=!0,Ri(Error("AJAX request with postData should use POST")));return e}
function Cj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Si(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Dj(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ej(g)})}d&&Fj(e);
return e}
function Fj(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===pb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){z.console&&z.console.error(g.message)}pb=e}else pb=e}d=(e=pb)?e.createHTML(d):d;a[c]=new Tb(d)}else Fj(a[b])}}
function Dj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ej(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Gj(a,b){b.method="POST";b.postParams||(b.postParams={});return yj(a,b)}
function Bj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=sj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;W("debug_forward_web_query_parameters")&&(a=xj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Hj=[{Lb:function(a){return"Cannot read property '"+a.key+"'"},
xb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Lb:function(a){return"Cannot call '"+a.key+"'"},
xb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Lb:function(a){return a.key+" is not defined"},
xb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Jj={Aa:[],wa:[{Jc:Ij,weight:500}]};function Ij(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Kj(){this.wa=[];this.Aa=[]}
var Lj;function Mj(){if(!Lj){var a=Lj=new Kj;a.Aa.length=0;a.wa.length=0;Jj.Aa&&a.Aa.push.apply(a.Aa,Jj.Aa);Jj.wa&&a.wa.push.apply(a.wa,Jj.wa)}return Lj}
;var Nj=new M;function Oj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Pj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Pj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Pj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Pj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Qj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Rj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Oj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Rj(e+".ve",f,g,h):0;d+=g;d+=Rj(e,a[e],b,c);if(500<d)break}}else c[b]=Sj(a),d+=c[b].length;else c[b]=Sj(a),d+=c[b].length;return d}
function Rj(a,b,c,d){c+="."+a;a=Sj(b);d[c]=a;return c.length+a.length}
function Sj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Tj(){}
;function Uj(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Vj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Wj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Xj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Yj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Zj(){var a=z.navigator;return a?a.connection:void 0}
;function ak(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
v(ak,Error);function bk(){try{return ck(),!0}catch(a){return!1}}
function ck(){if(void 0!==U("DATASYNC_ID"))return U("DATASYNC_ID");throw new ak("Datasync ID not set","unknown");}
;function dk(){}
function ek(a,b){return fk(a,0,b)}
dk.prototype.ha=function(a,b){return fk(a,1,b)};function gk(){dk.apply(this,arguments)}
v(gk,dk);function hk(){gk.g||(gk.g=new gk);return gk.g}
function fk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ej(a,c||0)}
gk.prototype.Oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Re=hk();function ik(a){var b=new rg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new xg(b,a):b:null)||(a=new sg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new ng(a):null;this.h=document.domain||window.location.hostname}
ik.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Pf(b))}catch(f){return}else e=escape(b);b=this.h;be.set(""+a,e,{Jb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ik.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=be.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ik.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;be.remove(""+a,"/",void 0===b?"youtube.com":b)};var jk=function(){var a;return function(){a||(a=new ik("ytidb"));return a}}();
function kk(){var a;return null==(a=jk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var lk=[],mk=!1;function nk(a){mk||(lk.push({type:"ERROR",payload:a}),10<lk.length&&lk.shift())}
function ok(a,b){mk||(lk.push({type:"EVENT",eventType:a,payload:b}),10<lk.length&&lk.shift())}
;function pk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qk(a){return a.substr(0,a.indexOf(":"))||a}
;var rk=yc||zc;var sk={},tk=(sk.AUTH_INVALID="No user identifier specified.",sk.EXPLICIT_ABORT="Transaction was explicitly aborted.",sk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",sk.MISSING_INDEX="Index not created.",sk.MISSING_OBJECT_STORES="Object stores not created.",sk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",sk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",sk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
sk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",sk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",sk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",sk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",sk),uk={},vk=(uk.AUTH_INVALID="ERROR",uk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",uk.EXPLICIT_ABORT="IGNORED",uk.IDB_NOT_SUPPORTED="ERROR",uk.MISSING_INDEX=
"WARNING",uk.MISSING_OBJECT_STORES="ERROR",uk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",uk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",uk.QUOTA_EXCEEDED="WARNING",uk.QUOTA_MAYBE_EXCEEDED="WARNING",uk.UNKNOWN_ABORT="WARNING",uk.INCOMPATIBLE_DB_VERSION="WARNING",uk),wk={},xk=(wk.AUTH_INVALID=!1,wk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,wk.EXPLICIT_ABORT=!1,wk.IDB_NOT_SUPPORTED=!1,wk.MISSING_INDEX=!1,wk.MISSING_OBJECT_STORES=!1,wk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,wk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,wk.QUOTA_EXCEEDED=!1,wk.QUOTA_MAYBE_EXCEEDED=!0,wk.UNKNOWN_ABORT=!0,wk.INCOMPATIBLE_DB_VERSION=!1,wk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?tk[a]:c;d=void 0===d?vk[a]:d;e=void 0===e?xk[a]:e;ak.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
v(X,ak);function yk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},tk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yk.prototype)}
v(yk,X);function zk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zk.prototype)}
v(zk,Error);var Ak=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bk(a,b,c,d){b=qk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Ac&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ak.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Pd:e.name})];e.level="WARNING";return e}
function Ck(a,b,c){var d=kk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Dk(a){if(!a)throw Error();throw a;}
function Ek(a){return a}
function Fk(a){this.g=a}
function Gk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Gk.resolve=function(a){return new Gk(new Fk(function(b,c){a instanceof Gk?a.then(b,c):b(a)}))};
Gk.reject=function(a){return new Gk(new Fk(function(b,c){c(a)}))};
Gk.prototype.then=function(a,b){var c=this,d=null!=a?a:Ek,e=null!=b?b:Dk;return new Gk(new Fk(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Hk(c,c,d,f,g)}),c.h.push(function(){Ik(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hk(c,c,d,f,g):"REJECTED"===c.state.status&&Ik(c,c,e,f,g)}))};
function Jk(a,b){a.then(void 0,b)}
function Hk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gk?Kk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ik(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gk?Kk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gk?Kk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Lk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Mk(a){return new Promise(function(b,c){Lk(a,b,c)})}
function Nk(a){return new Gk(new Fk(function(b,c){Lk(a,b,c)}))}
;function Ok(a,b){return new Gk(new Fk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Pk=window,Y=Pk.ytcsi&&Pk.ytcsi.now?Pk.ytcsi.now:Pk.performance&&Pk.performance.timing&&Pk.performance.now&&Pk.performance.timing.navigationStart?function(){return Pk.performance.timing.navigationStart+Pk.performance.now()}:function(){return(new Date).getTime()};function Qk(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
q=Qk.prototype;q.add=function(a,b,c){return Rk(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Rk(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Sk(a,b,c){a=a.g.createObjectStore(b,c);return new Tk(a)}
q.delete=function(a,b){return Rk(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Rk(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function Uk(a,b,c){return Rk(a,[b],{mode:"readwrite",V:!0},function(d){d=d.objectStore(b);return Nk(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Rk(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(I){switch(I.g){case 1:var O={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){I.C(3);break}g++;k=Math.round(Y());wa(I,4);l=a.g.transaction(b,e.mode);O=new Vk(l);O=Wk(O,d);return w(I,O,6);case 6:return m=I.h,n=Math.round(Y()),Xk(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Aa(I);p=Math.round(Y());y=Bk(r,a.g.name,b.join(),a.g.version);
if((A=y instanceof X&&!y.g)||g>=f)Xk(a,k,p,g,y,b.join(),e),h=y;I.C(2);break;case 3:return I.return(Promise.reject(h))}})}
function Xk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ok("QUOTA_EXCEEDED",{dbName:qk(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),ok("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Yk(a,!1,d,f,b,g.tag),nk(e)):Yk(a,!0,d,f,b,g.tag)}
function Yk(a,b,c,d,e,f){ok("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function Tk(a){this.g=a}
q=Tk.prototype;q.add=function(a,b){return Nk(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Nk(this.g.clear()).then(function(){})};
function Zk(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function $k(a,b){return al(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?$k(this,a):Nk(this.g.delete(a))};
q.get=function(a){return Nk(this.g.get(a))};
q.index=function(a){try{return new bl(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zk(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function al(a,b,c){a=a.g.openCursor(b.query,b.direction);return cl(a).then(function(d){return Ok(d,c)})}
function Vk(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Wk(a,b){var c=new Promise(function(d,e){try{Jk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Vk.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Vk.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Tk(a),this.i.set(a,b));return b};
function bl(a){this.g=a}
q=bl.prototype;q.delete=function(a){return dl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Nk(this.g.get(a))};
q.getKey=function(a){return Nk(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function dl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return cl(a).then(function(d){return Ok(d,c)})}
function el(a,b){this.request=a;this.cursor=b}
function cl(a){return Nk(a).then(function(b){return b?new el(a,b):null})}
q=el.prototype;q.advance=function(a){this.cursor.advance(a);return cl(this.request)};
q.continue=function(a){this.cursor.continue(a);return cl(this.request)};
q.delete=function(){return Nk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ia=function(){return this.cursor.value};
q.update=function(a){return Nk(this.cursor.update(a))};function fl(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Qk(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Hc,k=c.Ic,l=c.md,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&ok("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:qk(a)});var y=f(),A=new Vk(g.transaction);m&&
m(y,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){ok("IDB_UNEXPECTEDLY_CLOSED",{dbName:qk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function gl(a,b,c){c=void 0===c?{}:c;return fl(a,b,c)}
function hl(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Hc)&&c.addEventListener("blocked",function(){e()}),w(g,Mk(c),4);
if(2!=g.g)return xa(g,0);f=Aa(g);throw Bk(f,a,"",-1);})}
;function il(a,b){this.name=a;this.options=b;this.i=!0;this.u=this.l=0}
il.prototype.h=function(a,b,c){c=void 0===c?{}:c;return gl(a,b,c)};
il.prototype.delete=function(a){a=void 0===a?{}:a;return hl(this.name,a)};
function jl(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function kl(a,b){if(!b)throw Ck("openWithToken",qk(a.name));return ll(a)}
function ll(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),w(A,a.h(a.name,a.options.version,d),4);case 4:h=A.h;for(var I=a.options,O=[],T=u(Object.keys(I.Wa)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var ya=I.Wa[Q],Mc=void 0===ya.kd?Number.MAX_VALUE:ya.kd;!(h.g.version>=ya.ab)||h.g.version>=Mc||h.g.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.C(5);break}l=Object.keys(a.options.Wa);m=h.objectStoreNames();
if(a.u<Ui("ytidb_reopen_db_retries",0))return a.u++,h.close(),nk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.l<Ui("ytidb_remake_db_retries",1))){A.C(6);break}a.l++;return w(A,a.delete(),7);case 7:return nk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new yk(m,l);case 5:return A.return(h);case 2:n=Aa(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.C(8);break}return w(A,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,jl(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bk(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw jl(a);if(a.g)return a.g;var d={Ic:function(f){f.close()},
closed:c,md:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var ml=new il("YtIdbMeta",{Wa:{databases:{ab:1}},upgrade:function(a,b){b(1)&&Sk(a,"databases",{keyPath:"actualName"})}});
function nl(a,b){var c;return x(function(d){if(1==d.g)return w(d,kl(ml,b),2);c=d.h;return d.return(Rk(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Nk(f.g.put(a,void 0)).then(function(){})})}))})}
function ol(a,b){var c;return x(function(d){if(1==d.g)return a?w(d,kl(ml,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function bm(a,b){var c,d;return x(function(e){return 1==e.g?(c=[],w(e,kl(ml,b),2)):3!=e.g?(d=e.h,w(e,Rk(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return al(f.objectStore("databases"),{},function(g){a(g.ia())&&c.push(g.ia());return g.continue()})}),3)):e.return(c)})}
function cm(a){return bm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var dm,em=new function(){}(new function(){});
function fm(){var a,b,c,d;return x(function(e){switch(e.g){case 1:a=kk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=rk)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,nl(d,em),4);case 4:return w(e,ol("yt-idb-test-do-not-use",em),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function gm(){if(void 0!==dm)return dm;mk=!0;return dm=fm().then(function(a){mk=!1;var b;if(null!=(b=jk())&&b.g){var c;b={hasSucceededOnce:(null==(c=kk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function hm(){return C("ytglobal.idbToken_")||void 0}
function im(){var a=hm();return a?Promise.resolve(a):gm().then(function(b){(b=b?em:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Qf;function jm(a){if(!bk())throw a=new X("AUTH_INVALID",{dbName:a}),nk(a),a;var b=ck();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function km(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,im(),2);case 2:g=m.h;if(!g)throw h=Ck("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),nk(h),h;pk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:jm(a);wa(m,3);return w(m,nl(k,g),5);case 5:return w(m,gl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=Aa(m),wa(m,7),w(m,ol(k.actualName,g),9);case 9:xa(m,
8);break;case 7:Aa(m);case 8:throw l;}})}
function lm(a,b,c){c=void 0===c?{}:c;return km(a,b,!1,c)}
function mm(a,b,c){c=void 0===c?{}:c;return km(a,b,!0,c)}
function nm(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.g)return w(e,im(),2);if(3!=e.g){c=e.h;if(!c)return e.return();pk(a);d=jm(a);return w(e,hl(d.actualName,b),3)}return w(e,ol(d.actualName,c),0)})}
function om(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.g?w(e,hl(d.actualName,b),2):w(e,ol(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function pm(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.g)return w(d,im(),2);if(3!=d.g){b=d.h;if(!b)return d.return();pk("LogsDatabaseV2");return w(d,cm(b),3)}c=d.h;return w(d,om(c,a,b),0)})}
function qm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.g)return w(d,im(),2);if(3!=d.g){c=d.h;if(!c)return d.return();pk(a);return w(d,hl(a,b),3)}return w(d,ol(a,c),0)})}
;function rm(a,b){il.call(this,a,b);this.options=b;pk(a)}
v(rm,il);function sm(a,b){var c;return function(){c||(c=new rm(a,b));return c}}
rm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Bb?mm:lm)(a,b,Object.assign({},c))};
rm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Bb?qm:nm)(this.name,a)};
function tm(a,b){return sm(a,b)}
;var um={},vm=tm("ytGcfConfig",{Wa:(um.coldConfigStore={ab:1},um.hotConfigStore={ab:1},um),Bb:!1,upgrade:function(a,b){b(1)&&(Zk(Sk(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Zk(Sk(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function wm(a){return kl(vm(),a)}
function xm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},w(g,wm(c),2);case 2:return e=g.h,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Uk(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function ym(a,b,c,d){var e,f,g;return x(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},w(h,wm(d),2);case 2:return f=h.h,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Uk(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function zm(a){var b,c;return x(function(d){return 1==d.g?w(d,wm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Rk(b,["coldConfigStore"],{mode:"readwrite",V:!0},function(e){return dl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
function Am(a){var b,c;return x(function(d){return 1==d.g?w(d,wm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Rk(b,["hotConfigStore"],{mode:"readwrite",V:!0},function(e){return dl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
;function Bm(){he.apply(this,arguments);this.g=[]}
v(Bm,he);Bm.prototype.xa=function(){this.g.length=0;he.prototype.xa.call(this)};function Cm(){this.g=0;this.h=new Bm}
function Dm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:if(!W("update_log_event_config")){g.C(0);break}c&&(a.i=c,B("yt.gcf.config.hotConfigGroup",a.i||null));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData||null);d=hm();if(!d){g.C(3);break}if(c){g.C(4);break}return w(g,Am(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return w(g,xm(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.h.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Em(a,b,c){var d,e,f,g;return x(function(h){if(1==h.g){if(!W("update_log_event_config"))return h.C(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=hm())?c?h.C(4):w(h,zm(d),5):h.C(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.C(0);g=c.configData;return w(h,ym(c,b,g,d),0)})}
;function Fm(){return"INNERTUBE_API_KEY"in Ki&&"INNERTUBE_API_VERSION"in Ki}
function Gm(){return{Vc:U("INNERTUBE_API_KEY"),Wc:U("INNERTUBE_API_VERSION"),Hb:U("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fc:U("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Xc:U("INNERTUBE_CONTEXT_CLIENT_NAME",1),hc:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),jc:U("INNERTUBE_CONTEXT_HL"),ic:U("INNERTUBE_CONTEXT_GL"),Yc:U("INNERTUBE_HOST_OVERRIDE")||"",ad:!!U("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Zc:!!U("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:U("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Hm(a){var b={client:{hl:a.jc,gl:a.ic,clientName:a.fc,clientVersion:a.hc,configInfo:a.Hb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=U("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Vi();0<c.length&&(b.request={internalExperimentFlags:c});Im(a,void 0,b);Jm(void 0,b);Km(void 0,b);Lm(a,void 0,b);Mm(void 0,b);W("start_sending_config_hash")&&Nm(void 0,b);U("DELEGATED_SESSION_ID")&&
!W("pageid_as_header_web")&&(b.user={onBehalfOfUser:U("DELEGATED_SESSION_ID")});!W("fill_delegate_context_in_gel_killswitch")&&(a=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(mj(U("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===
g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Om(a){var b=new oi,c=new hi;H(c,1,a.jc);H(c,2,a.ic);H(c,16,a.Xc);H(c,17,a.hc);if(a.Hb){var d=a.Hb,e=new ei;d.coldConfigData&&H(e,1,d.coldConfigData);d.appInstallData&&H(e,6,d.appInstallData);d.coldHashData&&H(e,3,d.coldHashData);d.hotHashData&&H(e,5,d.hotHashData);J(c,ei,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);H(c,65,d)}d=U("EXPERIMENTS_TOKEN","");""!==d&&H(c,
54,d);d=Vi();if(0<d.length){e=new ki;for(var f=0;f<d.length;f++){var g=new ii;H(g,1,d[f].key);ad(g,2,ji,d[f].value);id(e,15,ii,g)}J(b,ki,5,e)}Im(a,c);Jm(b);Km(c);Lm(a,c);Mm(c);W("start_sending_config_hash")&&Nm(c);U("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(a=new ni,H(a,3,U("DELEGATED_SESSION_ID")));!W("fill_delegate_context_in_gel_killswitch")&&(a=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=fd(b,ni,3)||new ni,a=H(d,18,a),J(b,ni,3,a));a=u(Object.entries(mj(U("DEVICE",""))));
for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?H(c,12,e):"cmodel"===d?H(c,13,e):"cbr"===d?H(c,87,e):"cbrver"===d?H(c,88,e):"cos"===d?H(c,18,e):"cosver"===d?H(c,19,e):"cplatform"===d&&H(c,42,e);J(b,hi,1,c);return b}
function Im(a,b,c){a=a.fc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fd(b,fi,96)||new fi;var d=Uj();d=Object.keys(pi).indexOf(d);d=-1===d?null:d;null!==d&&H(c,3,d);J(b,fi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Uj())}
function Jm(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=fd(a,li,7)||new li,H(b,4,c),J(a,li,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Km(a,b){var c;if(W("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Lm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fd(b,ei,62))?d:new ei;H(c,6,a.appInstallData);J(b,ei,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Mm(a,b){a:{var c=Zj();if(c){var d=Vj[c.type||"unknown"]||"CONN_UNKNOWN";c=Vj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?H(a,61,Wj[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=Zj(),d=null!=d&&d.effectiveType?Yj.hasOwnProperty(d.effectiveType)?Yj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?H(a,94,Xj[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Pm(a,b,c){c=void 0===c?{}:c;var d={};U("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":U("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||U("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Jd||U("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Id;else{Tj.g||(Tj.g=new Tj);a={};if(c=ee([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(U("SESSION_INDEX",0)),c=isNaN(c)?0:c),W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ki||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Ki&&(a["X-Goog-PageId"]=U("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Nm(a,b){if(!Cm.g){var c=new Cm;Cm.g=c}c=Cm.g;var d=Y()-c.g;if(0!==c.g&&d<Ui("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.g=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=fd(a,ei,62))?g:new ei;H(b,1,c);H(b,3,d);H(b,5,e);J(a,ei,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Qm=C("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.kb;M.prototype.publish=M.prototype.Xa;M.prototype.clear=M.prototype.clear;B("ytPubsub2Pubsub2Instance",Qm);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function Rm(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ud:a,Td:b},(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Sm=Ui("max_body_size_to_compress",5E5),Tm=Ui("min_body_size_to_compress",500),Um=!0,Vm=0,Wm=0,Xm=Ui("compression_performance_threshold",250),Ym=Ui("slow_compressions_before_abandon_count",10);
function Zm(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Um)try{try{var g=(new Blob(b.split(""))).size}catch(r){Si(r),g=null}if(null==g||!(g>Sm||g<Tm)){var h=ge(b);var k=k||{};k.Uc=!0;var l=new $h(k);l.push(h,!0);if(l.err)throw l.msg||Jg[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;Wm++;W("disable_compression_due_to_performance_degredation")&&n-e>=Xm&&(Vm++,W("abandon_compression_after_N_slow_zips")?Wm===Ui("compression_disable_point")&&Vm>Ym&&(Um=!1):Um=!1);W("gel_compression_csi_killswitch")||
!W("log_gel_compression_latency")&&!W("log_gel_compression_latency_lr")||Rm("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){Si(r),d(a,c)}else d(a,c)}
;function $m(a){a=Object.assign({},a);delete a.Authorization;var b=ee();if(b){var c=new Bf;c.update(U("INNERTUBE_API_KEY"));c.update(b);a.hash=Dc(c.digest(),3)}return a}
;var an;function bn(){an||(an=new ik("yt.innertube"));return an}
function cn(a,b,c,d){if(d)return null;d=bn().get("nextId",!0)||1;var e=bn().get("requests",!0)||{};e[d]={method:a,request:b,authState:$m(c),requestTime:Math.round(Y())};bn().set("nextId",d+1,86400,!0);bn().set("requests",e,86400,!0);return d}
function dn(a){var b=bn().get("requests",!0)||{};delete b[a];bn().set("requests",b,86400,!0)}
function en(a){var b=bn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=$m(Pm(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),fn(a,d.method,e,{}));delete b[c]}}bn().set("requests",b,86400,!0)}}
;function gn(a){this.ob=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Qa=function(){};
this.now=Date.now;this.eb=!1;var b;this.zc=null!=(b=a.zc)?b:100;var c;this.xc=null!=(c=a.xc)?c:1;var d;this.vc=null!=(d=a.vc)?d:2592E6;var e;this.uc=null!=(e=a.uc)?e:12E4;var f;this.wc=null!=(f=a.wc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.tb=!!a.tb;var h;this.rb=null!=(h=a.rb)?h:.1;var k;this.yb=null!=(k=a.yb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Qa&&(this.Qa=a.Qa);a.eb&&(this.eb=a.eb);a.ob&&(this.ob=a.ob);this.I=a.I;this.fa=a.fa;this.N=a.N;this.P=a.P;this.va=a.va;this.Ob=
a.Ob;this.Nb=a.Nb;hn(this)&&(!this.I||this.I("networkless_logging"))&&jn(this)}
function jn(a){hn(a)&&!a.eb&&(a.g=!0,a.tb&&Math.random()<=a.rb&&a.N.Kc(a.H),kn(a),a.P.ba()&&a.jb(),a.P.Ga(a.Ob,a.jb.bind(a)),a.P.Ga(a.Nb,a.Vb.bind(a)))}
q=gn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(hn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.H).then(function(e){d.id=e;c.P.ba()&&ln(c,d)}).catch(function(e){ln(c,d);
mn(c,e)})}else this.va(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(hn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ba()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.g)return w(k,d.N.set(e,d.H).catch(function(l){mn(d,l)}),2);
f(g,h);k.g=0})}}this.va(a,b,e.skipRetry)}else this.N.set(e,this.H).catch(function(g){d.va(a,b,e.skipRetry);
mn(d,g)})}else this.va(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(hn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Pa(d.id,c.H):e=!0;c.P.Ia&&c.I&&c.I("vss_network_hint")&&c.P.Ia(!0);f(g,h)};
this.va(d.url,d.options);this.N.set(d,this.H).then(function(g){d.id=g;e&&c.N.Pa(d.id,c.H)}).catch(function(g){mn(c,g)})}else this.va(a,b)};
q.jb=function(){var a=this;if(!hn(this))throw Ck("throttleSend");this.h||(this.h=this.fa.ha(function(){var b;return x(function(c){if(1==c.g)return w(c,a.N.cc("NEW",a.H),2);if(3!=c.g)return b=c.h,b?w(c,ln(a,b),3):(a.Vb(),c.return());a.h&&(a.h=0,a.jb());c.g=0})},this.zc))};
q.Vb=function(){this.fa.Oa(this.h);this.h=0};
function ln(a,b){var c,d;return x(function(e){switch(e.g){case 1:if(!hn(a))throw c=Ck("immediateSend"),c;if(void 0===b.id){e.C(2);break}return w(e,a.N.cd(b.id,a.H),3);case 3:(d=e.h)||a.Qa(Error("The request cannot be found in the database."));case 2:if(nn(a,b,a.vc)){e.C(4);break}a.Qa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.C(5);break}return w(e,a.N.Pa(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=on(a,b));if(!b){e.C(0);break}if(!b.skipRetry||
void 0===b.id){e.C(8);break}return w(e,a.N.Pa(b.id,a.H),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.g=0}})}
function on(a,b){if(!hn(a))throw Ck("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.g){case 1:g=pn(f);(h=qn(f))&&a.I&&a.I("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yb)){m.C(2);break}if(!a.P.Ab){m.C(3);break}return w(m,a.P.Ab(),3);case 3:if(a.P.ba()){m.C(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.C(6);
break}return w(m,a.N.Pb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.C(8);break}return b.sendCount<a.xc?w(m,a.N.Pb(b.id,a.H,!0,h?!1:void 0),12):w(m,a.N.Pa(b.id,a.H),8);case 12:a.fa.ha(function(){a.P.ba()&&a.jb()},a.wc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.C(2):w(h,a.N.Pa(b.id,a.H),2);a.P.Ia&&a.I&&a.I("vss_network_hint")&&a.P.Ia(!0);d(e,f);h.g=0})};
return b}
function nn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function kn(a){if(!hn(a))throw Ck("retryQueuedRequests");a.N.cc("QUEUED",a.H).then(function(b){b&&!nn(a,b,a.uc)?a.fa.ha(function(){return x(function(c){if(1==c.g)return void 0===b.id?c.C(2):w(c,a.N.Pb(b.id,a.H),2);kn(a);c.g=0})}):a.P.ba()&&a.jb()})}
function mn(a,b){a.Cc&&!a.P.ba()?a.Cc(b):a.handleError(b)}
function hn(a){return!!a.H||a.ob}
function pn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function qn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var rn;
function sn(){if(rn)return rn();var a={};rn=tm("LogsDatabaseV2",{Wa:(a.LogsRequestsStore={ab:2},a),Bb:!1,upgrade:function(b,c,d){c(2)&&Sk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Zk(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return rn()}
;function tn(a){return kl(sn(),a)}
function un(a,b){var c,d,e,f;return x(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,tn(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:U("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Uk(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();vn(c);return g.return(f)})}
function wn(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,tn(b),2);if(3!=l.g)return d=l.h,e=U("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Rk(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(m){return dl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ia()&&(k=n.ia(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();vn(c);return l.return(k)})}
function xn(a,b){var c;return x(function(d){if(1==d.g)return w(d,tn(b),2);c=d.h;return d.return(Rk(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Nk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function yn(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.g)return w(f,tn(b),2);e=f.h;return f.return(Rk(e,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Nk(h.g.put(k,void 0)).then(function(){return k})):Gk.resolve(void 0)})}))})}
function zn(a,b){var c;return x(function(d){if(1==d.g)return w(d,tn(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function An(a){var b,c;return x(function(d){if(1==d.g)return w(d,tn(a),2);b=d.h;c=Y()-2592E6;return w(d,Rk(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return al(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bn(){x(function(a){return w(a,pm(),0)})}
function vn(a){W("nwl_csi_killswitch")||Rm("networkless_performance",a,{sampleRate:1})}
;var Cn={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};var Dn={},En=tm("ServiceWorkerLogsDatabase",{Wa:(Dn.SWHealthLog={ab:1},Dn),Bb:!0,upgrade:function(a,b){b(1)&&Zk(Sk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Fn(a){return kl(En(),a)}
function Gn(a){var b,c;x(function(d){if(1==d.g)return w(d,Fn(a),2);b=d.h;c=Y()-2592E6;return w(d,Rk(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return al(e.objectStore("SWHealthLog"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hn(a){var b;return x(function(c){if(1==c.g)return w(c,Fn(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var In={},Jn=0;function Kn(a){var b=new Image,c=""+Jn++;In[c]=b;b.onload=b.onerror=function(){delete In[c]};
b.src=a}
;function Ln(){this.g=new Map;this.h=!1}
function Mn(){if(!Ln.g){var a=C("yt.networkRequestMonitor.instance")||new Ln;B("yt.networkRequestMonitor.instance",a);Ln.g=a}return Ln.g}
Ln.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Ln.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Ln.prototype.removeParams=function(a){return a.split("?")[0]};
Ln.prototype.removeParams=Ln.prototype.removeParams;Ln.prototype.isEndpointCFR=Ln.prototype.isEndpointCFR;Ln.prototype.requestComplete=Ln.prototype.requestComplete;Ln.getInstance=Mn;var Nn;function On(){Nn||(Nn=new ik("yt.offline"));return Nn}
function Pn(a){if(W("offline_error_handling")){var b=On().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);On().set("errors",b,2592E3,!0)}}
;function Z(){Ke.call(this);var a=this;this.l=!1;this.h=Qe();this.h.Ga("networkstatus-online",function(){if(a.l&&W("offline_error_handling")){var b=On().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new ak(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ri(d)}On().set("errors",{},2592E3,!0)}}})}
v(Z,Ke);function Qn(){if(!Z.g){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
q=Z.prototype;q.ba=function(){return this.h.ba()};
q.Ia=function(a){this.h.h=a};
q.Sc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Nc=function(){this.l=!0};
q.Ga=function(a,b){return this.h.Ga(a,b)};
q.Ab=function(a){a=Oe(this.h,a);a.then(function(b){W("use_cfr_monitor")&&Mn().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ab;Z.prototype.listen=Z.prototype.Ga;Z.prototype.enableErrorFlushing=Z.prototype.Nc;Z.prototype.getWindowStatus=Z.prototype.Sc;Z.prototype.networkStatusHint=Z.prototype.Ia;Z.prototype.isNetworkAvailable=Z.prototype.ba;Z.getInstance=Qn;function Rn(a){a=void 0===a?{}:a;Ke.call(this);var b=this;this.h=this.G=0;this.l=Qn();var c=C("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.zb?(this.zb=a.zb,c("networkstatus-online",function(){Sn(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Sn(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Le(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Le(b,"publicytnetworkstatus-offline")})))}
v(Rn,Ke);Rn.prototype.ba=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Rn.prototype.Ia=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Rn.prototype.Ab=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return W("skip_network_check_if_cfr")&&Mn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ba())})):c?d.return(c(a)):d.return(!0)})};
function Sn(a,b){a.zb?a.h?(Re.Oa(a.G),a.G=Re.ha(function(){a.o!==b&&(Le(a,b),a.o=b,a.h=Y())},a.zb-(Y()-a.h))):(Le(a,b),a.o=b,a.h=Y()):Le(a,b)}
;var Tn;function Un(){var a=gn.call;Tn||(Tn=new Rn({Nd:!0,Md:!0}));a.call(gn,this,{N:{Kc:An,Pa:zn,cc:wn,cd:xn,Pb:yn,set:un},P:Tn,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Si(new ak(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Ri(b)},
Qa:Si,va:Vn,now:Y,Cc:Pn,fa:hk(),Ob:"publicytnetworkstatus-online",Nb:"publicytnetworkstatus-offline",tb:!0,rb:.1,yb:Ui("potential_esf_error_limit",10),I:W,eb:!(bk()&&"www.youtube-nocookie.com"!==Xb(document.location.toString()))});this.i=new Qf;W("networkless_immediately_drop_all_requests")&&Bn();qm("LogsDatabaseV2")}
v(Un,gn);function Wn(){var a=C("yt.networklessRequestController.instance");a||(a=new Un,B("yt.networklessRequestController.instance",a),W("networkless_logging")&&im().then(function(b){a.H=b;jn(a);a.i.resolve();a.tb&&Math.random()<=a.rb&&a.H&&Gn(a.H);W("networkless_immediately_drop_sw_health_store")&&Xn(a)}));
return a}
Un.prototype.writeThenSend=function(a,b){b||(b={});bk()||(this.g=!1);gn.prototype.writeThenSend.call(this,a,b)};
Un.prototype.sendThenWrite=function(a,b,c){b||(b={});bk()||(this.g=!1);gn.prototype.sendThenWrite.call(this,a,b,c)};
Un.prototype.sendAndWrite=function(a,b){b||(b={});bk()||(this.g=!1);gn.prototype.sendAndWrite.call(this,a,b)};
Un.prototype.awaitInitialization=function(){return this.i.promise};
function Xn(a){var b;x(function(c){if(!a.H)throw b=Ck("clearSWHealthLogsDb"),b;return c.return(Hn(a.H).catch(function(d){a.handleError(d)}))})}
function Vn(a,b,c){b=W("web_fp_via_jspb")?Object.assign({},b):b;W("use_cfr_monitor")&&Yn(a,b);if(W("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Bj(a,void 0,"POST",e);else if(U("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Bj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new $a({url:a});if(g.i&&g.h||g.l){var h=Wb(a.match(Vb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==bc(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Kn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Zm(a,b.postBody,b,yj)):Zm(a,JSON.stringify(b.postParams),b,Gj):yj(a,b)}
function Yn(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mn().requestComplete(a,!0);d(e,f)}}
;var Zn=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",Zn);function $n(a){var b=this;this.config_=null;a?this.config_=a:Fm()&&(this.config_=Gm());ek(function(){en(b)},5E3)}
$n.prototype.isReady=function(){!this.config_&&Fm()&&(this.config_=Gm());return!!this.config_};
function fn(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||W("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=cn(b,c,l,k)),A)){var I=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,ya){dn(A);I(Q,ya)};
c.onFetchSuccess=function(Q,ya){dn(A);O(Q,ya)}}try{if(y&&d.retry&&!d.nc.bypassNetworkless)g.method="POST",d.nc.writeThenSend?Wn().writeThenSend(p,g):Wn().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));Zm(p,T,g,yj)}else Zm(p,JSON.stringify(g.postParams),g,Gj);else W("web_all_payloads_via_jspb")?yj(p,g):Gj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(dn(A),A=0),Si(Error("An extension is blocking network request."));else throw Q;}A&&ek(function(){en(a)},5E3)}
!U("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Si(new ak("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ak("innertube xhrclient not ready",b,c,d);Ri(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Yc)&&(h=f);var k=a.config_.ad||!1,l=Pm(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Wc+"/"+b,n={alt:"json"},r=a.config_.Zc&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Vc);var p=nj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
Zn.isNwlInitialized?gm().then(function(y){e(y)}):e(!1)}
;function ao(a){this.W=a;this.g=null;this.o=0;this.M=null;this.G=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.l=0;this.Cb=dj(window,"mousemove",Xa(this.Db,this));this.Eb=fj(Xa(this.La,this),25)}
D(ao,he);ao.prototype.Db=function(a){void 0===a.g&&Zi(a);var b=a.g;void 0===a.h&&Zi(a);this.g=new xd(b,a.h)};
ao.prototype.La=function(){if(this.g){var a=Y();if(0!=this.o){var b=this.M,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.h[this.l]=.5<Math.abs((d-this.G)/this.G)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.W();this.G=d}this.o=a;this.M=this.g;this.l=(this.l+1)%4}};
ao.prototype.xa=function(){window.clearInterval(this.Eb);bj(this.Cb)};var bo=new Set([174,173,175]),co={};
function eo(){var a={},b=void 0===a.jd?!1:a.jd;a=void 0===a.Oc?!0:a.Oc;if(null==C("_lact",window)){var c=parseInt(U("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&fo();dj(document,"keydown",fo);dj(document,"keyup",fo);dj(document,"mousedown",fo);dj(document,"mouseup",fo);b?dj(window,"touchmove",function(){go("touchmove",200)},{passive:!0}):(dj(window,"resize",function(){go("resize",200)}),a&&dj(window,"scroll",function(){go("scroll",200)}));
new ao(function(){go("mouse",100)});
dj(document,"touchstart",fo,{passive:!0});dj(document,"touchend",fo,{passive:!0})}}
function go(a,b){co[a]||(co[a]=!0,Re.ha(function(){fo();co[a]=!1},b))}
function fo(a){var b;if(null!=(b=C("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!bo.has(null==a?void 0:a.keyCode))null==C("_lact",window)&&eo(),a=Date.now(),B("_lact",a,window),-1==C("_fact",window)&&B("_fact",a,window),(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function ho(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var io=z.ytPubsubPubsubInstance||new M,jo=z.ytPubsubPubsubSubscribedKeys||{},ko=z.ytPubsubPubsubTopicToKeys||{},lo=z.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.kb;M.prototype.publish=M.prototype.Xa;M.prototype.clear=M.prototype.clear;B("ytPubsubPubsubInstance",io);B("ytPubsubPubsubTopicToKeys",ko);B("ytPubsubPubsubIsSynchronous",lo);B("ytPubsubPubsubSubscribedKeys",jo);var mo=Symbol("injectionDeps");function no(){this.key=Cm}
function oo(){this.h=new Map;this.g=new Map}
oo.prototype.resolve=function(a){return a instanceof no?po(this,a.key,[],!0):po(this,a,[])};
function po(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.pd)var e=d.pd;else if(d.od)e=d[mo]?qo(a,d[mo],c):[],e=d.od.apply(d,ka(e));else if(d.nd){e=d.nd;var f=e[mo]?qo(a,e[mo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Sd||a.g.set(b,e);return e}
function qo(a,b,c){return b?b.map(function(d){return d instanceof no?po(a,d.key,c,!0):po(a,d,c)}):[]}
;var ro;function so(){ro||(ro=new oo);return ro}
;function to(){this.store={};this.g={}}
to.prototype.storePayload=function(a,b){a=uo(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
to.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=vo(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
to.prototype.extractMatchingEntries=function(a){a=vo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
to.prototype.getSequenceCount=function(a){a=vo(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function vo(a,b){var c=uo(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&uo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(wo(b.auth,g[0])){var h=b.isJspb;wo(void 0===h?"undefined":h?"true":"false",g[1])&&wo(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),wo(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function wo(a,b){return void 0===a||"undefined"===a?!0:a===b}
to.prototype.getSequenceCount=to.prototype.getSequenceCount;to.prototype.extractMatchingEntries=to.prototype.extractMatchingEntries;to.prototype.smartExtractMatchingEntries=to.prototype.smartExtractMatchingEntries;to.prototype.storePayload=to.prototype.storePayload;function uo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var xo=Ui("initial_gel_batch_timeout",2E3),yo=Ui("gel_queue_timeout_max_ms",6E4),zo=Math.pow(2,16)-1,Ao=void 0;function Bo(){this.i=this.g=this.h=0}
var Co=new Bo,Do=new Bo,Eo=new Bo,Fo=new Bo,Go,Ho=!0,Io=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Io);var Jo=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Jo);var Ko={};function Lo(){var a=C("yt.logging.ims");a||(a=new to,B("yt.logging.ims",a));return a}
function Mo(a,b){if("log_event"===a.endpoint){No(a);var c=Oo(a);a:{var d=Object.keys(a.payload);d=u(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,Cn[e]){d=e;break a}d=void 0}d=Po(d||"");400===d?Qo(a,b):(Ko[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Lo().storePayload(d,a.payload),Ro(b,c,!1,d))}}
function So(a,b,c){if("log_event"===b.endpoint){No(void 0,b);var d=Oo(b,!0),e=Po(a);400===e?To(a,b,c):(Ko[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Lo().storePayload(a,b.payload.toJSON()),Ro(c,d,!0,a))}}
function Ro(a,b,c,d){function e(){Uo({writeThenSend:!0},W("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;a&&(Ao=new a);a=Vo();var f=Y(),g=Wo(c,d.tier),h=g.i,k=0;d&&(k=Lo().getSequenceCount(d));1E3<=k&&W("web_logging_max_batch_hard_limit")?e():k>=a?Go||(Go=Xo(function(){e();Go=void 0},0)):10<=f-h&&(Yo(c,d.tier),g.i=f)}
function Qo(a,b){if("log_event"===a.endpoint){No(a);var c=Oo(a),d=new Map;d.set(c,[a.payload]);b&&(Ao=new b);return new Rf(function(e,f){Ao&&Ao.isReady()?Zo(d,Ao,e,f,{bypassNetworkless:!0},!0):e()})}}
function To(a,b,c){if("log_event"===b.endpoint){No(void 0,b);a=Oo(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(Ao=new c);return new Rf(function(e){Ao&&Ao.isReady()?$o(d,Ao,e,{bypassNetworkless:!0},!0):e()})}}
function Oo(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Fi;c.videoId?ad(d,1,ld,c.videoId):c.playlistId&&ad(d,2,ld,c.playlistId);Jo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Io[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Uo(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Rf(function(e,f){var g=Wo(c,d);ap(g.h);ap(g.g);g.g=0;Ao&&Ao.isReady()?void 0===d&&W("enable_web_tiered_gel")?(bp(e,f,a,b,c,300),bp(e,f,a,b,c,200)):bp(e,f,a,b,c,d):(Yo(c,d),e())})}
function bp(a,b,c,d,e,f){var g=Ao;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map,k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=W("enable_web_tiered_gel")?Lo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Vo()}):Lo().extractMatchingEntries(m),h.set(d,b),$o(h,g,a,c)):(h=W("enable_web_tiered_gel")?Lo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Vo()}):Lo().extractMatchingEntries(m),k.set(d,h),Zo(k,g,a,b,c));else if(e){b=u(Object.keys(Ko));
for(d=b.next();!d.done;d=b.next())k=d.value,f=W("enable_web_tiered_gel")?Lo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Vo()}):Lo().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&h.set(k,f),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Ko[k];$o(h,g,a,c)}else{h=u(Object.keys(Ko));for(d=h.next();!d.done;d=h.next())l=d.value,m=W("enable_web_tiered_gel")?Lo().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},{isJspb:!1,
cttAuthInfo:l}],sizeLimit:Vo()}):Lo().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<m.length&&k.set(l,m),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Ko[l];Zo(k,g,a,b,c)}}
function Yo(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Wo(a,b),d=c===Fo||c===Eo?5E3:yo;W("web_gel_timeout_cap")&&!c.g&&(d=Xo(function(){Uo({writeThenSend:!0},void 0,a,b)},d),c.g=d);
ap(c.h);d=U("LOGGING_BATCH_TIMEOUT",Ui("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Ho&&(d=xo);d=Xo(function(){Uo({writeThenSend:!0},void 0,a,b)},d);
c.h=d}
function Zo(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={lb:k.lb,Ea:k.Ea,Za:k.Za,nb:k.nb,mb:k.mb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Ea=mb({context:Hm(b.config_||Gm())});if(!Oa(m)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}k.Ea.events=m;(m=Io[l])&&cp(k.Ea,l,m);delete Io[l];k.Za="visitorOnlyApprovedKey"===l;dp(k.Ea,g,k.Za);ep(e);k.nb=function(n){W("update_log_event_config")&&Re.ha(function(){return x(function(r){return w(r,
fp(n),0)})});
h--;h||c()};
k.lb=0;k.mb=function(n){return function(){n.lb++;if(e.bypassNetworkless&&1===n.lb)try{fn(b,"log_event",n.Ea,gp({writeThenSend:!0},n.Za,n.nb,n.mb,f)),Ho=!1}catch(r){Ri(r),d()}h--;h||c()}}(k);
try{fn(b,"log_event",k.Ea,gp(e,k.Za,k.nb,k.mb,f)),Ho=!1}catch(n){Ri(n),d()}}}
function $o(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Gi;var n=Om(b.config_||Gm());J(k,oi,1,n);m=m?hp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())id(k,3,Ci,n.value);(m=Jo[l])&&ip(k,l,m);delete Jo[l];l="visitorOnlyApprovedKey"===l;jp(k,f,l);ep(d);m={startTime:Y(),ticks:{},infos:{}};k=vd(k);m.ticks.geljspc=Y();W("log_jspb_serialize_latency")&&Rm("gel_jspb_serialize",
m,{sampleRate:.1});l=gp(d,l,function(r){W("update_log_event_config")&&Re.ha(function(){return x(function(p){return w(p,fp(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;fn(b,"log_event","",l);Ho=!1}}
function ep(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function gp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,nc:a,dangerousLogToVisitorSession:b,Ld:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")||W("compress_gel_lr")};kp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function dp(a,b,c){kp()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=U("EVENT_ID"))&&(c=lp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function jp(a,b,c){kp()||H(a,2,b);if(!c&&(b=U("EVENT_ID"))){c=lp();var d=new Ei;H(d,1,b);H(d,2,c);J(a,Ei,5,d)}}
function lp(){var a=U("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*zo/2));a++;a>zo&&(a=1);Li("BATCH_CLIENT_COUNTER",a);return a}
function cp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ip(a,b,c){if(kd(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Fi,4,c);a=fd(a,oi,1)||new oi;c=fd(a,ni,3)||new ni;var e=new mi;H(e,2,b);H(e,1,d);id(c,12,mi,e);J(a,ni,3,c)}
function hp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ci(a[c]))}catch(d){Ri(new ak("Transport failed to deserialize "+String(a[c])))}return b}
function No(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function kp(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function Xo(a,b){return W("transport_use_scheduler")?ek(a,b):ej(a,b)}
function ap(a){W("transport_use_scheduler")?Re.Oa(a):window.clearTimeout(a)}
function fp(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[di.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[ci.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=so().resolve(new no))?g?e?w(n,Dm(m,g,e),2):w(n,Dm(m,g),2):n.C(2):n.return()}return l?h?w(n,Em(m,l,h),0):w(n,Em(m,l),0):n.C(0)})}
function Wo(a,b){b=void 0===b?200:b;return a?300===b?Fo:Do:300===b?Eo:Co}
function Vo(){return Ui("tvhtml5_logging_max_batch_ads_fork")||Ui("web_logging_max_batch")||100}
function Po(a){if(W("enable_web_tiered_gel")){a=Cn[a||""];var b,c;if(null==so().resolve(new no))var d=void 0;else{var e=null!=(d=C("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c].tier;return 200}}
;var mp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",mp);
function np(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;W("enable_unknown_lact_fix_on_html5")&&eo();a=ho();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};W("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:op(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete mp[d.sequenceGroup]);(d.sendIsolatedPayload?Qo:Mo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function pp(a){Uo(void 0,void 0,void 0===a?!1:a)}
function op(a){mp[a]=a in mp?mp[a]+1:0;return mp[a]}
;var qp=[];function rp(a,b,c){c=void 0===c?{}:c;var d=$n;U("ytLoggingEventsDefaultDisabled",!1)&&$n===$n&&(d=null);W("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=ho(),c.timestamp=Y()),qp.push({pc:a,payload:b,options:c})):np(a,b,d,c)}
;var sp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",sp);function tp(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;U("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:$n;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());H(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Bi;if(c.lact)H(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)H(e,1,-1);else{var f=ho();H(e,1,isFinite(f)?f:-1)}if(W("log_sequence_info_on_gel_web")&&c.sequenceGroup){f=c.sequenceGroup;var g=op(f),h=new Ai;H(h,2,g);H(h,1,f);J(e,Ai,3,h);c.endOfSequence&&delete sp[c.sequenceGroup]}J(b,
Bi,33,e);(c.sendIsolatedPayload?To:So)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var up=new Set,vp=0,wp=0,xp=0,yp=[],zp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ap(a){try{up.add(a.message)}catch(b){}vp++}
function Bp(){for(var a=u(zp),b=a.next();!b.done;b=a.next()){var c=Mb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Cp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:U("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Mi())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=U("SERVER_NAME");b=U("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}yj(U("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Dp(){var a;return x(function(b){return(a=kf())?b.return(a.then(function(c){c=vd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Dc(d,3)})):b.return(Promise.resolve(null))})}
;var Ep={};function Fp(a){return Ep[a]||(Ep[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Gp={},Hp=[],hg=new M,Ip={};function Jp(){for(var a=u(Hp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Kp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Fp(b)]:a.getAttribute("data-"+b):null;return c}
function Lp(a){hg.Xa.apply(hg,arguments)}
;function Mp(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Np(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Op(a,b,c){Pp||(Pp={},Qp=new Set,dj(window,"message",function(d){a:if(Qp.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Pp[e.id];f&&d.origin===f.Gc&&(d=f.qd,d.G=!0,d.G&&(E(d.o,d.sendMessage,d),d.o.length=0),d.Tb(e))}}));
a=String(Np(a,"host"));Pp[c]={qd:b,Gc:a};Qp.add(a)}
var Pp=null,Qp=null;var Rp=window;
function Sp(a,b,c){this.u=this.g=this.h=null;this.i=0;this.G=!1;this.o=[];this.l=null;this.W={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Yb(a.src):"https://www.youtube.com"),this.h=new Mp(b),c||(b=Tp(this,a),this.u=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Gp[this.g.id]=this,window.postMessage){this.l=
new M;Up(this);b=Np(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ip)Ip.hasOwnProperty(e)&&Vp(this,e)}}
q=Sp.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.Tb=function(a){Wp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Xp(this,a);return this};
function Vp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&Xp(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Gp[this.g.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.u){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.u,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Pp&&(Pp[this.id]=null);this.h=null;a=this.g;for(var c in kb)kb[c][0]==a&&bj(c);this.u=this.g=null};
q.Xb=function(){return{}};
function Yp(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.o.push(b)}
function Wp(a,b,c){a.l.i||(c={target:a,data:c},a.l.Xa(b,c),Lp(a.M+"."+b,c))}
function Tp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Np(a.h,"title"));(b=Np(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Np(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.Xb();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=bc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Np(a.h,"host")+("/embed/"+Np(a.h,"videoId"))+"?"+$b(g);Rp.yt_embedsEnableUaChProbe?Dp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ld(l.href).toString();Hd(c,Md(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Rp.yt_embedsEnableIframeSrcWithIntent?(Hd(c,Md(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.qc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Up(a){Op(a.h,a,a.id);a.i=fj(a.qc.bind(a),250);dj(a.g,"load",function(){window.clearInterval(a.i);a.i=fj(a.qc.bind(a),250)})}
function Xp(a,b){a.W[b]||(a.W[b]=!0,Yp(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Yb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(ic){if(ic.name&&"SyntaxError"===ic.name){if(!(ic.message&&0<ic.message.indexOf("target origin ''"))){var e=void 0,f=ic;e=void 0===e?{}:e;e.name=U("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=U("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(W("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=vp)){var m=void 0,n=void 0,r=f,p=e,y=Bd(r),A=y.message||"Unknown Error",
I=y.name||"UnknownError",O=y.stack||r.h||"Not available";if(O.startsWith(I+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",ya=y.fileName||"Not available",Mc=O,La=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var za=0;za<r.args.length&&!(La=Qj(r.args[za],"params."+za,p,La),500<=La);za++);else if(r.hasOwnProperty("params")&&r.params){var ca=r.params;if("object"===typeof r.params)for(n in ca){if(ca[n]){var ia="params."+n,ja=Sj(ca[n]);p[ia]=ja;La+=
ia.length+ja.length;if(500<La)break}}else p.params=Sj(ca)}if(yp.length)for(var ba=0;ba<yp.length&&!(La=Qj(yp[ba],"params.context."+ba,p,La),500<=La);ba++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:I,lineNumber:Q,fileName:ya,stack:Mc,params:p,sampleWeight:1},pl=Number(r.columnNumber);isNaN(pl)||(V.lineNumber=V.lineNumber+":"+pl);if("IGNORED"===r.level)m=0;else a:{for(var ql=Mj(),rl=u(ql.Aa),Tg=rl.next();!Tg.done;Tg=rl.next()){var sl=
Tg.value;if(V.message&&V.message.match(sl.Od)){m=sl.weight;break a}}for(var tl=u(ql.wa),Ug=tl.next();!Ug.done;Ug=tl.next()){var ul=Ug.value;if(ul.Jc(V)){m=ul.weight;break a}}m=1}V.sampleWeight=m;for(var vl=u(Hj),Vg=vl.next();!Vg.done;Vg=vl.next()){var Wg=Vg.value;if(Wg.xb[V.name])for(var wl=u(Wg.xb[V.name]),Xg=wl.next();!Xg.done;Xg=wl.next()){var xl=Xg.value,re=V.message.match(xl.regexp);if(re){V.params["params.error.original"]=re[0];for(var Yg=xl.groups,yl={},jc=0;jc<Yg.length;jc++)yl[Yg[jc]]=re[jc+
1],V.params["params.error."+Yg[jc]]=re[jc+1];V.message=Wg.Lb(yl);break}}}V.params||(V.params={});var zl=Mj();V.params["params.errorServiceSignature"]="msg="+zl.Aa.length+"&cb="+zl.wa.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));rb("sample").constructor!==qb&&(V.params["params.fconst"]="true");var cd=V;window.yterr&&"function"===typeof window.yterr&&window.yterr(cd);
if(0!==cd.sampleWeight&&!up.has(cd.message))if(h&&W("web_enable_error_204")){var Al=cd;Cp(void 0===g?"ERROR":g,Al);Ap(Al)}else{var Zg=void 0,$g=void 0,Bl=void 0,Cl=void 0,ah=void 0,L=cd,Cb=g;Cb=void 0===Cb?"ERROR":Cb;if("ERROR"===Cb){Nj.Xa("handleError",L);if(W("record_app_crashed_web")&&0===xp&&1===L.sampleWeight)if(xp++,W("errors_via_jspb")){var dq=new zi;ah=H(dq,1,1);if(!W("report_client_error_with_app_crash_ks")){var eq=new yi,fq=new xi,gq=new wi,hq=new vi;var iq=H(hq,1,L.message);var jq=J(gq,
vi,3,iq);Cl=J(fq,wi,5,jq);Bl=J(eq,xi,9,Cl);J(ah,yi,4,Bl)}var Dl=W("jspb_sparse_encoded_pivot")?new Ci([{}]):new Ci;hd(Dl,zi,20,Di,ah);tp("appCrashed",Dl)}else{var El={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};W("report_client_error_with_app_crash_ks")||(El.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});rp("appCrashed",El)}wp++}else"WARNING"===Cb&&Nj.Xa("handleWarning",L);if(W("kevlar_gel_error_routing"))a:{var dd=Cb;if(W("errors_via_jspb")){if(Bp())$g=void 0;else{var kc=new si;
H(kc,1,L.stack);L.fileName&&H(kc,4,L.fileName);var Va=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];if(0!==Va.length)if(1===Va.length&&!isNaN(Number(Va[0]))){var kq=kc,Fl=Number(Va[0]);Na(Fl);H(kq,2,Fl)}else if(2===Va.length&&!isNaN(Number(Va[0]))&&!isNaN(Number(Va[1]))){var lq=kc,Gl=Number(Va[0]);Na(Gl);H(lq,2,Gl);var mq=kc,Hl=Number(Va[1]);Na(Hl);H(mq,3,Hl)}var Db=new vi;H(Db,1,L.message);H(Db,3,L.name);var nq=Db,Il=L.sampleWeight;Na(Il);H(nq,6,Il);"ERROR"===dd?H(Db,2,2):"WARNING"===
dd?H(Db,2,1):H(Db,2,0);var bh=new ti;H(bh,1,!0);hd(bh,si,3,ui,kc);var Eb=new ri;H(Eb,3,window.location.href);for(var Jl=U("FEXP_EXPERIMENTS",[]),ch=0;ch<Jl.length;ch++){var Kl=Eb,oq=Jl[ch];Uc(Kl);$c(Kl,5,2,!1).push(oq)}var dh=Mi();if(!Ni()&&dh)for(var Ll=u(Object.keys(dh)),Fb=Ll.next();!Fb.done;Fb=Ll.next()){var Ml=Fb.value,eh=new qi;H(eh,1,Ml);H(eh,2,String(dh[Ml]));id(Eb,4,qi,eh)}var fh=L.params;if(fh){var Nl=u(Object.keys(fh));for(Fb=Nl.next();!Fb.done;Fb=Nl.next()){var Ol=Fb.value,gh=new qi;H(gh,
1,"client."+Ol);H(gh,2,String(fh[Ol]));id(Eb,4,qi,gh)}}var Pl=U("SERVER_NAME"),Ql=U("SERVER_VERSION");if(Pl&&Ql){var hh=new qi;H(hh,1,"server.name");H(hh,2,Pl);id(Eb,4,qi,hh);var ih=new qi;H(ih,1,"server.version");H(ih,2,Ql);id(Eb,4,qi,ih)}var se=new wi;J(se,ri,1,Eb);J(se,ti,2,bh);J(se,vi,3,Db);$g=se}var Rl=$g;if(!Rl)break a;var Sl=W("jspb_sparse_encoded_pivot")?new Ci([{}]):new Ci;hd(Sl,wi,163,Di,Rl);tp("clientError",Sl)}else{if(Bp())Zg=void 0;else{var ed={stackTrace:L.stack};L.fileName&&(ed.filename=
L.fileName);var Wa=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Wa.length&&(1!==Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||(ed.lineNumber=Number(Wa[0]),ed.columnNumber=Number(Wa[1])):ed.lineNumber=Number(Wa[0]));var jh={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===dd?jh.level="ERROR_LEVEL_ERROR":"WARNING"===dd&&(jh.level="ERROR_LEVEL_WARNNING");var pq={isObfuscated:!0,browserStackInfo:ed},
lc={pageUrl:window.location.href,kvPairs:[]};U("FEXP_EXPERIMENTS")&&(lc.experimentIds=U("FEXP_EXPERIMENTS"));var kh=Mi();if(!Ni()&&kh)for(var Tl=u(Object.keys(kh)),Gb=Tl.next();!Gb.done;Gb=Tl.next()){var Ul=Gb.value;lc.kvPairs.push({key:Ul,value:String(kh[Ul])})}var lh=L.params;if(lh){var Vl=u(Object.keys(lh));for(Gb=Vl.next();!Gb.done;Gb=Vl.next()){var Wl=Gb.value;lc.kvPairs.push({key:"client."+Wl,value:String(lh[Wl])})}}var Xl=U("SERVER_NAME"),Yl=U("SERVER_VERSION");Xl&&Yl&&(lc.kvPairs.push({key:"server.name",
value:Xl}),lc.kvPairs.push({key:"server.version",value:Yl}));Zg={errorMetadata:lc,stackTrace:pq,logMessage:jh}}var Zl=Zg;if(!Zl)break a;rp("clientError",Zl)}if("ERROR"===dd||W("errors_flush_gel_always_killswitch"))b:{if(W("web_fp_via_jspb")){var te=!0;te=void 0===te?!1:te;var $l=qp;qp=[];if($l)for(var am=u($l),mh=am.next();!mh.done;mh=am.next()){var mc=mh.value;te?np(mc.pc,mc.payload,$n,mc.options):rp(mc.pc,mc.payload,mc.options)}pp(!0);if(!W("web_fp_via_jspb_and_json"))break b}pp()}}W("suppress_error_204_logging")||
Cp(Cb,L);Ap(L)}}}}}else throw ic;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Zp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function $p(a){return 0===a.search("get")||0===a.search("is")}
;function aq(a,b){Sp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
v(aq,Sp);q=aq.prototype;q.Xb=function(){var a=Np(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Np(this.h,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Tb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":bq(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},cq(this,a.apiInterface),bq(this,a));break;default:Wp(this,b,a)}};
function bq(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Np(a.h,"title"))))}}
function cq(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Zp(c)?this[c]=function(){this.playerInfo={};
this.ka={};Yp(this,c,arguments);return this}:$p(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Yp(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Np(this.h,"host")+("/embed/"+Np(this.h,"videoId")),b=Number(Np(this.h,"width")),c=Number(Np(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Ub(a);d=Ub(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function qq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Kp(a,"videoid");b&&(b={videoId:b,width:Kp(a,"width"),height:Kp(a,"height")},new aq(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Gp[a]});
B("YT.scan",Jp);B("YT.subscribe",function(a,b,c){hg.subscribe(a,b,c);Ip[a]=!0;for(var d in Gp)Gp.hasOwnProperty(d)&&Vp(Gp[d],a)});
B("YT.unsubscribe",function(a,b,c){gg(a,b,c)});
B("YT.Player",aq);Sp.prototype.destroy=Sp.prototype.destroy;Sp.prototype.setSize=Sp.prototype.setSize;Sp.prototype.getIframe=Sp.prototype.getIframe;Sp.prototype.addEventListener=Sp.prototype.addEventListener;aq.prototype.getVideoEmbedCode=aq.prototype.getVideoEmbedCode;aq.prototype.getOptions=aq.prototype.getOptions;aq.prototype.getOption=aq.prototype.getOption;
Hp.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),qq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Jp();var rq=z.onYTReady;rq&&rq();var sq=z.onYouTubeIframeAPIReady;sq&&sq();var tq=z.onYouTubePlayerAPIReady;tq&&tq();}).call(this);
