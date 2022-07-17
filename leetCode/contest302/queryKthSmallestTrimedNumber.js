//https://leetcode.com/contest/weekly-contest-302/problems/query-kth-smallest-trimmed-number/
/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  let result = []
  let minNumber = 0
  function minHeap() {
    this.heap = new Array()
    this.size = 0
  }

  minHeap.prototype.insert = function insert(n, i) {
    let size = 0
    let point = {
      n: n,
      i: i,
    }
    this.heap.push(point)
    size = this.heap.length

    if (size > 1) {
      let childIndex = size - 1
      let parent = Math.floor((childIndex - 1) / 2)
      while (childIndex >= 1 && this.heap[parent].n > this.heap[childIndex].n) {
        let temp = this.heap[parent]
        this.heap[parent] = this.heap[childIndex]
        this.heap[childIndex] = temp
        childIndex = parent
        parent = Math.floor((childIndex - 1) / 2)
      }
    }
    this.size = this.heap.length
  } //[5, 17, 100, 11]

  minHeap.prototype.extractMin = function extractMin() {
    let size = this.size
    let min = 0
    let temp = this.heap[0]
    this.heap[0] = this.heap[size - 1]
    this.heap[size - 1] = temp
    min = this.heap.pop()
    this.size = size - 1
    let i = 0

    while (
      i * 2 + 2 <= this.size &&
      ((this.heap[i * 2 + 1] !== undefined &&
        this.heap[i].n > this.heap[i * 2 + 1].n) ||
        (this.heap[i * 2 + 2] !== undefined &&
          this.heap[i].n > this.heap[i * 2 + 2].n))
    ) {
      if (
        this.heap[i * 2 + 2] === undefined ||
        (this.heap[i * 2 + 1] !== undefined &&
          this.heap[i * 2 + 2].n > this.heap[i * 2 + 1].n)
      ) {
        let temp = this.heap[i * 2 + 1]
        this.heap[i * 2 + 1] = this.heap[i]
        this.heap[i] = temp

        i = i * 2 + 1
      } else {
        if (this.heap[i * 2 + 2]) {
          let temp = this.heap[i * 2 + 2]
          this.heap[i * 2 + 2] = this.heap[i]
          this.heap[i] = temp
        }
        i = i * 2 + 2
      }
    }

    return [min.n, min.i]
  }

  for (let i = 0; i < queries.length; i++) {
    let [kthNumber, trimValue] = queries[i]
    let minHeapObj = new minHeap()

    for (let j = 0; j < nums.length; j++) {
      let number = parseInt(nums[j].slice(nums[j].length - trimValue))
      minHeapObj.insert(number, j)
    }

    while (kthNumber > 0) {
      const [n, i] = minHeapObj.extractMin()
      minNumber = i
      kthNumber = kthNumber - 1
    }

    result.push(minNumber)
  }

  return result
}
