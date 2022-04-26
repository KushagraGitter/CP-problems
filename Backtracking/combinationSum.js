module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
   combinationSum : function(A, B){
           let returnArray = [];
     let subSet = [];
     let qArray  = [];
     
     A.sort((a, b) => a - b);
     qArray.push(A[0])
     for(let i = 1; i < A.length; i++) {
        if(A[i] !== A[i - 1]) {
            qArray.push(A[i])
        } 
     }
     
     let arrayLength = qArray.length;
     
     function generate(subSet, index, sum) {
       if (sum === B) {
           returnArray.push([...subSet]);
           return;
       } 
       if (index === arrayLength || sum > B) {
          return; 
       }
       
         subSet.push(qArray[index]);
         generate(subSet, index, sum + qArray[index]);
         subSet.pop();
         generate(subSet, index + 1, sum);
       }
 
     generate(subSet, 0, 0);
 
     return returnArray;
   }
 };
 