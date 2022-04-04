module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let Xmax = -Infinity;
    let Xmin = Infinity;
    let Ymax = -Infinity;
    let Ymin = Infinity;
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
      Xmax = Math.max(Xmax, A[i] + i);
      Xmin = Math.min(Xmin, A[i] + i);
      Ymax = Math.max(Ymax, A[i] - i);
      Ymin = Math.min(Ymin, A[i] - i);

      sum = Math.max(sum, Math.max(Xmax - Xmin, Ymax - Ymin));
    }

    return sum;
  },
};
