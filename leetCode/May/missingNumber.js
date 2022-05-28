//https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let count = nums.length;
  let totalSumOfArray = 0;
  let totalSum = 0;

  for (let i = 0; i < count; i++) {
    totalSumOfArray = totalSumOfArray + nums[i];
  }

  for (let i = 0; i <= count; i++) {
    totalSum = totalSum + i;
  }

  return totalSum - totalSumOfArray;
};
