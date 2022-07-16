//https://leetcode.com/problems/out-of-boundary-paths/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function (m, n, N, i, j) {
  let outCount = 0,
    dp = getEmptyBoard()
  dp[i][j] = 1
  for (let i = 0; i < N; i++) {
    dp = getNewDp(dp)
  }
  return outCount

  function getNewDp(old = []) {
    let dp = getEmptyBoard()
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let count = old[i][j]
        addCount(i, j + 1, count, dp)
        addCount(i, j - 1, count, dp)
        addCount(i + 1, j, count, dp)
        addCount(i - 1, j, count, dp)
      }
    }
    return dp
    function addCount(i, j, count, dp) {
      if (i < 0 || j < 0 || i === m || j === n) {
        outCount = mod(outCount + count)
        return
      }
      dp[i][j] = mod(dp[i][j] + count)
    }
    function mod(x) {
      return x % 1000000007
    }
  }

  function getEmptyBoard() {
    return new Array(m).fill(0).map(x => new Array(n).fill(0))
  }
}
