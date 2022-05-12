/**
 * @param {number[]} A
 * @return {number[][]}
 */
 var permuteUnique = function(A) {
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
        if(i + 1 < A.length && A[i] === A[i + 1]) {
            i = i + 1;
        }  
        dfs(i + 1);
        prem.pop();
        visited[i] = false;
      }
    }
  }

  dfs(0);

  return Array.from(result.values()).map((val) => val.split(','));
};