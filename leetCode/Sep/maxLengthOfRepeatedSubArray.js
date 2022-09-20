//https://leetcode.com/problems/maximum-length-of-repeated-subarray/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let ans = 0;
  let dp = new Array(nums1.length + 1)
    .fill()
    .map((a) => new Array(nums2.length + 1).fill(0));

  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;

        if (ans < dp[i][j]) ans = dp[i][j];
      }
    }
  }
  return ans;
};
