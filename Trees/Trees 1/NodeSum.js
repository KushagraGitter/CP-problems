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
           let sum = 0;
   
           function nodeSum(root) {
               if(root === null) {
                   return 0;
               }
   
               sum = sum + root.data;
               nodeSum(root.left);
               nodeSum(root.right);
           }
           nodeSum(A);
   
           return sum;
       }
   };
   