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
           let maxNode = -Infinity;
   
           function findMaxNode(root) {
               if(root === null) {
                   return 0;
               }
   
               maxNode = Math.max(maxNode, root.data);
               findMaxNode(root.left);
               findMaxNode(root.right);
           }
   
           findMaxNode(A);
   
           return maxNode;
       }
   };
   