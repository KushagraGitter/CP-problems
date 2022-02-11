// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       inorderTraversal : function(A){
              let returnArray  = [];
   
          function inOrder(root){
              if(root === null) {
                  return root;
              }
              inOrder(root.left);
              returnArray.push(root.data);
              inOrder(root.right);
          }
           inOrder(A);
          return returnArray;
       }
   };
   