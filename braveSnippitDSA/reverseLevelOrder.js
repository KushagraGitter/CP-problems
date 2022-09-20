var levelOrderBottom = function(root) {
    let q = [];
    let stack = [];
    let size  = 0
    q.push(root);
    
    while(q.length > 0) {
       size = q.length;
         let temArray = [];
        
        while(size > 0){
         let node = q.shift();
        
         temArray.push(node.val)  
            
         if(node.left) {
           q.push(node.left)
         } 
         if(node.right) {
           q.push(node.right);
            
         }
        
         size--;   
        }
         if(temArray.length > 0) {
             stack.push(temArray);
         }  
    }
    
};

// driver code 
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//[3,9,20,null,null,15,7]

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
// root.left.left = new Node(2);
// root.left.right = new Node(4);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// root.right.left.left = new TreeNode(10);
// root.right.left.right = new TreeNode(11);

levelOrderBottom(root);