function xor(A) {
    let xor = A[0]
    for (let index = 1; index < A.length; index++) {
        xor = xor ^ A[index];
    }

    let xor2 = 1;
    for (let index = 2; index <= A.length + 1; index++) {
        xor2 = xor2 ^ index;
    }

    return xor ^ xor2;
}