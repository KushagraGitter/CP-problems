function minPathSum(A) {
  let n = A.length;
  let m = A[0].length;

  let dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }
  let sum = 0;
  for (let j = 0; j < n; j++) {
    sum = sum + A[j][0];
    dp[j][0] = sum;
  }
  sum = 0;
  for (let k = 0; k < m; k++) {
    sum = sum + A[0][k];
    dp[0][k] = sum;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i][j - 1] + A[i][j], dp[i - 1][j] + A[i][j]);
    }
  }

  return dp[n - 1][m - 1];
}
