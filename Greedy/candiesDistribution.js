module.exports = { 
    //param A : array of integers
    //return an integer
       candy : function(A){
      const n = A.length;
           let leftArray = new Array(n).fill(1);
           let rightArray = new Array(n).fill(1);
   
           for(let i = 1; i < n ; i++) {
               if(A[i] > A[i-1]) {
                   leftArray[i] = leftArray[i - 1] + 1;
               }
           }
   
           for(let j = n - 1; j >= 0; j--) {
               if(A[j + 1] < A[j]) {
                   rightArray[j] = rightArray[j + 1] + 1;
               }
           }
   
           for(let k = 0; k < n; k++) {
               leftArray[k] = Math.max(leftArray[k], rightArray[k]);
           }
           let initialValue = 0;
           let minValue = leftArray.reduce((a, b) => a + b, initialValue);
           return minValue;
   
       }
   };
   