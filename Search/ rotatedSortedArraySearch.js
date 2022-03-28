module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  search: function (A, B) {
    let pivot = 0;
    function bsFindPivot(start, end) {
      if (start === end) {
        return start;
      }

      const mid = Math.floor((start + end) / 2);

      if (A[mid] > A[A.length - 1]) {
        return bsFindPivot(mid + 1, end);
      } else if (A[mid] <= A[A.length - 1]) {
        return bsFindPivot(start, mid);
      }
    }

    function bs(start, end) {
      if (start > end) {
        return -1;
      }

      const mid = Math.floor((start + end) / 2);

      if (A[mid] === B) {
        return mid;
      }

      if (A[mid] > B) {
        return bs(start, mid - 1);
      } else {
        return bs(mid + 1, end);
      }
    }

    pivot = bsFindPivot(0, A.length - 1);
    if (A[pivot] === B) {
      return pivot;
    } else if (A[A.length - 1] > B) {
      return bs(pivot, A.length - 1);
    } else {
      return bs(0, pivot - 1);
    }
  },
};
