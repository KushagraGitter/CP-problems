//Given an array A and a integer B. A pair(i,j) in the array is a good pair if i!=j and (A[i]+A[j]==B). Check if any good pair exist or not.
// First argument is an integer array A.

// Second argument is an integer B.

// A = [1,2,3,4]
// B = 7
module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
               const length = A.length;
               
               for(let i=0; i< length; i++) {
                   
                   for(let j = i+1; j<length; j++) {
                       
                       if(A[i] + A[j] === B){
                           return 1;
                       } 
                       
                   }
               }
               return 0;
       }
   };