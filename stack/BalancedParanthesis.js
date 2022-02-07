module.exports = { 
    //param A : string
    //return an integer
       solve : function(A){
               let stack = [];
               for(let i = 0; i < A.length; i++) {
                   if(A[i] === '{' || A[i] === '[' || A[i] === '(') {
                       stack.push(A[i])
                   } else {
                        if(stack.length === 0) {
                           return 0;
                       }
                       if(A[i] === '}' && stack[stack.length - 1] === '{') {
                           stack.pop();
                       } else if(A[i] === ']' && stack[stack.length - 1] === '') {
                           stack.pop();
                       } else if(A[i] === ')' && stack[stack.length - 1] === '(') {
                           stack.pop();
                       }
                   }
               }
   
               return stack.length === 0 ? 1 : 0
       }
   };
   