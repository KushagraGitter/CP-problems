//https://leetcode.com/problems/contiguous-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (A) {
  let pf = [];
  let map = new Map();
  let ans = 0;

  const n = A.length;

  for (let i = 0; i < n; i++) {
    if (A[i] === 0) {
      A[i] = -1;
    }
  }
  pf[0] = A[0];

  for (let i = 1; i < A.length; i++) {
    pf[i] = pf[i - 1] + A[i];
  }

  for (let j = 0; j < pf.length; j++) {
    if (pf[j] === 0) {
      ans = Math.max(ans, j + 1);
    } else {
      if (map.get(pf[j]) !== undefined) {
        const lastIndex = map.get(pf[j]);
        ans = Math.max(ans, j - lastIndex);
        //map.set(pf[j], j)
      } else {
        map.set(pf[j], j);
      }
    }
  }

  return ans;
};
