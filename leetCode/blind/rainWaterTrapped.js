//https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
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

//tc :- O(n)
//SC :- O(n)