module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    A.sort((a, b) => a - b)
    let maxNumber = 0
    let minNumber = 0
    const n = A.length
    const mod = Math.pow(10, 9) + 7

    for (let i = 0; i < n - 1; i = i + 2) {
      minNumber = (minNumber + Math.abs(A[i] - A[i + 1])) % mod
    }

    for (let i = 0; i < n / 2; i++) {
      maxNumber = (maxNumber + Math.abs(A[i] - A[n - i - 1])) % mod
    }

    return [maxNumber, minNumber]
  },
}
