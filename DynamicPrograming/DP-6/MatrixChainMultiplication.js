module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    dp = new Array(A.length + 1);

    for (let i = 0; i < A.length + 1; i++) {
      dp[i] = new Array(A.length + 1).fill(-1);
    }

    function mcm(i, j) {
      if (i === j) {
        return 0;
      }

      if (dp[i][j] == -1) {
        let ans = Infinity;

        for (let k = i; k < j; k++) {
          let l = mcm(i, k);
          let r = mcm(k + 1, j);
          let c = A[i - 1] * A[k] * A[j];

          ans = Math.min(ans, l + r + c);
        }
        dp[i][j] = ans;
      }
      return dp[i][j];
    }
    mcm(1, A.length - 1);
    return dp[1][A.length - 1];
  },
};
