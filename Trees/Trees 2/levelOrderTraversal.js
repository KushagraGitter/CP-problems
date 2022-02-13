// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       levelOrder : function(A){
           let returnArray  = [];
           let Q = [];
           // check if tree  root is null return null
           if(A === null) return null;
   
           //add root node to the Q
           Q.push(A);
   
           while(Q.length > 0) {
               let tempArr = [];
               let CSize  = Q.length;
               for(i = 0; i < CSize; i++) {
                   let node = Q.shift();
                   tempArr.push(node.data);
                   let left = node.left;
                   if(left !== null) {
                       Q.push(left);
                   }
                   let right = node.right;
                   if(right !== null) {
                       Q.push(right)
                   }
                   
               }
               returnArray.push(tempArr);
           }
   
           return returnArray;
       }
   };
   