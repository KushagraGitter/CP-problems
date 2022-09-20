   function uniqueElements(A){
        let map = new Map();
        let operations = 0;
        const n = A.length;

       A.sort((a, b) => a - b);
       
        for(let i = 0; i < A.length; i++) {
            if(map.get(A[i])) {
                map.set(A[i], map.get(A[i]) + 1);
            } else {
                map.set(A[i], 1)
            }
        }

        for(const [value, key] of map) {
            if(key > 1) {
                const newKey = key - 1;
                const newValue = value + 1;
                if(map.get(newValue)) {
                    map.set(newValue, map.get(newValue) + newKey)
                } else {
                    map.set(newValue, newKey)
                }
                operations = operations + newKey;
            }
        }

        return operations;
	}