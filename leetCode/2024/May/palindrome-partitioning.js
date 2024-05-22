/**
 * @param {string} s
 * @return {string[][]}
 */
//https://leetcode.com/problems/palindrome-partitioning/?envType=daily-question&envId=2024-05-22
var partition = function(A) {
    let result = [];
 let part = [];

 function dfs(idx) {
   if (idx >= A.length) {
     result.push([...part]);
     return;
   }

   for (let i = idx; i < A.length; i++) {
     const str = A.slice(idx, i + 1);
     if (isPalin(str)) {
       part.push(A.slice(idx, i + 1));
       dfs(i + 1);
       part.pop();
     }
   }
 }

 function isPalin(params) {
   let l = 0;
   let r = params.length - 1;
   while (r > l) {
     if (params[l] !== params[r]) {
       return false;
     }
     r--;
     l++;
   }
   return true;
 }

 dfs(0);
 return result;
};