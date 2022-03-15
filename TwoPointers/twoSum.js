module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           let left = 0;
           let right = A.length - 1;
           let count = 0;
   
           while(left !== right) {
               if(A[left] + A[right] > B) {
                   right--;
               } else if (A[left] + A[right] < B) {
                   left++;
               } else {
                   left++;
                   count++;
               }
           }
   
           return count;
   
       }
   };
   