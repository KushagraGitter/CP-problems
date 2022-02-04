module.exports = { 
    //param A : array of integers
    //return a array of integers
       prevGreater : function(A){
           let stack = [];
           let ansArray = [];
   
           for(let i = 0; i < A.length; i++) {
               while(stack.length > 0 && stack[stack.length - 1] <= A[i]) {
                   stack.pop();
               }
   
               if(stack.length === 0) {
                   ansArray.push(-1);
                   stack.push(A[i]);
               } else {
                   ansArray.push(stack[stack.length - 1])
                   stack.push(A[i]);
               }
           }
   
           return ansArray;
       }
   };