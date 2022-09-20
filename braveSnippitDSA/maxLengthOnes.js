	 function maxLengthOnes(A){
        let first = 0;
        let second = 0;
        let maxLength = -Infinity;

        while(second < A.length) {
            if(A[first] === "1" && A[second] === "1") {
                maxLength = Math.max(maxLength, second - first + 1)
                second++;
            } else {
                first++;;
                second++;
            }
        }

        return maxLength;
	}