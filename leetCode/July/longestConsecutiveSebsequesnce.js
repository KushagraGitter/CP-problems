//https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let longStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let currentNum = nums[i];
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum = currentNum + 1;
        currentStreak = currentStreak + 1;
      }

      longStreak = Math.max(longStreak, currentStreak);
    }
  }

  return longStreak;
};
