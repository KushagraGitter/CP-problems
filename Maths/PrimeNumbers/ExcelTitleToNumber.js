module.exports = { 
    //param A : string
    //return an integer
       titleToNumber : function(A){
               let charCode = 0;
   
               for(let i = A.length - 1; i >= 0; i--) {
                   charCode = charCode + (A[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * (Math.pow(26, A.length - 1 - i))
               }
   
               return charCode;
       }
   };
   
   
   
   // A B 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1