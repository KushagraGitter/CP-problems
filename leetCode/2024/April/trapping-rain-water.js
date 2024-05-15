/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
//https://leetcode.com/problems/trapping-rain-water/?envType=daily-question&envId=2024-04-12
var trap = function(height) {
    const n = height.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let maxLeft = -Infinity;
    let maxRight = -Infinity;
    let waterTrapped = 0;
    
    for(let i = 0; i < n; i++) {
        maxLeft = Math.max(maxLeft, height[i])
        maxRight = Math.max(maxRight, height[n - i - 1])
        
        left[i] = maxLeft;
        right[n - i - 1] = maxRight;
    }
    
    for(let i = 0; i < n; i++) {
        waterTrapped = waterTrapped + Math.min(left[i], right[i]) - height[i]
    }
    
    return waterTrapped
};