module.exports = {
  //param A : integer
  //return an integer
  chordCnt: function (n) {
    let dp = new Array(A + 1).fill(0);
    const mod = Math.pow(10, 9) + 7;
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= A; i++) {
      let sum = 0;
      let k = 0;
      for (j = i - 1; j >= 0; j--) {
        sum = sum + dp[j] * dp[k];
        sum = sum % 1000000007;
        k++;
      }
      dp[i] = sum;
    }

    return dp[A];
  },
};
