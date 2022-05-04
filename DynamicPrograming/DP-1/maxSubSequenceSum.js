function maxSubSequenceSum(A) {
  dp = new Array(A.length).fill(0);

  dp[0] = A[0];
  dp[1] = Math.max(A[0], A[1]);

  for (let i = 2; i < A.length; i++) {
    dp[i] = Math.max(dp[i - 1], A[i] + dp[i - 2]);
  }

  return dp[A.length - 1];
}
