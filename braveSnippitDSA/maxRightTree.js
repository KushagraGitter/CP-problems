var increasingBST = function(root) {
    let newTreeRoot = new TreeNode(-1);
    let tempRoot = newTreeRoot;
    
    function inOrder(root) {
        if(root === null) {
            return root;
        }
        
        inOrder(root.left);
        tempRoot.right = new TreeNode(root.val);
        tempRoot = tempRoot.right;
        inOrder(root.right);
    }

    inOrder(root);
    
    return newTreeRoot.right;
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

console.log(increasingBST(root))