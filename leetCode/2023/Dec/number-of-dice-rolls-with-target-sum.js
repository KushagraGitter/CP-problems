/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
//https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/?envType=daily-question&envId=2023-12-26
var numRollsToTarget = function(d, f, target) {
    const mod = Math.pow(10, 9) + 7
    let dp = new Array(target + 1).fill(0);
        dp[0] = 1;
        for (let i = 1; i <= d; i++) {
            for (let j = target; j >= 0; j--) {
                dp[j] = 0;
                for (let k = 1; k <= f; k++) {
                    if (j >= k) {
                        dp[j] = (dp[j] + dp[j - k]) % mod;
                    } else {
                        break;
                    }
                }
            }
        }
        return dp[target];
};