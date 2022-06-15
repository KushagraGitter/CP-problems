module.exports = {
  //param A : string
  //return an integer
  anytwo: function (A) {
    let B = A;
    let n = A.length;
    let m = B.length;

    let dp = new Array(n);

    for (let i = 0; i < n; i++) {
      dp[i] = new Array(m).fill(-1);
    }

    // reccursive code for dp

    function lcs(i, j) {
      if (i === -1 || j === -1) {
        return 0;
      }

      if (dp[i][j] === -1) {
        if (A[i] === B[j] && i !== j) {
          dp[i][j] = 1 + lcs(i - 1, j - 1);
        } else {
          dp[i][j] = Math.max(lcs(i, j - 1), lcs(i - 1, j));
        }
      }
      return dp[i][j];
    }

    const ans = lcs(n - 1, m - 1);

    return ans >= 2 ? 1 : 0;
  },
};
