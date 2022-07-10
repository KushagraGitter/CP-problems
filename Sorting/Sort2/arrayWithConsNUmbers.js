module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    A.sort((a, b) => a - b)

    for (let i = 1; i < A.length; i++) {
      if (A[i] - A[i - 1] !== 1) {
        return 0
      }
    }
    return 1
  },
}
