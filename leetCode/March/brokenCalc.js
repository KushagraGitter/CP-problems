var brokenCalc = function (startValue, target) {
  let ans = 0;

  while (startValue !== target) {
    if (target % 2 === 0 && target > startValue) {
      target = target / 2;
      ans++;
    } else {
      target++;
      ans++;
    }
  }

  return ans;
};
