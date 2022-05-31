export function throttle(fn, wait) {
  let throttleStarted = false;
  let timer;
  return function () {
    const context = this,
      arg = arguments;
    if (!throttleStarted) {
      fn.apply(context, arg);
      throttleStarted = true;
      timer = setTimeout(() => (throttleStarted = false), wait);
    }
  };
}
