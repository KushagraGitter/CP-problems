/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/jump-game-ii/description/
var jump = function(nums) {
    let l = 0, r = 0;
    let res = 0;
   
    while(r < nums.length - 1) {
        let farthest = 0;
        for(let i = l; i < r + 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        
        l = r + 1;
        r = farthest;
        res++;
    }
    
    return res;
};