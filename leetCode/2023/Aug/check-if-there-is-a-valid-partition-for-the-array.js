/**
 * @param {number[]} nums
 * @return {boolean}
 */
//https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/description/
var validPartition = function(nums) {
    const n = nums.length;
    
    const dp = [false, false, false];
    dp[0] = true;  // An empty partition is always valid

    for (let i = 2; i <= n; i++) {
        let ans = false;

        if (nums[i - 1] === nums[i - 2]) {
            ans = ans || dp[(i - 2) % 3];
        }
        if (i >= 3 && nums[i - 1] === nums[i - 2] && nums[i - 1] === nums[i - 3]) {
            ans = ans || dp[(i - 3) % 3];
        }
        if (i >= 3 && nums[i - 1] === nums[i - 2] + 1 && nums[i - 2] + 1 === nums[i - 3] + 2) {
            ans = ans || dp[(i - 3) % 3];
        }

        dp[i % 3] = ans;
    }

    return dp[n % 3];    
};