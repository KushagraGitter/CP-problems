var shiftGrid = function(grid, k) {
    while(k > 0) {
         for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                const temp = grid[i][j];
                
                if(i === grid.length - 1 && j === grid[i].length - 1) {
                    
                    grid[i][j] = grid[0][0];
                    grid[0][0] = temp;
                    
                } else if (j === grid[i].length - 1) {
                    
                    grid[i][j] = grid[i + 1][0]
                    grid[i + 1][0] = temp;
                    
                } else {
                    
                    grid[i][j] = grid[i][j + 1];
                    grid[i][j + 1] = temp;
                    
                }
            }
         }
        k--;
    }
    return grid;
   
};