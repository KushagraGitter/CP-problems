function diagonal(A){
        //let matrix = new Array(A.length).fill(new Array(A.length).fill(0));
          let matrix = new Array();

//         for(let k = 0; k < 2*A.length -1; k++) {
//         	matrix[k] = new Array(A.length).fill(0);
//         }

         for(let col = 0; col < A.length; col++) {
        	 let i = 0, j = col;
        	 let tempArray = new Array(A.length).fill(0);
			while(i < A.length && j >= 0) {
				tempArray[i] = A[i][j];
				i++; j--;
			}
			matrix.push(tempArray);
            
        }
        

        for(let row = 1; row < A.length; row++) {
        	 let i = row, j = A.length - 1;
        	 let tempArray = new Array(A.length).fill(0);
			while(i < A.length && j >= 0) {
				let arrayIndex = i - j >= 0 ? i - j : 0
				//console.log(i,j);
				tempArray[(A.length -1) - j] = A[i][j];
				i++; j--;
			}
			matrix.push(tempArray);
        }
       

        return matrix;
	}