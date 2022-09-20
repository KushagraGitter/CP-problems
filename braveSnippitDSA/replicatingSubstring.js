function replicatingSubstring(A, B){
        let mapB = new Map();
        let returnAns = 1;
        for(let i = 0; i < B.length; i++) {
            if(mapB.has(B[i])) {
                mapB.set(B[i], mapB.get(B[i]) + 1);
            } else {
                mapB.set(B[i], 1);
            }
        }

        mapB.forEach((value) => {
            if(value % A !== 0) {
                returnAns = -1;
            }
        })

        return returnAns;

	}