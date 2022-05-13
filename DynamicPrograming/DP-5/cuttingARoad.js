module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const n = A.length;

    let dp = new Array(n + 1);

    A.unshift(0);

    for (let i = 0; i <= n; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j >= i) {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - i] + A[i]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
    return dp[n][n];
  },
};
