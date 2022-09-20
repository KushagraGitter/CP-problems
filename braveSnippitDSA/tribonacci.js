var tribonacci = function(n) {
    let dp = new Array(n + 1).fill(0);
    
    dp[0] = 0;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
    
    };