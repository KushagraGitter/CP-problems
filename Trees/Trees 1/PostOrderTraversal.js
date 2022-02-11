// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       postorderTraversal : function(A){
          let returnArray  = [];
   
          function postOrder(root){
              if(root === null) {
                  return root;
              }
              postOrder(root.left);
              postOrder(root.right);
              returnArray.push(root.data);
          }
           postOrder(A);
          return returnArray;
       }
   };