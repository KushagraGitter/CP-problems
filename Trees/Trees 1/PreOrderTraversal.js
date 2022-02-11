// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       preorderTraversal : function(A){
        let returnArray  = [];
   
          function preOrder(root){
              if(root === null) {
                  return root;
              }
              returnArray.push(root.data);
              preOrder(root.left);
              preOrder(root.right);
          }
           preOrder(A);
          return returnArray;  
       }
   };
   