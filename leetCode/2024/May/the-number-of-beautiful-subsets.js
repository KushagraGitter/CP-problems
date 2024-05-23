/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//https://leetcode.com/problems/the-number-of-beautiful-subsets/?envType=daily-question&envId=2024-05-23
var beautifulSubsets = function(nums, k) {
    const n = nums.length;
    let result = 0;

    const backtrack = (start, subset) => {
        if (subset.length > 0) {
            result++;
        }
        for (let i = start; i < n; i++) {
            let valid = true;
            for (let num of subset) {
                if (Math.abs(num - nums[i]) === k) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
};