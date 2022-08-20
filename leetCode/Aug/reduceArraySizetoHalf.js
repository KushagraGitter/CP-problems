//https://leetcode.com/problems/reduce-array-size-to-the-half/
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  //   let map = new Map();
  //   const totalLength = arr.length;
  //   let length = totalLength;
  //   let ans = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (map.has(arr[i])) {
  //       map.set(arr[i], map.get(arr[i]) + 1);
  //     } else {
  //       map.set(arr[i], 1);
  //     }
  //   }

  //   const maxPQ = new MaxPriorityQueue();

  //   for (const [key, value] of map) {
  //     maxPQ.enqueue(value);
  //   }

  //   while (length > Math.floor(totalLength / 2)) {
  //     const count = maxPQ.dequeue();
  //     length = length - count;
  //     ans = ans + 1;
  //   }

  //   return ans;

  const map = new Map();

  for (const num of arr) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  // because javascript doesn't have built-in priority queue data structure, we need to just sort descending based on count to mimic maxHeap
  const countPairs = [...map].sort((a, b) => b[1] - a[1]);

  const target = arr.length / 2; // we know its even, so we don't have to worry about remainders

  let index = 0;
  let counts = 0;
  let sum = 0;

  while (sum < target) {
    sum += countPairs[index++][1];
    counts++;
  }

  return counts;
};
