/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const A = nums;
  const B = target;
  function bs(start, end) {
    if (start > end) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (A[mid] === B) {
      return mid;
    } else if (A[mid] > B) {
      return bs(start, mid - 1);
    } else if (A[mid] < B) {
      return bs(mid + 1, end);
    }
  }

  const idx = bs(0, A.length - 1);

  if (idx === -1) {
    return [-1, -1];
  } else {
    let left = idx;
    let rigth = idx;

    while (left - 1 >= 0 && A[left - 1] === B) {
      left--;
    }

    while (rigth + 1 < A.length && A[rigth + 1] === B) {
      rigth++;
    }
    return [left, rigth];
  }
};
