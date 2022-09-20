function bfAllSubArray(A) {
    let subArray = []
    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j <= i; j++) {
            console.log(`subArray${j}`, A[j])
        }
    }
    return subArray;
}