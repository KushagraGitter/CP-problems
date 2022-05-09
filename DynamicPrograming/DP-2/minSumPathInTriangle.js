module.exports = {
  //param A : array of array of integers
  //return an integer
  minimumTotal: function (A) {
    let n = A.length;

    // Initializating of dp matrix
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(-1);
    }
    // Util function to find minimum sum for a path
    function helper(A, i, j, dp) {
      // Base Case
      if (i == A.length) {
        return 0;
      }

      // To avoid solving overlapping subproblem
      if (dp[i][j] != -1) {
        return dp[i][j];
      }

      // Add current to the minimum  of the next paths
      // and store it in dp matrix
      return (dp[i][j] =
        A[i][j] +
        Math.min(helper(A, i + 1, j, dp), helper(A, i + 1, j + 1, dp)));
    }

    return helper(A, 0, 0, dp);
  },
};
