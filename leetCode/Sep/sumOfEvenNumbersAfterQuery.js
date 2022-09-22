//https://leetcode.com/problems/sum-of-even-numbers-after-queries/submissions/
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
  let sum = 0;
  
  for(let num of nums) {
      if(num % 2 === 0) sum += num;
  }
  
  let answer = new Array(queries.length);
  
  for(let i = 0; i < nums.length; i++) {
      let index = queries[i][1]; 
      let value = queries[i][0];
      
      if(nums[index] % 2 === 0) sum -= nums[index];
      nums[index] += value;
      if(nums[index] % 2 === 0) sum += nums[index];
      answer[i] = sum;
      
  }
  return answer;
};