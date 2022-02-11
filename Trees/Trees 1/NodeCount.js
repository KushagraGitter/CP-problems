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
           function count(root) {
               if(root === null) {
                   return 0;
               }
               return count(root.left) + count(root.right) + 1
           }
   
           let returnCount = count(A);
           return returnCount;
       }
   };
   