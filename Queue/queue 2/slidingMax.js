module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       slidingMaximum : function(A, B){
           let returnArray = [];
           let deQueue = [];
   
           for(let i = 0; i < B; i++) {
               while(deQueue.length > 0 && deQueue[deQueue.length - 1] < A[i]) {
                   deQueue.pop();
               }
               deQueue.push(A[i]);
           } 
           returnArray.push(deQueue[0]);
   
           for(let j = B; j < A.length; j++) {
               if(A[j-B] === deQueue[0]) {
                   deQueue.shift();
               }
               while(deQueue.length > 0 && deQueue[deQueue.length - 1] < A[j]) {
                   deQueue.pop();
               }
               deQueue.push(A[j]);
           returnArray.push(deQueue[0])
           }
   
           return returnArray;
   
       }
   };