//https://leetcode.com/problems/max-number-of-k-sum-pairs/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let l = 0;
  let r = nums.length - 1;

  nums.sort((a, b) => a - b);
  let count = 0;

  while (l < r) {
    if (nums[l] + nums[r] > k) {
      r--;
    } else if (nums[l] + nums[r] < k) {
      l++;
    } else {
      l++;
      r--;
      count++;
    }
  }

  return count;
};

//TC :- O(nlogn)
//SC : O(1)

// we can also do the same with extra space with less time using hashMap

//TC :- O(n)
//SC :- O(n);
