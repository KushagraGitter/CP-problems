//https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
/**
* @param {number[][]} grid
* @param {number} k
* @return {number}
*/
var shortestPath = function(grid, k) {
    /*
    Approach: Use BFS for shortest path
    **IMPORTANT**Mark a node/cell visited if the same cordinate with same amount of obstacles has been seen previously
    */
    let queue=[],item,node,row,col,count,dist,visited={},dx=[[0,1],[0,-1],[1,0],[-1,0]];
    visited["0_0_0"]=true;
    queue.push([[0,0],0,0]);
    while(queue[0]!==undefined){
        item = queue.shift();
        node = item[0];
        count = item[1];
        dist = item[2];
        if(node[0]===grid.length-1 && node[1]===grid[0].length-1){
            return dist;
        }
        if(count<=k){
            for(let i=0;i<dx.length;i++){
                row = node[0]+dx[i][0];
                col = node[1]+dx[i][1];
                if(grid[row]!==undefined && grid[row][col]!==undefined){
                    if(grid[row][col]===0 && visited[row+"_"+col+"_"+count]===undefined){
                        visited[row+"_"+col+"_"+count]=true;
                        queue.push([[row,col],count,dist+1]);
                    }else if(count<k && visited[row+"_"+col+"_"+(count+1)]===undefined){
                        visited[row+"_"+col+"_"+(count+1)]=true;
                        queue.push([[row,col],count+1,dist+1]);
                    }
                }
            }
        }
    }
    return -1;
};