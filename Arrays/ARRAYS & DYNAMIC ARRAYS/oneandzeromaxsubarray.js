function findMaxSubArray(A) {
    let pf = new Array(A.length).fill(0);

    //replace all zero with -1 to get the unique
    pf[0] = A[0]
    for(let i = 1; i < A.length; i++) {
        pf[i] = pf[i - 1] + A[i]
    }




}