module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let dp = new Array(A + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= A; i++) {
      dp[i] = ((((i - 1) * dp[i - 2]) % 10003) + dp[i - 1]) % 10003;
    }
    return dp[A];
  },
};
