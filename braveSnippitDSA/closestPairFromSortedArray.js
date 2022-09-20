	 function closestPairFromSortedArray(A, B, C){

        let start  = 0;
        let end = B.length - 1;
        let startIdx = 0;
        let endIdx = 0;
        let minValue = Infinity;

        while(end >= 0 && start < A.length) {
           if(Math.abs((A[start] + B[end]) - C) < minValue) {
               minValue = Math.abs((A[start] + B[end]) - C);
               startIdx = start;
               endIdx = end;
            } else if(Math.abs((A[start] + B[end]) - C) == minValue && A[startIdx] === A[start]) {
               endIdx = end;
            }
            if((A[start] + B[end]) < C) {
                start++;
            } else {
                end--;
            } 
        }
        return [A[startIdx], B[endIdx]]
	}