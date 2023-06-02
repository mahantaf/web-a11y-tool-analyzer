/* eslint-disable */
(function (w) {
  const config = JSON.parse(document.getElementById('config').innerHTML);
  if (!config.retargetingPixels) return;

  Object.entries(config.retargetingPixels).forEach(function (pixel) {
    var pixelPlatform = pixel[0];
    var pixelId = pixel[1];

    switch (pixelPlatform) {
      case 'twitter':
        w.__TWITTER_PIXEL_ID__ = pixelId;
        break;

      case 'pinterest':
        w.__PINTEREST_PIXEL_ID__ = pixelId;
        break;

      case 'snapchat':
        w.__SNAPCHAT_PIXEL_ID__ = pixelId;
        break;

      default:
        break;
    }
  });
})(window);
