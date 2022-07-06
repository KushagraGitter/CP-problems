module.exports = {
  //param A : integer
  //return a array of integers
  getRow: function (N) {
    // nC0 = 1
    let prev = 1;
    let result = [];
    result.push(prev);

    for (let i = 1; i <= N; i++) {
      // nCr = (nCr-1 * (n - r + 1))/r
      let curr = (prev * (N - i + 1)) / i;
      result.push(curr);
      prev = curr;
    }

    return result;
  },
};
