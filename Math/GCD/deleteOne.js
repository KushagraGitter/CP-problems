module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const n = A.length
    let pfGCD = [A[0]]
    let sfGCD = new Array(n)
    let maxGCD = -Infinity

    if (A.length < 3) {
      return Math.max(A[0], A[1])
    }

    sfGCD[n - 1] = A[n - 1]

    for (let i = 1; i < n; i++) {
      pfGCD.push(findGDC(pfGCD[i - 1], A[i]))
    }

    for (let j = n - 2; j >= 0; j--) {
      sfGCD[j] = findGDC(sfGCD[j + 1], A[j])
    }

    for (let k = 1; k < n - 1; k++) {
      maxGCD = Math.max(maxGCD, findGDC(pfGCD[k - 1], sfGCD[k + 1]))
    }

    function findGDC(A, B) {
      if (B === 0) {
        return A
      }
      // if(A === 1 || B === 1) {
      //     return 1;
      // }
      return findGDC(B, A % B)
    }

    return maxGCD
  },
}
