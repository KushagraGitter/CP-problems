/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/missing-number/?envType=daily-question&envId=2024-02-20
var missingNumber = function(nums) {
    let newSet = new Set(nums);

    for(let i = 0; i <= nums.length; i++) {
        if(!newSet.has(i)) {
            return i;
        }
    }
};