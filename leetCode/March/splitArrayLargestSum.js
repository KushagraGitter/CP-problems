/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let max = 0;
  let min = -Infinity;
  let retSum = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.max(min, nums[i]);
    max = max + nums[i];
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let count = 0;
    let tmpSum = 0;
    for (let j = 0; j < nums.length; j++) {
      if (tmpSum + nums[j] <= mid) {
        tmpSum = tmpSum + nums[j];
      } else {
        count++;
        tmpSum = nums[j];
      }
    }
    count++;

    if (count <= m) {
      retSum = mid;
      max = mid - 1;
    } else {
      min = min + 1;
    }
  }

  return retSum;
};
