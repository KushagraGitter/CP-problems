/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/?envType=daily-question&envId=2024-05-02
var findMaxK = function(nums) {
    nums.sort((a, b) => a- b)
    let left = 0, right = nums.length - 1
    
    while(right > left) {
        if(nums[right] + nums[left] === 0){
             return nums[right]
        }
        else if (nums[right] + nums[left] > 0) {
            right--;
        } else {
            left++
        }
    }
    
    return -1
};