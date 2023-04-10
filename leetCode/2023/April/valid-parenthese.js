//https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(A) {
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
                 } else if(A[i] === ']' && stack[stack.length - 1] === '[') {
                     stack.pop();
                 } else if(A[i] === ')' && stack[stack.length - 1] === '(') {
                     stack.pop();
                 }
                 else {
                     stack.push(A[i])
                 }
             }
         }

         return stack.length === 0 ? true : false
};