function setBits(A) {
    let setBits = 0
    while(A > 0) {
        setBits = setBits + A % 2;
        A = A >> 1;
    }
    return setBits;
}