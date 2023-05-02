/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/sign-of-the-product-of-an-array/description/
var arraySign = function(nums) {
    let product = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) return 0;
        product = product * nums[i];
    }

    if(product >= 1) {
        return 1;
    } else if(product === 0) {
        return 0;
    } else {
        return -1;
    }
};