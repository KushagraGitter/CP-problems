//https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let end = -1;
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max > nums[i]) {
      end = i;
    } else {
      max = nums[i];
    }
  }

  let start = 0;
  let min = nums[nums.length - 1];

  for (let j = nums.length - 2; j >= 0; j--) {
    if (min < nums[j]) {
      start = j;
    } else {
      min = nums[j];
    }
  }

  return end - start + 1;
};
