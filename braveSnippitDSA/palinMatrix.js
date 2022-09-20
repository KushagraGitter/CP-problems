function palinMat(s) {
    let dp = new Array(s.length);

    for(let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(false);
    }

   for (let i = 0; i < s.length; ++i) {
    for (let j = i; j >= 0; --j) {
      dp[j][i] = s[j] === s[i] && ((i - j < 3) || (dp[j + 1][i - 1]));
    }
  }
    
    // let start = 0;
    // let end = s.length - 1;

    // while(start <= end) {
    //     dp[start][end] = s[start] === s[end] && dp[start + 1][end - 1];
    //     start++;
    //     end--;
    // }

    return dp;
}