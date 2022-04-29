module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute: function (A) {
    let prem = [];
    let visited = new Array(A.length).fill(false);
    let result = new Set();
    function dfs() {
      if (prem.length === A.length) {
        result.add(prem.join(','));
        return;
      }

      for (let i = 0; i < A.length; i++) {
        if (!visited[i]) {
          prem.push(A[i]);
          visited[i] = true;
          dfs(i + 1);
          prem.pop();
          visited[i] = false;
        }
      }
    }

    dfs(0);

    return Array.from(result.values()).map((val) => val.split(','));
  },
};
