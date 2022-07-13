module.exports = {
  //param A : array of integers
  //return a array of integers
  subUnsort: function (A) {
    let B = [...A]
    let startIndex = -1
    let endIndex = -1
    B.sort((a, b) => a - b)

    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        if (startIndex < 0) {
          startIndex = i
        }
        endIndex = i
      }
    }

    return startIndex === endIndex ? [-1] : [startIndex, endIndex]
  },
}
