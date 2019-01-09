// Taken from https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
export const supportsPassiveEventListeners = (function() {
  let supportsPassiveOption = false;
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassiveOption = true;
      }
    });
    window.addEventListener('test', null, opts);
    // eslint-disable-next-line
  } catch (e) {};
  return supportsPassiveOption;
})();
