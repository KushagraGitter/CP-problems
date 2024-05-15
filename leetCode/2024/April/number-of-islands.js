/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(A) {
    let count = 0;
    const n = A.length;
    const m = A[0].length;
    let x = [-1, 1, 0, 0];
    let y = [0, 0, -1, 1]

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(A[i][j] === "1") {
                dfs(A, i, j);
                count++;
            }
        }
    }

    function dfs(A, i, j) {
        if(i < 0 || j < 0 || i > n - 1 || j > m - 1 || A[i][j] == '0') {
            return;
        }

        A[i][j] = "0" // mark the node visited;

        for(let k = 0; k < 4; k++) {
             dfs(A, i + x[k], j + y[k]);
        }
       
        
    }

    return count;

};