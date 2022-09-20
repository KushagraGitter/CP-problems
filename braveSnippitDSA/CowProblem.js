 function cowProblem(A, B){
        let minValue = Infinity;
        let maxValue = -Infinity;
        A = A.sort((a, b) => a - b)
         
         for(let i = 0; i < A.length; i++) {
             minValue = Math.min(minValue, A[i]);
             maxValue = Math.max(maxValue, A[i])
         }
     
        const maxAns = ( maxValue - minValue ) / (B - 1);

        let high = maxAns;
        let low = 1;
        let retAns = 0
        while(low <= high) {
            const mid = Math.floor((low + high) / 2)

            if(checkArrangementPossible(mid)) {
                retAns = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return retAns;

        function checkArrangementPossible(distance) {
           let cows = 1;
           let lastPos = A[0];

           for(let i = 1; i < A.length; i++) {
                 if(A[i] - lastPos >= distance) {
                         cows++;
                         lastPos = A[i];
                         if(cows >= B) {
                                 return true;
                         }
                 }  
           }

                return false;
        }
	}