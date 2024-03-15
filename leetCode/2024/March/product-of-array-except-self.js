/**
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/product-of-array-except-self/submissions/1204572263/?envType=daily-question&envId=2024-03-15
var productExceptSelf = function(nums) {
    const n = nums.length;
    
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    
    return answer;
};