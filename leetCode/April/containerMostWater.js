/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = Math.min(height[left], height[right]) * (right - left);
  //bf using nested loops TC : O(N^2) SC : O(1)
  // for(let i = 0; i < height.length; i++) {
  //     for(let j = height.length - 1; j > 0; j--) {
  //         max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
  //     }
  // }

  // we need to optimise this solution using two pointer TC : O(N) SC: O(1)

  while (left < right) {
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
  }

  return max;
};
