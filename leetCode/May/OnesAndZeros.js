//https://leetcode.com/problems/ones-and-zeroes/
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    const [zeroCount, oneCount] = getNumberOfZeroAndOne(strs[i]);

    for (let i = m; i >= zeroCount; i--) {
      for (let j = n; j >= oneCount; j--) {
        dp[i][j] = Math.max(dp[i - zeroCount][j - oneCount] + 1, dp[i][j]);
      }
    }
  }

  function getNumberOfZeroAndOne(str) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '0') {
        zeroCount++;
      } else {
        oneCount++;
      }
    }

    return [zeroCount, oneCount];
  }

  return dp[m][n];
};
