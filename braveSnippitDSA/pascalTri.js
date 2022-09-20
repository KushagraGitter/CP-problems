function pascalTriangle(A){
        let array2D = new Array(A).fill(new Array(A).fill(0))

        for(let i =0; i< A; i++) {
            let str = '';
            for(let j = 0; j< A; j++) {
                if(j === 0) {
                    array2D[i][j] = 1;
                } else if(i > 0 && j > 0) {
                    array2D[i][j] = array2D[i - 1][j] + array2D[i - 1][j - 1]  
                }
               
            }
            
        }
        return array2D
         }