module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       solve : function(A, B){
     let left  = 0;
           let right = 0;
           let sum = A[left];;
           let returnArray = [];
           let isSumFound = false;
   
           returnArray.push(A[left]);
           while(right < A.length) {
               if(sum < B) {
                   right++;
                   sum = sum + A[right];
                   returnArray.push(A[right]); 
               } else if (sum > B) {
                   sum = sum - A[left];
                   returnArray.shift();
                   left++;
               } else {
                   isSumFound = true;
                   break;
               }
           }
   
           return isSumFound ? returnArray : [-1];
   
       }
   };
   