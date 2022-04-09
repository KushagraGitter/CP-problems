/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // below is brute force solution
  //     let map = new Map();
  //     let returnArray = [];
  //     // create a freq map
  //     for(let i = 0; i < nums.length; i++) {
  //         map.set(nums[i], map.get(nums[i]) + 1 || 1);
  //     }

  //     returnArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map((a) => a[0]);

  //     return returnArray;

  // extra time is taken by above solution is in the sorting
  // TC : O(nlogn) TC: O(N)
  // we can minimise this using minHeap it will become TC: O(nlogk)

  //to optimise further we can use bucket solution

  let map = new Map();

  let returnArray = [];
  let bucket = new Array(nums.length + 1);
  //     // create a freq mp
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  for (item of map.entries()) {
    bucket[item[1]] = bucket[item[1]]
      ? [item[0], ...bucket[item[1]]]
      : [item[0]];
  }

  for (let j = bucket.length - 1; j >= 0; j--) {
    if (returnArray.length < k) {
      for (let l = 0; bucket[j] && l < bucket[j].length; l++) {
        if (bucket[j]) {
          returnArray.push(bucket[j][l]);
        }
      }
    } else {
      break;
    }
  }
  return returnArray;
};
