/**
 * @param {number[][]} grid
 * @return {number}
 */
//https://leetcode.com/problems/path-with-maximum-gold/?envType=daily-question&envId=2024-05-14
var getMaximumGold = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    // Helper function for DFS
    function dfs(row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0) {
            return 0;
        }

        const currentGold = grid[row][col];
        grid[row][col] = 0;  // Mark the cell as visited by setting it to 0

        // Recursively explore all four directions
        const down = dfs(row + 1, col);
        const up = dfs(row - 1, col);
        const right = dfs(row, col + 1);
        const left = dfs(row, col - 1);

        // Restore the cell value
        grid[row][col] = currentGold;

        return currentGold + Math.max(down, up, right, left);
    }

    // Iterate over all cells in the grid
    for (let row = 0; row < m; ++row) {
        for (let col = 0; col < n; ++col) {
            if (grid[row][col] > 0) {
                maxGold = Math.max(maxGold, dfs(row, col));
            }
        }
    }

    return maxGold;
};