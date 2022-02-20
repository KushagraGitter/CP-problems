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
           function height(root) {
               if(root === null) {
                   return 0;
               }
   
               return 1 + Math.max(height(root.left), height(root.right))
           }
   
       function diameter(root){
     
       // Base Case when tree is empty
       if(root == null)
           return 0
     
       // Get the height of left and right sub-trees
       let lheight = height(root.left)
       let rheight = height(root.right)
     
       // Get the diameter of left and right sub-trees
       let ldiameter = diameter(root.left)
       let rdiameter = diameter(root.right)
     
       // Return max of the following tree:
       // 1) Diameter of left subtree
       // 2) Diameter of right subtree
       // 3) Height of left subtree + height of right subtree +1
       return Math.max(lheight + rheight , Math.max(ldiameter, rdiameter))
    
       }
   
       return diameter(A);
       }
   
   };
   