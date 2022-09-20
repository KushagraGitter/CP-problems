function sprialMAt(A){
        let c = 0; l = A - 1;
        let retMat = new Array();
        let arrayMat = new Array();
        let count = 1;
        for(let i = 1; i <= A; i++) {
            let temp = new Array();
            for(let j = 0; j<A; j++) {
                temp.push(count);
                count++;
            }
            arrayMat.push(temp);
        }
        for(let p =0; p < A; p++) {
            let temA = new Array(A).fill(0);
            retMat.push(temA);
        }
        while(l > 0) {
            let i = c, j = c;

            for(let k = 0; k < l; k++) {
                retMat[i][j] = arrayMat[i][j]
                j++;
            }


            for(let k = 0; k < l; k++) {
                retMat[i][j] = arrayMat[i][j]
                i++;
            }

            for(let k = 0; k < l; k++) {
                retMat[i][j] = arrayMat[i][j]
                j--;
            }

            

            for(let k = 0; k < l; k++) {
                retMat[i][j] = arrayMat[i][j]
                i--;
            }

           

            l = l - 2; c++;
        }

        if(l === 0) {
            return retMat;
        }

        return retMat;
	}