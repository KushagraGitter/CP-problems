function waysToHaveFun(A){

    let dp = new Array(A + 1);
    let mod = Math.pow(10, 9) + 7;
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(3).fill(0);
    } 
    dp[1][0] = dp[1][1] = dp[1][2] = 1;
    for(let i = 2; i <= A; i++){
        dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2])%mod;
        dp[i][1] = (dp[i-1][0] + dp[i-1][2])%mod;
        dp[i][2] = dp[i-1][0] + dp[i-1][1] - 2*dp[i-2][2];
        dp[i][2] += mod;
        dp[i][2] %= mod;
    }
    let val = (dp[A][0] + dp[A][1] + dp[A][2])%mod;
    return val;
	}