/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let ans = 0;
    let mp = new Map();
    let l = 0;
    const n = nums.length;
    for (let r = 0; r < n; r++) {
        mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);
        if (mp.get(nums[r]) > k) {
            while (nums[l] !== nums[r]) {
                mp.set(nums[l], mp.get(nums[l]) - 1);
                l++;
            }
            mp.set(nums[l], mp.get(nums[l]) - 1);
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};