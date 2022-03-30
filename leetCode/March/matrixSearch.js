/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  function bs(start, end, row) {
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);

    if (row[mid] === target) {
      return true;
    } else if (row[mid] > target) {
      return bs(start, mid - 1, row);
    } else if (row[mid] < target) {
      return bs(mid + 1, end, row);
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    if (bs(0, matrix[j].length - 1, matrix[j])) {
      return true;
    }
  }

  return false;
};
