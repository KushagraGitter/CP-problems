module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let diff = Infinity;
    A.sort((a, b) => a - b);
    for (let i = 0; i + B - 1 < A.length; i++) {
      diff = Math.min(diff, A[i + B - 1] - A[i]);
    }

    return diff;
  },
};
