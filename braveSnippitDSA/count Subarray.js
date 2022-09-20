	function countSubarray(A){
        let left = 0;
        let right = 0;
        let count = 0;
        let map = new Map();

        while(right < A.length) {
            if(!map.has(A[right])) {
                map.set(A[right], 1);
            } 

            if(map.get(A[right]) === 1) {
                count = count +  right - left + 1;
                right++;

                if(map.has(A[right])) {
					map.set(A[right], map.get(A[right]) + 1);
				} else {
					map.set(A[right], 1);
				}
				
            } else {
                map.set(A[left], map.get(A[left]) - 1);
                left++;
            }
        }

        return count;
	}