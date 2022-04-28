module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let uniqueNumber = 0;
    for (let i = 0; i < A.length; i++) {
      uniqueNumber = BigInt(uniqueNumber) ^ BigInt(A[i]);
    }
    return parseInt(uniqueNumber);
  },
};
