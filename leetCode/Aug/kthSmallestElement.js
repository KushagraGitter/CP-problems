/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  const calculateArray = arr => {
    return arr.reduce(function (acc, currentVal) {
      return acc.concat(
        Array.isArray(currentVal) ? calculateArray(currentVal) : currentVal,
      )
    }, [])
  }

  const result = calculateArray(matrix)
    .sort((a, b) => a - b)
    .filter((item, i) => i === k - 1)

  return result
}
