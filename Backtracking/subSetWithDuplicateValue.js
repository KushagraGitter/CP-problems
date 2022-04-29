module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsetsWithDup: function (A) {
    let subset = [];
    let result = [];
    A.sort((a, b) => a - b);

    function dfs(idx) {
      if (idx === A.length) {
        result.push([...subset]);
        return;
      }

      subset.push(A[idx]);
      dfs(idx + 1);
      subset.pop();

      while (idx + 1 < A.length && A[idx] === A[idx + 1]) {
        idx = idx + 1;
      }

      dfs(idx + 1);
    }

    dfs(0);
    result.sort(lexicoSort);
    return result;

    function lexicoSort(a, b) {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] < b[i]) return -1;
        else if (b[i] < a[i]) return 1;
      }
      return a.length - b.length;
    }
  },
};

//map [1, 2, 2] --> [1:1, 2: 2]
