var Cof_sic = Cof_sic || {};
(function() {
  Cof_sic.webProperties = function() {
    var web = {};
    //web.deviceFingerPrint = encode_deviceprint();
    //web.browserFingerPrint = count_devicefingerprint();
    //alert(typeof collectLocalDFP);
    //alert(typeof collectDFP);
    if (typeof collectDFP === 'function') {
      web.deviceFingerPrint = collectDFP();
    } else {
      web.deviceFingerPrint = collectDFPAH();
    }

    return web;
  };
  //Centralized Javascript to read Domain dynamically
  Cof_sic.readDomain = function() {
    var root_domain = document.domain;
    var temp = root_domain.split('.').reverse();
    if (temp.length > 1) {
      root_domain = temp[1] + '.' + temp[0];
    } else {
      root_domain = '.capitalone.com';
    }
    return root_domain;
  };

  Cof_sic.readCookie = function(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };

  Cof_sic.setCookie = function(name, value) {
    var cookiedomain = Cof_sic.readDomain();
    document.cookie =
      name + '=' + value + '; path =/' + '; domain=' + cookiedomain;
  };

  Cof_sic.del_cookie = function(name) {
    document.cookie =
      name +
      '=; path =/' +
      '; domain=.capitalone.com; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  };

  Cof_sic.clearCookiesOnSignInPageLoad = function() {
    Cof_sic.del_cookie('C1_CCID');
    Cof_sic.clearCookiesOnPageLoad();
  };

  Cof_sic.clearCookiesOnPageLoad = function() {
    Cof_sic.del_cookie('SIC_AP');
    var uidCookie = Cof_sic.readCookie('C1_UID');
    if (uidCookie == null || uidCookie == undefined) {
      Cof_sic.del_cookie('C1_TGT');
      Cof_sic.del_cookie('C1_DEEPLINK');
    }
    Cof_sic.del_cookie('SIC_signin');
    //del_cookie('SIC_lock');
    Cof_sic.del_cookie('SIC_REDIRECT');
    Cof_sic.del_cookie('ssotgt');
    Cof_sic.del_cookie('ISSO_PAGE_IDT');
    Cof_sic.del_cookie('deviceType');
    Cof_sic.del_cookie('SIC_SI');
  };

  Cof_sic.createC1CCIDCookie = function(clientName) {
    var d = new Date().getTime();
    // prettier-ignore
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
        c
      ) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });
    if (clientName == null || clientName == undefined) {
      clientName = 'Client';
    }
    uuid = 'SIC-' + clientName + '-' + uuid;
    Cof_sic.setCookie('C1_CCID', uuid);
  };
})();

webProperties_on_sic = function() {
  return Cof_sic.webProperties();
};

clearCookiesOnSignInPageLoad_on_sic = function() {
  Cof_sic.clearCookiesOnSignInPageLoad();
};

createC1CCIDCookie_on_sic = function(clientName) {
  Cof_sic.createC1CCIDCookie(clientName);
};
