module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let n = A.length;
    // Array of unordered_map of size=2.
    let dp = [],
      H = 2000, // 4 rows
      W = 2000; // of 6 cells

    for (var y = 0; y < H; y++) {
      dp[y] = [];
      for (var x = 0; x < W; x++) {
        dp[y][x] = 0;
      }
    }
    // boolean variable used for
    // toggling between maps
    let flag = 1;

    // Calculate the sum of all
    // elements of the array
    let sum = 0;
    for (let i = 0; i < n; i++) sum += A[i];

    // Initializing first map(dp[0])
    // with INT_MAX because
    // for i=0, there are no elements
    // in the array to flip
    for (let i = -sum; i <= sum; i++) dp[0][i] = Number.MAX_VALUE;

    // Base Case
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = -sum; j <= sum; j++) {
        dp[flag][j] = Number.MAX_VALUE;
        if (j - A[i - 1] <= sum && j - A[i - 1] >= -sum)
          dp[flag][j] = dp[flag ^ 1][j - A[i - 1]];
        if (
          j + A[i - 1] <= sum &&
          j + A[i - 1] >= -sum &&
          dp[flag ^ 1][j + A[i - 1]] != Number.MAX_VALUE
        )
          dp[flag][j] = Math.min(dp[flag][j], dp[flag ^ 1][j + A[i - 1]] + 1);
      }

      // For toggling
      flag = flag ^ 1;
    }

    // Required sum is minimum non-negative
    // So, we iterate from i=0 to sum and find
    // the first i where dp[flag ^ 1][i] != MAX_VALUE
    for (let i = 0; i <= sum; i++) {
      if (dp[flag ^ 1][i] != Number.MAX_VALUE) return dp[flag ^ 1][i];
    }

    // In worst case we will flip max n-1 elements
    return n - 1;
  },
};
