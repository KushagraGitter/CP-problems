module.exports = {
  //param A : array of integers
  //return an integer
  firstMissingPositive: function (A) {
    for (let i = 0; i < A.length - 1; i++) {
      while (
        A[i] > 0 &&
        A[i] <= A.length &&
        A[A[i] - 1] !== A[i] &&
        A[i] - 1 !== i
      ) {
        const idx = A[i] - 1;
        const temp = A[i];
        A[i] = A[idx];
        A[idx] = temp;
      }
    }

    for (let j = 1; j <= A.length + 1; j++) {
      if (A[j - 1] !== j) {
        return j;
      }
    }
  },
};
