/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[r] % 2 === 0 && nums[l] % 2 === 0) {
      l++;
    } else if (nums[r] % 2 === 0 && nums[l] % 2 !== 0) {
      //swap
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    } else if (nums[r] % 2 !== 0 && nums[l] % 2 !== 0) {
      r--;
    } else {
      l++;
      r--;
    }
  }

  return nums;
};
