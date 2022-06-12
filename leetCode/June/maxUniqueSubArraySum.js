/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
  let map = new Map();
  let start = 0, end = 0, sum = 0, maxSum = -1;
  
  while(end < nums.length) {
      
      if(!(map.get(nums[end]) > -1)) {
          sum = sum + nums[end];
          map.set(nums[end], 1);
          end++;
      } else {
          sum = sum - nums[start];
          map.delete(nums[start]);
          start++;
      }
       maxSum = Math.max(sum, maxSum);
  }

return maxSum;
  
};