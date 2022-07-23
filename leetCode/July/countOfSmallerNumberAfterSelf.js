//https://leetcode.com/problems/count-of-smaller-numbers-after-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const numsLength = nums.length
  const store = new Array(numsLength)

  for (let i = 0; i < numsLength; i++) {
    store[i] = [nums[i], i]
  }

  const count = new Array(numsLength).fill(0)
  mergeSort(count, store, 0, numsLength - 1)
  return count
}

function mergeSort(count, store, left, right) {
  if (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    mergeSort(count, store, left, mid)
    mergeSort(count, store, mid + 1, right)
    merge(count, store, left, mid, right)
  }
}

function merge(count, store, left, mid, right) {
  const temp = new Array(right - left + 1)
  let i = left,
    j = mid + 1,
    k = 0

  while (i <= mid && j <= right) {
    if (store[i][0] <= store[j][0]) {
      temp[k++] = store[j++]
    } else {
      count[store[i][1]] += right - j + 1
      temp[k++] = store[i++]
    }
  }

  while (i <= mid) {
    temp[k++] = store[i++]
  }

  while (j <= right) {
    temp[k++] = store[j++]
  }

  for (let i = left; i <= right; i++) {
    store[i] = temp[i - left]
  }
}
