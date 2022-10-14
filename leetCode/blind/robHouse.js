/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length == 1) {
        return nums[0]
    }
    if(nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    let first = nums[0]
    let second = Math.max(nums[0], nums[1])
    let curr = 0
    for(let i = 2; i < nums.length; i++) {
        curr = Math.max(second, first + nums[i])
        first = second
        second = curr;
        
    }
    
    return curr
};