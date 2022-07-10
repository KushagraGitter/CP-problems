module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let visBottle = 1
    let map = new Map()

    for (let i = 0; i < A.length; i++) {
      if (map.get(A[i])) {
        map.set(A[i], map.get(A[i]) + 1)
        visBottle = Math.max(visBottle, map.get(A[i]))
      } else {
        map.set(A[i], 1)
      }
    }

    return visBottle
  },
}
