var convertBST = function(root) {
    
   let sum = 0 ;
   function convertToGT(root) {
       if(root == null) {
           return root;
       }
       
       findSumOfMaxNode(root.right);
       root.val = root.val + sum;
       sum = root.val
       convertToGT(root.left);
      
       convertToGT(root.right);
        sum = sum - root.val
   } 
    
   function findSumOfMaxNode(root) {
        if(root == null) {
          return root;  
        }
       
       sum = sum + root.val;
       findSumOfMaxNode(root.left);
       findSumOfMaxNode(root.right);
   }
   convertToGT(root);
   return root; 
};

// driver code 
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//[5,3,6,2,4,null,7]
//3
var root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
// root.left.left = new Node(2);
// root.left.right = new Node(4);
root.right.right = new Node(9);
root.right.left = new Node(8);

console.log(convertBST(root, 3))