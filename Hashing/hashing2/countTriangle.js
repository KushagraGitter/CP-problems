module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let hMapx = new Map();
    let hMapy = new Map();
    let ans = 0;
    const n = A.length;

    for (i = 0; i < n; i++) {
      if (hMapx.has(A[i])) {
        hMapx.set(A[i], hMapx.get(A[i]) + 1);
      } else {
        hMapx.set(A[i], 1);
      }

      if (hMapy.has(B[i])) {
        hMapy.set(B[i], hMapy.get(B[i]) + 1);
      } else {
        hMapy.set(B[i], 1);
      }
    }

    for (let j = 0; j < n; j++) {
      ans = ans + (hMapx.get(A[j]) - 1) * (hMapy.get(B[j]) - 1);
    }

    return ans;
  },
};
