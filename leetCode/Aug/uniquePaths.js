//https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (n, m) {
  let dp = new Array(n)

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0)
  }

  for (let j = 0; j < n; j++) {
    dp[j][0] = 1
  }

  for (let k = 0; k < m; k++) {
    dp[0][k] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }

  return dp[n - 1][m - 1]
}
