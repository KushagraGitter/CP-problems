// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return an integer
       solve : function(A){
           let oddLevelSum = 0;
           let evenLevelSum = 0;
           let level = 1;
           let q = [];
   
           q.push(A);
   
           while(q.length > 0) {
               let cSize = q.length;
   
               for(let i = 0; i < cSize; i++) {
                   let first = q.shift();
   
                   if(first.left !== null) {
                       q.push(first.left);
                   }
                   if(first.right !== null) {
                       q.push(first.right)
                   }
   
                   if(level % 2 === 0) {
                       evenLevelSum = evenLevelSum + first.data;
                   } else {
                       oddLevelSum = oddLevelSum + first.data;
                   }
               }
               level++;
           }
   
           return oddLevelSum - evenLevelSum;
       }
   };
   