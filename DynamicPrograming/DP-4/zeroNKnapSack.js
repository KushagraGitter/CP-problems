module.exports = {
  //param A : integer
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    const m = B.length;

    let dp = new Array(m + 1);

    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(A + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= A; j++) {
        dp[i][j] = dp[i - 1][j];
        if (j >= C[i]) {
          dp[i][j] = Math.max(dp[i][j], dp[i][j - C[i]] + B[i]);
        }
      }
    }

    return dp[m][A];
  },
};
