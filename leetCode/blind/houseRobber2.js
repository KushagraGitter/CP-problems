//https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0]
    } else if(nums.length == 2) {
        return Math.max(nums[1], nums[0])
    }
    
    
    let firstMax = 0;
    let secondMax = 0;
    
    let temp1 = nums.slice(0, nums.length - 1)
    let temp2 = nums.slice(1, nums.length)
    
    let first = temp1[0]
    let second = Math.max(temp1[1], temp1[0])
    
    if(temp1.length === 2) {
        firstMax = second
    }
    
    for(let i = 2; i < temp1.length; i++) {
        firstMax = Math.max(second, first + temp1[i])
        first = second;
        second = firstMax
    }
    
    first = temp2[0];
    second = Math.max(temp2[0], temp2[1])
    
    if(temp1.length === 2) {
        secondMax = second
    }
    
     for(let i = 2; i < temp2.length; i++) {
        secondMax = Math.max(second, first + temp2[i])
        first = second;
        second = secondMax
     }
    
    
    return Math.max(firstMax, secondMax)
};