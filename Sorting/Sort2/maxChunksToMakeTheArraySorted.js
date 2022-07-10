module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0
    let max = 0
    for (let i = 0; i < A.length; i++) {
      max = Math.max(max, A[i])

      if (i === max) {
        count++
      }
    }

    return count
  },
}
