//https://leetcode.com/problems/longest-increasing-subsequence/?envType=daily-question&envId=2024-01-05
var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};