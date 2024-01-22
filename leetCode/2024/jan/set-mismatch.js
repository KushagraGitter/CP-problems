/**
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/set-mismatch/?envType=daily-question&envId=2024-01-22
var findErrorNums = function(nums) {
    const obj = {};
    
    let repeated;
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) repeated = [nums[i]];
        obj[nums[i]] = nums[i];
    };
    for (let i = 1; i <= nums.length; i++) {
        if (!obj[i]) return [repeated, i];
    };
};