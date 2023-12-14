/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
//https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/?envType=daily-question&envId=2023-12-14
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const rowOnes = new Array(m).fill(0);
    const colOnes = new Array(n).fill(0);

    // Count ones in each row and column
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    }

    // Calculate the difference matrix
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - m - n;
        }
    }

    return grid;
};