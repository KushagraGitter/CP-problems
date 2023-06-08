/**
 * @param {number[][]} grid
 * @return {number}
 */
//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
var countNegatives = function(grid) {
    let count  = 0;

    grid.forEach(g => {
        g.forEach(i => {
            if(i < 0) {
                count++;
            }
        })
    })

    return count;
};