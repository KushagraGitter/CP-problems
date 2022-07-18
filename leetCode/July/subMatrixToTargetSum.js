//https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
//this question is very similar to "Subarray Sum Equals k."
//https://leetcode.com/problems/subarray-sum-equals-k/
//it's a 2D array variation of the original 1D problem
var numSubmatrixSumTarget = function (matrix, target) {
  let rlen = matrix.length
  let clen = matrix[0].length
  //pfsum is a 2D array that will be used to store the sum from [0][0] to [r][c] (inclusive)
  //eg pfsum[1][1] will be sum of (matrix[0][0],matrix[0][1],matrix[1][0],matrix[1][1])
  let pfsum = []
  for (let i = 0; i < rlen; i++) {
    let t = Array(clen).fill(0)
    pfsum.push(t)
  }
  for (let i = 0; i < rlen; i++) {
    let rowsum = 0
    for (let j = 0; j < clen; j++) {
      rowsum += matrix[i][j]
      pfsum[i][j] = rowsum
      if (i === 0) continue
      pfsum[i][j] += pfsum[i - 1][j]
    }
  }
  let count = 0
  //prefix sum
  for (let jlen = 0; jlen < clen; jlen++) {
    for (let j = 0; j + jlen < clen; j++) {
      let pf = new Map()
      pf.set(0, 1)
      for (let i = 0; i < rlen; i++) {
        let left = 0
        if (j - 1 >= 0) left = pfsum[i][j - 1]

        let sum = pfsum[i][j + jlen] - left

        if (pf.has(sum - target)) count += pf.get(sum - target)

        if (!pf.has(sum)) pf.set(sum, 1)
        else pf.set(sum, pf.get(sum) + 1)
      }
    }
  }
  return count
}
