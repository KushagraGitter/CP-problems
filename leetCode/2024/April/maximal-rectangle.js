/**
 * @param {character[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let ans = 0;
    const stack = [];
    
    for (let i = 0; i <= heights.length; ++i) {
        while (stack.length && (i === heights.length || heights[stack[stack.length - 1]] > heights[i])) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            ans = Math.max(ans, h * w);
        }
        stack.push(i);
    }
    
    return ans;
};

var maximalRectangle = function(matrix) {
    if (matrix.length === 0)
        return 0;
    
    let ans = 0;
    const hist = new Array(matrix[0].length).fill(0);
    
    for (const row of matrix) {
        for (let i = 0; i < row.length; ++i)
            hist[i] = row[i] === '0' ? 0 : hist[i] + 1;
        ans = Math.max(ans, largestRectangleArea(hist));
    }
    
    return ans;
};