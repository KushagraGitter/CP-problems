function ratInAMaze(A) {

    let path = new Array(A.length);

    for(let i = 0; i < A.length; i++) {
        path[i] = new Array(A.length).fill(0);
    }

    function idValidPath(row, col) {
        if(row < A.length && col < A.length && A[row][col] === 0) {
            return true;
        } else {
            return false;
        }
    }

    function dfs(rowIdx, colIdx) {
        if((rowIdx === A.length - 1  && colIdx === A.length - 1)) {
            
            path[rowIdx][colIdx] = 1;
            return true;
        }

        if(idValidPath(rowIdx, colIdx)) {
            
            path[rowIdx][colIdx] = 1
            if(dfs(rowIdx + 1, colIdx) === true) {
                return true;
            }
            if(dfs(rowIdx, colIdx + 1) === true) {
                return true;
            }
            

            path[rowIdx][colIdx] = 0;
            return false;
        }

        return false;
        
    }

    dfs(0, 0);

    console.log(path)
}