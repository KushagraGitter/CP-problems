/**
 * @param {number[][]} grid
 * @return {number}
 */
//https://leetcode.com/problems/minimum-path-sum/description/
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let dp = new Array(m).fill().map((_) => new Array(n).fill(0))

    dp[0][0] = grid[0][0];

    for(let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }

    for(let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    for(let i = 1; i < m; i++) {
        for(j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }

    return dp[m - 1][n - 1]
};