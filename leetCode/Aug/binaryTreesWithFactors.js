//https://leetcode.com/problems/binary-trees-with-factors/
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  arr.sort((a, b) => a - b)
  let map = new Map()
  let count = 1

  map.set(arr[0], count)
  for (let i = 1; i < arr.length; i++) {
    count = 1
    for (const [k, v] of map) {
      if (arr[i] % k == 0 && map.has(arr[i] / k)) {
        count += map.get(k) * map.get(arr[i] / k)
      }
    }
    map.set(arr[i], count)
  }
  let sum = 0
  for (const [k, v] of map) {
    sum = (sum + map.get(k)) % (Math.pow(10, 9) + 7)
  }
  return sum
}
