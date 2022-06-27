//leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
https: var maxScore = function (cardPoints, k) {
  let dp = new Array(k + 1).fill(0);

  for (let i = cardPoints.length - 1; i >= cardPoints.length - k; i--) {
    dp[0] = dp[0] + cardPoints[i];
  }

  let max_points = dp[0];

  for (let i = 1; i < k + 1; i++) {
    dp[i] =
      dp[i - 1] + cardPoints[i - 1] - cardPoints[cardPoints.length - k + i - 1];
    max_points = Math.max(max_points, dp[i]);
  }
  return max_points;
};
