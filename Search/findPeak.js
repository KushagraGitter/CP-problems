module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let start = 0;
    let end = A.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (A[mid + 1] < A[mid] && A[mid] > A[mid - 1]) {
        return A[mid];
      } else if (A[mid + 1] && A[mid] <= A[mid + 1]) {
        start = mid + 1;
      } else if (A[mid - 1] && A[mid] <= A[mid - 1]) {
        end = mid - 1;
      } else if (A[mid + 1] === undefined || A[mid - 1] === undefined) {
        return A[mid];
      }
    }

    return A[start];
  },
};
