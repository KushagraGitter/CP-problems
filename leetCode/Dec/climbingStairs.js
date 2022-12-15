//https://leetcode.com/problems/climbing-stairs/description/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n).fill(0)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    for(let i = 3; i <= n; i++) {
         dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
   
};
