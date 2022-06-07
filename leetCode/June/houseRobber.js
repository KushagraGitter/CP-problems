//https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  let dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }

  return dp[n];
};
// //[1,2,3,1]
// maxAmount(1 + i - 2, A[i + 1] + i - 3 )

// 1,2,3

// dp[0] = A[0];
// dp[1] = Math.max(A[0], A[1]);

// dp[2] = Math.max(A[0] + dp[2], A[1])
