module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    const n = A.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i][j] === -1) {
          A[i][j] = Infinity;
        }
      }
    }

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        if (i === k || A[i][k] === Infinity) {
          continue;
        }
        for (let j = 0; j < n; j++) {
          if (i === j || j === k || A[k][j] === Infinity) {
            continue;
          }
          A[i][j] = Math.min(A[i][j], A[i][k] + A[k][j]);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i][j] === Infinity) {
          A[i][j] = -1;
        }
      }
    }
    return A;
  },
};
