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
               function maxHeight(root) {
                   if(root === null) {
                       return -1;
                   }
                   return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
               }
   
               return maxHeight(A)+1;
       }
   };
   