module.exports = {
  //param A : array of integers
  //return a array of integers
  plusOne: function (A) {
    let carry = 0;
    let returnArray = [];
    let sum = A[A.length - 1] + 1;
    carry = Math.floor(sum / 10);
    A[A.length - 1] = sum % 10;
    for (let i = A.length - 2; i >= 0; i--) {
      let localSum = 0;
      if (carry > 0) {
        localSum = A[i] + carry;
      } else {
        localSum = A[i];
      }

      carry = Math.floor(localSum / 10);
      A[i] = localSum % 10;
    }
    if (carry > 0) {
      A.unshift(carry);
    }
    let idx = 0;
    while (A[idx] === 0) {
      A.shift(idx);
    }
    return A;
  },
};
