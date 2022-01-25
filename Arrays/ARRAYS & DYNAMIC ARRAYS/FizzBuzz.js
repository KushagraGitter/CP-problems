//Given a positive integer A, return an array of strings with all the integers from 1 to N. But for multiples of 3 the array should have “Fizz” instead of the number. For the multiples of 5, the array should have “Buzz” instead of the number. For numbers which are multiple of 3 and 5 both, the array should have "FizzBuzz" instead of the number.

module.exports = { 
    //param A : integer
    //return a array of strings
       fizzBuzz : function(A){
           let retArray = [];
           for(let i=1; i<=A; i++) {
               
               if(i%3 === 0 && i%5 === 0) {
                   retArray[i-1] = 'FizzBuzz';
               }
               else if(i % 3 === 0 ){
                   retArray[i-1] = 'Fizz';
               } else if(i%5 === 0 ) {
                   retArray[i-1] = 'Buzz'
               } else { 
                   retArray[i-1] = i;
               }
               
           }
           return retArray;
       }
   };