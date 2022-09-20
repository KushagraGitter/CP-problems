function MergeArray(A, B) {

    let retArray = [];
    let leftStart = 0;
    let rightStart = 0;

    while(leftStart < A.length && rightStart < B.length) {
        if(A[leftStart] < B[rightStart]) {
            retArray.push(A[leftStart]);
            leftStart++;
        } else {
            retArray.push(B[rightStart]);
            rightStart++;
        }
    }

    while(leftStart < A.length) {
        retArray.push(A[leftStart]);
        leftStart++;
    }

    while(rightStart < B.length) {
        retArray.push(B[rightStart]);
        rightStart++;
    }

    return retArray;
}