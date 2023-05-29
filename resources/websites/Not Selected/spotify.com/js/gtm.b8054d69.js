/* This is a browser-only file */
/* eslint-disable */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

(function (w) {
  var config = JSON.parse(document.getElementById('config').innerHTML);
  var loggedIn = !Boolean(config.isAnonymous);

  w.dataLayer = w.dataLayer || [];

  w.dataLayer.push({
    event: 'webplayer_datalayer_init',
    type: config.appName || 'default_app_name',
    loggedIn: loggedIn,
    language: config.locale,
    market: config.market, // Based on Geo-IP
    userCountry: config.userCountry, // Based on user account country. Null if logged out
    isPremium: loggedIn ? config.isPremium : null, // Null if logged out
    correlationId: config.correlationId,
  });
  /**
   * This method name should be changed to be something more idiomatic to be used
   * with GTM which is what this is meant for. Originally, this was called gtag to
   * be used with the gtag library.
   */

  w.gtag = function (payloadType) {
    for (
      var _len = arguments.length,
        rest = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      rest[_key - 1] = arguments[_key];
    }

    if (payloadType === 'event') {
      var eventAction = rest[0],
        eventPayload = rest[1];
      w.dataLayer.push({
        event: eventAction === 'gtm.upgradeClick' ? eventAction : 'gtm.event',
        detail: _objectSpread(
          {
            event_action: eventAction,
          },
          eventPayload,
        ),
      });
    } else if (payloadType === 'pageview') {
      var locationObj = rest[0];
      w.dataLayer.push({
        event: 'gtm.pageview',
        location: locationObj,
      });
    } else {
      w.dataLayer.push({
        type: payloadType,
        detail: rest[0],
      });
    }
  };
})(window);
