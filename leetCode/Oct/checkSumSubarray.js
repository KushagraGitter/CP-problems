//https://leetcode.com/problems/continuous-subarray-sum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 0);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if (!map.has(sum % k)) {
      map.set(sum % k, i + 1);
    } else if (map.get(sum % k) < i) {
      return true;
    }
  }
  return false;
};
