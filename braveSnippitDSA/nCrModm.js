function nCrModM(A, B, C){
        let array2D = new Array(A+1);
        
        for(let i =0; i<array2D.length; i++) {
                array2D[i] = new Array(B+1).fill(0);
        }
       

        for(let i =0; i< A+1; i++) {
            let str = '';
            for(let j = 0; j< B+1; j++) {
                if(j === 0) {
                    array2D[i][j] = 1;
                } else if(i > 0 && j > 0) {
                    array2D[i][j] = array2D[i - 1][j]%C + array2D[i - 1][j - 1]%C  
                }
               
            }
            
        }
        return array2D[A][B]%C;
	}