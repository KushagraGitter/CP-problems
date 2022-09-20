var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    let cord = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    let maxArea = -Infinity;
    let vis = new Array(m).fill().map(() => new Array(n).fill(false))
    let stack = [];
    
    function dfs(i, j) {
        if(vis[i][j]) {
            return;
        }
        
        vis[i][j] = true;
        
           area++;
               for(let l = 0; l < cord.length; l++) {
                   let [newX, newY] = cord[l];
                   newX = newX + i;
                   newY = newY + j;
                   
                   if(newX > -1 && newX <= m - 1 && newY > -1 && 
                      newY <= n - 1 && !vis[newX][newY] && grid[newX][newY] === 1) {
                       dfs(newX, newY);
                   }
               }
         maxArea = Math.max(maxArea, area)
           //return area;
       } 
    let area = 0;    
    for(let o = 0; o < m; o++) {
        for(let p = 0; p < n; p++) {
            if(grid[o][p] && !vis[o][p]) {
                area = 0;
                dfs(o, p, 0) 
            }
            
        }
    }
    return maxArea;
};