 function miceGreedy(A, B){
        let bSort = B.sort((a, b) => a - b);
        A = A.sort((a, b) => a - b);
        let minTime  = 0;

        for(let i = 0; i < A.length; i++) {
            minTime = minTime + Math.abs(A[i] - bSort[i]);
        }

        return minTime;

	}