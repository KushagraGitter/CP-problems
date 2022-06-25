//https://leetcode.com/problems/non-decreasing-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length && count <= 1; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;

      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }

  return count <= 1;
};
