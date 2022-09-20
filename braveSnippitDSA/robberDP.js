var rob = function(nums) {
    const n = nums.length;
    let dp = new Array(n + 1).fill(0);
    
    dp[0] = 0;
    dp[1] = nums[0];
    
    for(let i = 2; i <= n; i++) {
        dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
    }
    
    return dp[n];
};