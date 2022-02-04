// Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// More formally,

// G[i] for an element A[i] = an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Elements for which no smaller element exist, consider next smaller element as -1.

// A = [4, 5, 2, 10, 8]
//[-1, 4, -1, 2, 2]

module.exports = { 
    //param A : array of integers
    //return a array of integers
       prevSmaller : function(A){
           let stack = [];
           let ansArray = [];
   
           for(let i = 0; i < A.length; i++) {
               while(stack.length > 0 && stack[stack.length - 1] >= A[i]) {
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
   