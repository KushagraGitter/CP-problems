function subsetsWithDup(A){
  let subset = [];
  let result = [];
  A.sort((a, b) => a - b);

  function dfs(idx) {
    if(idx === A.length) {
      result.push([...subset]);
      return;
    }

          while(idx + 1 < A.length && A[idx] === A[idx + 1]) {
              idx = idx + 1;
          }

          dfs(idx + 1);
          subset.push(A[idx]);
          dfs(idx + 1);
          subset.pop();
    
  }

  dfs(0);

  return result;
}