module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    A = A.sort((a, b) => a - b);

    let bMinEl = 0;
    let bMaxEl = 0;
    let left = 0;
    let right = A.length - 1;

    while (!(left + 1 === B)) {
      left++;
      right--;
    }

    return A[right] - A[left];
  },
};
