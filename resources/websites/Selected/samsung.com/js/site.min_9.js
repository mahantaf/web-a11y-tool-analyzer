(function(){function b(){c=a(".visit-your-location");g=a(".visit-your-location__continent");l=a(".visit-your-location__country-wrap");m=a(".visit-your-location__layer-popup-wrap");p=a(".visit-your-location__layer-popup-dimmed-area");q=a(".visit-your-location__layer-popup-close");c&&n()}function n(){g.on("click",function(b){if("mobile"===f()){var c=a(b.currentTarget),d=c.parent().index();b=l.eq(d);e===d?(c.removeClass("visit-your-location__continent--open"),b.target[0].style.height="",e=-1):(0<=e&&
(g.eq(e).removeClass("visit-your-location__continent--open"),l.eq(e).target[0].style.height=""),e=d,c.addClass("visit-your-location__continent--open"),d=b.children(".visit-your-location__country"),b.target[0].style.height=d.target.length*d.target[0].offsetHeight+"px",setTimeout(function(){h(c.target[0].offsetTop)},300))}});p.on("click",function(){k()});q.on("click",function(){k()});a(window).on("resize",function(){"desktop"===f()&&g.removeClass("visit-your-location__continent--open")})}function k(){m.addClass("visit-your-location__layer-popup-wrap--hide")}
var a=window.sg.common.$q,f=window.sg.common.utils.getCurrentDevice,h=window.sg.common.utils.scrollTo,c={},g={},l={},m={},p={},q={},e=-1;window.sg.components.visitYourLocation={init:b,showLayerPopup:function(){m.removeClass("visit-your-location__layer-popup-wrap--hide")}};a.ready(function(){return b()})})();
(function(b){function n(){a.on("click","a",function(a){a.preventDefault();a=b(this).attr("href");f.find(".visit-your-location__layer-popup-btn").attr("href",a);h=b(this).parent().attr("site_cd");window.sg.components.visitYourLocation.showLayerPopup()});f.find(".visit-your-location__layer-popup-btn").each(function(a){b(this).on("click",function(c){c.preventDefault();0===a&&k.setCookie("site_cd",h,3);window.location.href=b(this).attr("href")})})}var k=window.cookies||{},a=b(".visit-your-location"),
f=a.find(".visit-your-location__layer-popup-wrap"),h;b(function(){0<a.length&&n()})})(window.jQuery);