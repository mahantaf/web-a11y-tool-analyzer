function _truste_eumap(){truste=self.truste||{};truste.eu||(truste.eu={});truste.util||(truste.util={});
truste.util.error=function(o,k,n){n=n||{};var m=k&&k.toString()||"",e=n.caller||"";if(k&&k.stack){m+="\n"+k.stack.match(/(@|at)[^\n\r\t]*/)[0]+"\n"+k.stack.match(/(@|at)[^\n\r\t]*$/)[0]
}truste.util.trace(o,m,n);if(truste.util.debug||!k&&!o){return}var d={apigwlambdaUrl:"https://api-js-log.trustarc.com/error",enableJsLog:false};
if(d.enableJsLog){delete n.caller;delete n.mod;delete n.domain;delete n.authority;n.msg=o;var l=new (self.XMLHttpRequest||self.XDomainRequest||self.ActiveXObject)("MSXML2.XMLHTTP.3.0");
l.open("POST",d.apigwlambdaUrl,true);l.setRequestHeader&&l.setRequestHeader("Content-type","application/json");
l.send(truste.util.getJSON({info:truste.util.getJSON(n)||"",error:m,caller:e}))}};truste.util.trace=function(){if(self.console&&console.log&&(this.debug||this.debug!==false&&(self.location.hostname.indexOf(".")<0||self.location.hostname.indexOf(".truste-svc.net")>0))){if(console.log.apply){console.log.apply(console,arguments)
}else{var d=Function.prototype.bind.call(console.log,console);d.apply(console,arguments)}return true}return false
};truste.util.getJSON=function(e){if(self.JSON&&!(self.JSON.org||self.JSON.license||self.JSON.copyright)){return self.JSON.stringify(e)
}if(e instanceof Array){var l="[";if(e.length){l+=truste.util.getJSON(e[0]);for(var k=1;k<e.length;k++){l+=","+truste.util.getJSON(e[k])
}}return l+"]"}else{if(typeof e=="string"){return'"'+e+'"'}else{if((e) instanceof Object){var d=false,l="{";
for(var m in e){l+=(d?",":"")+'"'+m+'":'+truste.util.getJSON(e[m]);d=true}return l+"}"}else{return e===undefined?undefined:e+""
}}}};(function(){var d=self.onerror;self.onerror=function e(p,n,k,l,o){var m=[].slice.call(arguments);
var q=p+(n?"; "+n:"")+(k?" "+k:"")+(l?":"+l:"");if((q+""+(o&&o.stack)).match(/truste|trustarc|notice/)){truste.util.error("Got Window Error:",o&&o.stack?o:q,{product:"cm",tag:n})
}d&&d.apply(self,m)}})();var j=truste.eu.bindMap={version:"v1.7-164",domain:"qualtrics.com",width:parseInt("840"),height:parseInt("270"),baseName:"te-notice-clr1-e4114464-68db-44b1-9e2a-8689397c4732",showOverlay:"{ShowLink}",hideOverlay:"{HideLink}",anchName:"te-notice-clr1-e4114464-68db-44b1-9e2a-8689397c4732-anch",intDivName:"te-notice-clr1-e4114464-68db-44b1-9e2a-8689397c4732-itl",iconSpanId:"te-notice-clr1-e4114464-68db-44b1-9e2a-8689397c4732-icon",containerId:(!"teconsent"||/^_LB.*LB_$/.test("teconsent"))?"teconsent":"teconsent",messageBaseUrl:"http://consent.trustarc.com/noticemsg?",originBaseUrl:"https://consent.trustarc.com/",daxSignature:"",privacyUrl:"",prefmgrUrl:"http://consent-pref.trustarc.com/?type=qualtrics_v2",text:"true",icon:"Cookie Preferences",locale:"en",language:"en",country:"us",state:"",categoryCount:parseInt("3",10)||3,noticeJsURL:((parseInt("1")?"https://consent.trustarc.com/":"http://consent.trustarc.com/"))+"asset/notice.js/v/v1.7-164",assetServerURL:(parseInt("1")?"https://consent.trustarc.com/":"http://consent.trustarc.com/")+"asset/",consensuUrl:"https://consent.trustarc.com/",cdnURL:"https://consent.trustarc.com/".replace(/^(http:)?\/\//,"https://"),iconBaseUrl:"http://consent.trustarc.com/",behavior:"implied",behaviorManager:"us",provisionedFeatures:"",cookiePreferenceIcon:"trustarc_cookiepreferences.png",cookieExpiry:parseInt("395",10)||395,closeButtonUrl:"//consent.trustarc.com/get?name=noticeclosebtn.png",apiDefaults:'{"reportlevel":16777215}',cmTimeout:parseInt("6000",10),popTime:new Date("".replace(" +0000","Z").replace(" ","T")).getTime()||null,popupMsg:"",bannerMsgURL:"http://consent.trustarc.com/bannermsg?",IRMIntegrationURL:"",irmWidth:parseInt(""),irmHeight:parseInt(""),irmContainerId:(!"_LBirmcLB_"||/^_LB.*LB_$/.test("_LBirmcLB_"))?"teconsent":"_LBirmcLB_",irmText:"",lspa:"",ccpaText:"",containerRole:"",iconRole:"",atpIds:"",dntOptedIn:"",gpcOptedIn:"",feat:{iabGdprApplies:false,consentResolution:false,dropBehaviorCookie:true,crossDomain:false,uidEnabled:false,replaceDelimiter:false,optoutClose:false,enableIRM:false,enableCM:true,enableBanner:false,enableCCPA:false,enableIrmAutoOptOut:false,ccpaApplies:false,unprovisionedDropBehavior:false,unprovisionedIab:false,unprovisionedCCPA:false,dnt:false&&(navigator.doNotTrack=="1"||window.doNotTrack=="1"),dntShowUI:false,gpc:false&&(navigator.globalPrivacyControl||window.globalPrivacyControl),iabBannerApplies:false,enableTwoStepVerification:false,enableContainerRole:true,enableContainerLabel:true,enableIconRole:true,enableIconLabel:true,enableReturnFocus:false,enableShopify:0,enableReturnFocus:false,enableTcfOptout:false,enableTransparentAlt:true,enableACString:false,gcm:{ads:undefined,analytics:undefined},autoblock:false,gtm:1},autoDisplayCloseButton:false,localization:{modalTitle:"Your choices regarding the use of cookies on this site"}};
if(/layout=gdpr/.test(j.prefmgrUrl)){j.isGdprLayout=true}if(/layout=iab/.test(j.prefmgrUrl)){j.isIabLayout=true
}if(self.location.protocol!="http:"){for(var f in j){if(j[f]&&j[f].replace){j[f]=j[f].replace(/^(http:)?\/\//,"https://")
}}}truste.eu.noticeLP=truste.eu.noticeLP||{};truste.eu.noticeLP.pcookie=true;truste.util.samesite=function(e){return k(e);
function k(v){return !d(v)}function d(v){return u(v)||q(v)}function u(v){return m(12,v)||(l(10,14,v)&&(p(v)||t(v)))
}function q(v){if(s(v)){return !o(12,13,2,v)}return n(v)&&r(51,v)&&!r(67,v)}function m(x,w){var y=new RegExp("[(]iP.+; CPU .*OS (\\d+)[_\\d]*.*[)] AppleWebKit[/]","ig");
var z=y.exec(w);if(z&&z.length===2){var v=+z[1];return v===x}return false}function l(y,A,w){var z=new RegExp("[(]Macintosh;.*Mac OS X (\\d+)_(\\d+)[_\\d]*.*[)] AppleWebKit[/]","ig");
var B=z.exec(w);if(B&&B.length===3){var v=+B[1];var x=+B[2];return(v===y)&&(x===A)}return false}function p(v){var w=new RegExp("Version[/].* Safari[/]","ig");
var x=w.exec(v);if(x&&x.length){return !n(v)}return false}function t(v){var w=new RegExp("^Mozilla[/][.\\d]+ [(]Macintosh;.*Mac OS X [_\\d]+[)] AppleWebKit[/][.\\d]+ [(]KHTML, like Gecko[)]$","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function n(v){var w=new RegExp("Chrom(e|ium)","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function r(x,w){var y=new RegExp("Chrom[^ /]+[/](\\d+)[.\\d]* ","ig");
var z=y.exec(w);if(z&&z.length===2){var v=+z[1];return v>=x}return false}function s(v){var w=new RegExp("UCBrowser[/]","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function o(A,z,D,w){var v=new RegExp("UCBrowser[/](\\d+)[.](\\d+)[.](\\d+)[.\\d]* ","ig");
var y=v.exec(w);if(y&&y.length===4){var C=+y[1];var B=+y[2];var x=+y[3];if(C!=A){return C>A}if(B!=z){return B>z
}return x>=D}return false}};truste.util.createCookie=function(D,v,k,n){if(truste.util.cookie){v=truste.util.cookie.convert(v)
}var d=truste.eu.bindMap||{},A="; expires=";if(!k){var x=new Date();x.setDate(x.getDate()+d.cookieExpiry);
A+=x.toGMTString()}else{if(k=="0"){A=""}else{A+=k}}if(n&&truste.util.createCookieStorage){truste.util.createCookieStorage(D,v,x)
}var y=d.domain,q=self.location.hostname;var l=!!q.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/)||q=="localhost";
var r=l?q:q.replace(/^www\./,"");var m=((self.location.protocol=="https:")?" Secure;":"");var C=m?"None;":"Lax;";
var u=(truste.util.samesite&&!truste.util.samesite(navigator.userAgent)?"":" SameSite="+C)+m;if(typeof truste.eu.noticeLP.pcookie!="undefined"){document.cookie=D+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain="+(l?"":".")+r.replace(/^\./,"")+";"+u;
if(!d.topLevelDomain){var w=0,B=r,t=B.split("."),z=[],o="_gd"+(new Date()).getTime();while(w<(t.length-1)&&document.cookie.indexOf(o+"="+o)==-1){B=t.slice(-1-(++w)).join(".");
document.cookie=o+"="+o+";domain="+B+";";z.push(o)}d.topLevelDomain=B;for(var e=0;e<z.length;e++){document.cookie=z[e]+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+B+";"
}document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+B+";"+u}r=d.topLevelDomain}self.document.cookie=D+"="+v+A+"; path=/;domain="+(l?"":".")+r.replace(/^\./,"")+";"+u
};truste.util.getRandomUUID=function(){var d=window.crypto||window.msCrypto;return([10000000]+-1000+-4000+-8000+-100000000000).replace(/[018]/g,function(e){return(e^d.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)
})};truste.util.getScriptElement=function(l,m,k){if(typeof l=="string"){l=new RegExp(l)}if(typeof k=="string"){k=new RegExp(k)
}if(!(l instanceof RegExp)){return null}if(typeof k!="undefined"&&!(k instanceof RegExp)){return null
}var o=self.document.getElementsByTagName("script");var n;for(var d,e=o.length;e-->0&&(d=o[e]);){n=(k)?k.test(d.src):true;
if((m||!d.id)&&l.test(d.src)&&n){return d}}return null};truste.util.getUniqueID=function(){return"truste_"+Math.random()
};truste.util.initParameterMap=function(l,m){if(!(m instanceof Object)){m={}}if(!l||typeof l.src!="string"){m._query=m._url=""
}else{var e,d=m._url=l.src;d=(m._query=d.replace(/^[^;?#]*[;?#]/,"")).replace(/[#;?&]+/g,"&");if(d){for(d=d.split("&"),e=d.length;
e-->0;){var k=d[e].split("="),n=k.shift();if(!m[n]){if(k.length){m[n]=decodeURIComponent(k.join("="))
}else{m[n]=""}}}}l.id=m.sid=m.sid||truste.util.getUniqueID()}return m};truste.eu.COOKIE_GDPR_PREF_NAME="notice_gdpr_prefs";
truste.eu.COOKIE_SESSION="TAsessionID";truste.eu.SCRIPT_REGX=truste.eu.SCRIPT_REGX||/\.(truste|trustarc)\b.*\bnotice(\.0)?(\.exp)?(\.js)?\b.*\bdomain=/;
truste.eu.JS_REGX=truste.eu.JS_REGX||(truste.eu.bindMap&&truste.eu.bindMap.domain?"domain="+truste.eu.bindMap.domain:undefined);
truste.eu.jsNode1||(truste.eu.jsNode1=truste.util.getScriptElement(truste.eu.SCRIPT_REGX,true,truste.eu.JS_REGX));
truste.eu.noticeLP=truste.util.initParameterMap(truste.eu.jsNode1,truste.eu.noticeLP||{});if(truste.eu.noticeLP.cookieName){truste.eu.COOKIE_GDPR_PREF_NAME=truste.eu.noticeLP.cookieName+"_gdpr";
truste.eu.COOKIE_SESSION=truste.eu.noticeLP.cookieName+"_session"}truste.util.readCookieSimple=function(d){var e=new RegExp("\\s*"+d.replace(".","\\.")+"\\s*=\\s*([^;]*)").exec(self.document.cookie);
if(e&&e.length>1){return e[1]}return null};var g=truste.util.readCookieSimple(truste.eu.COOKIE_SESSION);
if(g==null){userType=truste.util.readCookieSimple(truste.eu.COOKIE_GDPR_PREF_NAME)?"EXISTING":"NEW";g=truste.util.getRandomUUID()+"|"+userType;
var b=new Date();b.setTime(b.getTime()+30*60000);truste.util.createCookie(truste.eu.COOKIE_SESSION,g,b.toGMTString(),false)
}var a=g.split(/[|,]/);truste.eu.session=a[0];truste.eu.userType=a[1];(new Image(1,1)).src=("https://consent.trustarc.com/log".replace("http:","https:"))+"?domain=qualtrics.com&country=us&state=&behavior=implied&session="+truste.eu.session+"&userType="+truste.eu.userType+"&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
(function(d){var p=function(r){if(d.feat.iab){return}var t=self.document,s=t.createElement("script");
s.setAttribute("async","async");s.setAttribute("type","text/javascript");s.setAttribute("crossorigin","");
s.setAttribute("importance","high");s.src=r;(t.getElementById(d.containerId)||t.getElementsByTagName("body")[0]||t.getElementsByTagName("head")[0]).appendChild(s);
d.feat.iab=true};var o=function(w,v,r,u){if(w()){v();return}var s,t=function(){if(w()){s=clearInterval(s);
v()}};s=setInterval(t,r);t();setTimeout(function(){clearInterval(s)},u)};if(d.isIabLayout){var k=false;
var m=document.head.getElementsByTagName("script");for(var l=0;l<m.length;l++){var n=m[l];if(n.id==="trustarc-tcfapi"){k=true;
d.feat.iab=true}}if(!k){o(function q(){return typeof __tcfapi!=="undefined"},function e(){p(d.consensuUrl+"asset/tcfapi.js/v/2.1")
},10,30000)}}})(truste.eu.bindMap);if(j.feat.dropBehaviorCookie){var c=j.feat.replaceDelimiter?"|":",";
truste.util.createCookie("notice_behavior",j.behavior+c+j.behaviorManager,"0")}if(!truste.cma){var i=self.document,h=i.createElement("script");
h.setAttribute("async","async");h.setAttribute("type","text/javascript");h.setAttribute("crossorigin","");
h.setAttribute("importance","high");h.src=j.noticeJsURL;(i.getElementById(j.containerId)||i.getElementsByTagName("body")[0]||i.getElementsByTagName("head")[0]).appendChild(h)
}(function(e){if(e.feat.crossDomain){var d=function(){if(!window.frames.trustarc_notice){if(document.body){var k=document.body,l=document.createElement("iframe");
l.style.display="none";l.name="trustarc_notice";l.id="trustarcNoticeFrame";l.title="Trustarc Cross-Domain Consent Frame";
l.src=e.cdnURL+"get?name=crossdomain.html&domain="+e.domain;k.appendChild(l)}else{setTimeout(d,5)}}};
d()}})(truste.eu.bindMap);j.styles={};j.externalcss=typeof $temp_externalcss!="undefined"&&$temp_externalcss;
j.styles.closebtnlink=typeof $temp_closebtnlink_style!="undefined"&&$temp_closebtnlink_style;j.styles.closebtn=typeof $temp_closebtn_style!="undefined"&&$temp_closebtn_style;
j.styles.box_overlay=typeof $temp_box_overlay!="undefined"&&$temp_box_overlay;j.styles.box_overlay_border=typeof $temp_box_overlay_border!="undefined"&&$temp_box_overlay_border;
j.styles.overlay=typeof $temp_overlay!="undefined"&&$temp_overlay;j.styles.inner_iframe=typeof $temp_inner_iframe!="undefined"&&$temp_inner_iframe;
j.styles.outerdiv=typeof $temp_style_outerdiv!="undefined"&&$temp_style_outerdiv;j.outerdiv=typeof $temp_outerdiv!="undefined"
}self._truste&&(self._truste.eumap=_truste_eumap)||_truste_eumap();