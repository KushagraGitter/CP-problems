module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let ans = 0
    let tempArr = new Array(A + 1).fill(0)

    for (let i = 2; i <= A; i++) {
      if (tempArr[i] === 0) {
        for (let j = i * 2; j <= A; j = j + i) {
          tempArr[j] = tempArr[j] + 1
        }
      }
    }

    for (let i = 0; i <= A; i++) {
      if (tempArr[i] === 2) {
        ans++
      }
    }

    return ans
  },
}
