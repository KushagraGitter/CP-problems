module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : array of integers
    //param D : integer
    //return an integer
       solve : function(A, B, C, D){
       let dp = new Array(D+1).fill(0);
       dp[0]=0;
       dp[1] = -Infinity;
       for(let i=0;i<B.length;i++){
           B[i] = B[i]*A[i];
       }
   
       for(let j=1;j<=D;j++){
           dp[j] = 0;
           for(let i=0;i<C.length;i++){
               if(j>=C[i]){
                   dp[j] = Math.max(dp[j],dp[j-C[i]]+B[i]);
               }
           }
       }
       return dp[D];
       }
   };
   