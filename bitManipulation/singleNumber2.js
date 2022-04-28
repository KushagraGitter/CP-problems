module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let setBitCount = [];

    for (let j = 0; j <= 30; j++) {
      let countSetBit = 0;
      for (let i = 0; i < A.length; i++) {
        if ((A[i] & (1 << j)) > 0) {
          countSetBit++;
        }
      }
      setBitCount.push(countSetBit % 3);
    }

    return parseInt(setBitCount.reverse().join(''), 2);
  },
};
