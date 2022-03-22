Function.prototype.mycall = function (thisArg, ...args) {
  // your code here
  const fnName =
    [...Array(10)].map((_) => ((Math.random() * 36) | 0).toString(36)).join`` ||
    {};
  thisArg =
    typeof thisArg === 'Function' || typeof thisArg === 'Object'
      ? thisArg
      : window;
  thisArg[fnName] = this;
  const result = thisArg[fnName](...args);
  delete thisArg[fnName];
  return thisArg;
};
