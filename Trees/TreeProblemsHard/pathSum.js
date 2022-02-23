// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return an integer
       hasPathSum : function(A, B){
   
           function pathSum(root, sum) {
       
               let ans = false;
   
               if(root === null) {
                   return false;
               }
   
               let subSum = sum - root.data
   
               if(subSum === 0 && root.left === null && root.right === null) {
                   ans = true;
               }
   
               if(root.left !== null){
                   ans = ans || pathSum(root.left, subSum);
               }
               
               if(root.right !== null){
                   ans = ans || pathSum(root.right, subSum);
               }
               
   
               return ans;
           }
   
           return pathSum(A, B) ? 1 : 0
       }
   };
   