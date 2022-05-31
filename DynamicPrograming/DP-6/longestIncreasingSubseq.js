module.exports = { 
  //param A : array of integers
  //return an integer
   lis : function(A){
     const length = A.length;
         let dp = new Array(length).fill(0);
 
     dp[0] = 1;
 
     for(let i = 1; i < length; i++) {
       let sum = 0;
 
       for(let j = i - 1; j >= 0; j--) {
         if(A[j] < A[i]) {
           sum = Math.max(sum, dp[j]);
         }
       }
 
       dp[i] = sum + 1;
     }
 
     return Math.max(...dp)
   }
 };
 