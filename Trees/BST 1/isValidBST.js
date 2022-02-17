// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return an integer
       isValidBST : function(A){
           let isValid = 0;
           let notValidBST = 1;
              function validBST(root, minValue, maxValue) {
                  if(root === null) {
                      return null;
                  }
                  isValid = root.data > minValue && root.data < maxValue ? 1 : 0;
                  if(isValid === 0) {
                      notValidBST = 0;
                  }
                  validBST(root.left, minValue, root.data);
                  validBST(root.right, root.data, maxValue);
               }
               validBST(A, -Infinity, Infinity);
   
               return  notValidBST === 0 ? 0 : 1;
       }
   };
   