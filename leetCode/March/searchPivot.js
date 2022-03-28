var search = function (nums, target) {
  let pivot = 0;

  function bs(start, end) {
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] > target) {
      return bs(start, mid - 1);
    } else {
      return bs(mid + 1, start);
    }
  }
  // find the pivot of the Array
  function bsFindPivot(start, end) {
    if (start === end) {
      return start;
    }

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[nums.length - 1]) {
      return bsFindPivot(mid + 1, end);
    } else if (nums[mid] <= nums[nums.length - 1]) {
      return bsFindPivot(start, mid);
    }
  }

  pivot = bsFindPivot(0, nums.length - 1);

  if (nums[pivot] === target) {
    return true;
  } else if (nums[nums.length - 1] > target) {
    return bs(pivot, nums.length - 1);
  } else if (nums[nums.length - 1] < target) {
    return bs(0, pivot - 1);
  }
};

console.log(search([1, 0, 1, 1, 1], 0));
