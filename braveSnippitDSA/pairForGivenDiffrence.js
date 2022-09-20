	 function pairForGivenDiffrence(A, B){
        let count = 0;
        let hm = new Map();

        for(let i = 0; i < A.length; i++) {
            if(hm.has(A[i])) {
                hm.set(A[i], hm.get(A[i]) + 1)
            } else {
                hm.set(A[i], 1)
            }
        }
        A = [... new Set(A)];
        for(let j = 0; j < A.length; j++) {
            const sum = A[j] + B;

            if(B == 0){
              if (hm.get(sum) > 1) {
                  count++;
                  hm.set(sum, hm.get(sum) - 1);
              }
            }
            else {
               if(hm.get(sum) >= 1) {
                count++;
                hm.set(sum, hm.get(sum) - 1)   
            } 
            }
            
        }

        return count;
	}