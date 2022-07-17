//https://leetcode.com/contest/weekly-contest-302/problems/maximum-number-of-pairs-in-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let map = new Map()
  let noOfPair = 0
  let leftOver = 0

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (const [key, value] of map) {
    if (value % 2 === 0) {
      noOfPair = noOfPair + value / 2
    } else {
      leftOver = leftOver + (value % 2)
      noOfPair = noOfPair + Math.floor(value / 2)
    }
  }

  return [noOfPair, leftOver]
}
