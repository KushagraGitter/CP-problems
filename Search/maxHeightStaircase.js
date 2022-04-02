module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let high = A;
    let low = 1;

    let ans = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const height = (mid * (mid + 1)) / 2;

      if (height == A) {
        return mid;
      } else if (height > A) {
        high = mid - 1;
      } else if (height < A) {
        ans = mid;
        low = mid + 1;
      }
    }
    return ans;
  },
};
