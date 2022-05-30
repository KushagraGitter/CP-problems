/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // Edge case
  if (dividend === -Math.pow(2, 31) && divisor === -1)
    return Math.pow(2, 31) - 1;
  if (divisor === 1) return dividend;
  if (dividend === divisor) return 1;

  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let res = 0;

  while (absDividend >= absDivisor) {
    const bitShift = getBitShift(absDividend, absDivisor);
    res += 1 << bitShift;
    absDividend -= absDivisor << bitShift;
  }

  if ((dividend ^ divisor) >> 31) return -res;
  return res;
};

function getBitShift(dividend, divisor) {
  let res = 0;

  while (dividend >= divisor) {
    res += 1;
    // Handle JavaScript bitwise operator 32-bit integer
    if (divisor >= Math.pow(2, 30)) {
      break;
    }
    divisor = divisor << 1;
  }
  return res - 1;
}
