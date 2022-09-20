function numberOfFactors(A) {

    let maxNumber = -Infinity;
        let returnArray = new Array(A.length).fill(0);

        //find max number from array
        for(let i = 0; i < A.length; i++) {
            maxNumber = Math.max(maxNumber, A[i]);
        }
        let factorArray = new Array(maxNumber + 1).fill(0);
        
        for(let i = 1; i < maxNumber + 1; i++) {
            for(let j = i; j< maxNumber + 1; j = j + i) {
                factorArray[j] = factorArray[j] + 1;
            }
        }

        for(let i = 0; i < A.length; i++) {
            returnArray[i] = (factorArray[A[i]]);
        }

        return returnArray;
}