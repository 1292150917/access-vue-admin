(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var setFontSize = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  };

  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, setFontSize, false);
  doc.addEventListener('DOMContentLoaded', setFontSize, false);

  setFontSize()
})(document, window);
