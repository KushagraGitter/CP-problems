module.exports = {
  //param A : array of integers
  //return a array of integers
  wave: function (A) {
    A.sort((a, b) => a - b)

    for (let i = 0; i < A.length - 1; i = i + 2) {
      const temp = A[i]
      A[i] = A[i + 1]
      A[i + 1] = temp
    }

    return A
  },
}
