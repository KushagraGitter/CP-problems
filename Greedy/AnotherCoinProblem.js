module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
   
        let maxValue = 1;
           let numberOfCoins = 0;
   
           while (maxValue <= A) {
               maxValue = maxValue * 5;
           }
   
           maxValue = maxValue / 5;
   
           while(A !== 0) {
               if (A < maxValue ) {
                   maxValue = maxValue / 5;
               } else {
                  A  = A - maxValue;
                   numberOfCoins++; 
               }
           }
   
           return numberOfCoins;
       }
   };
   