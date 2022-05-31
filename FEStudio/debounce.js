export function debounce(fn, wait) {
  let timer;
  return function () {
    const arg = arguments;
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, wait);
  };
}