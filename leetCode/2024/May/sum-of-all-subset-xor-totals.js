/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/sum-of-all-subset-xor-totals/?envType=daily-question&envId=2024-05-20
var subsetXORSum = function (nums) {
    let sumTotal = 0;

    for (let num of nums) {
        sumTotal |= num;
    }
    return sumTotal << (nums.length - 1);
};