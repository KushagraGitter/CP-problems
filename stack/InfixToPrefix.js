// Given string A denoting an infix expression. Convert the infix expression into postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase english alphabets where lowercase english alphabets are operands and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.

// NOTE:

// ^ has highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.

// Example Input

// Input 1:

//  A = "x^y/(a*z)+b"
// Input 2:

//  A = "a+b*(c^d-e)^(f+g*h)-i"


// Example Output

// Output 1:

//  "xy^az*/b+"
// Output 2:

//  "abcd^e-fgh*+^*+i-"

module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
               let pfString = '';
               let oprMap = new Map();
               let stack = [];
               const oprArr = ['^', '/', '*', '-', '+'];
   
               oprArr.forEach((opr) => {
                   if(opr == '+' || opr == '-') {
                       oprMap.set(opr, 0);
                   } else if(opr == '/' || opr == '*') {
                       oprMap.set(opr, 1);
                   } else if(opr == '^') {
                       oprMap.set(opr, 2)
                   }
               });
   
               // loop for the infix sprint
               for(let i = 0; i < A.length; i++) {
                   if( oprMap.get(A[i]) !== undefined ) {
                       while( stack.length > 0 && compareOperator(stack[stack.length - 1], A[i]) ) {
                           let topOpr = stack[stack.length - 1];
                           stack.pop();
                           //stack.push(A[i]);
                           pfString = pfString + topOpr;
                       }
                       stack.push(A[i]);
                   } else {
                       if(A[i] === '(') {
                           stack.push(A[i]);
                       } else if (A[i] === ')') {
                           while(stack[stack.length - 1] !== '(') {
                               let topOpr = stack[stack.length - 1];
                               stack.pop();
                               pfString = pfString + topOpr;
                           }
                           stack.pop();
                       } else {
                           pfString = pfString + A[i];   
                       }
                       
                   }
               }
   
               //if the loop is completed then pop everything from the stack and push add it to pfString;
               while(stack.length > 0) {
                   let topOpr = stack[stack.length - 1];
                   stack.pop();
                   pfString = pfString + topOpr;
               }
   
               // function to check the precedence of the operator
               function compareOperator(opr1, opr2) {
                   if(oprMap.get(opr1) >= oprMap.get(opr2)) {
                       return true;
                   } else {
                       return false;
                   }
               }
   
               return pfString;
       }
   };
   