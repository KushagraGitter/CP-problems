//https://leetcode.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {

    let a = Infinity, b = Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= a) {
            a = nums[i]
        } else if(nums[i] <= b) {
            b = nums[i]
        } else {
            return true;
        }
    }
    
    return false;

    

};