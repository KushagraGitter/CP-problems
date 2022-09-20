var BSTIterator = function(root) {
    this.root = root;
    this.q = [];
    
     this.inOrder = function inOrder(root) {
        if(root === null || root === undefined) {
            return null;
        }
        
        this.inOrder(root.left);
            this.q.push(root);
        this.inOrder(root.right);
    }
    this.inOrder(this.root);
};

// driver code 
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//[5,3,6,2,4,null,7]
//3
var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
// root.left.left = new Node(2);
// root.left.right = new Node(4);
root.right.right = new TreeNode(9);
root.right.left = new TreeNode(8);

let BSTIteratorObj = new BSTIterator(root);