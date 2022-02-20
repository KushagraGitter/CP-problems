// Given a binary tree T, find the maximum path sum.

// The path may start and end at any node in the tree.

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return an integer
       maxPathSum : function(A){
          let value = -Infinity;
   
          function singleNodeMaxPath(root) {
              if(root === null) {
                  return -Infinity;
              }
   
              let l = singleNodeMaxPath(root.left);
              let r = singleNodeMaxPath(root.right);
   
              let maxSingleNode = Math.max(Math.max(l, r) + root.data, root.data);
   
              let maxTop = Math.max(l + r + root.data, maxSingleNode);
   
              value = Math.max(maxTop, value);
   
              return maxSingleNode; 
   
          }
   
          singleNodeMaxPath(A);
   
          return value;
   
       }
   
      
   };
   