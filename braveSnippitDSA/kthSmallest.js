var kthSmallest = function(root, k) {
    let kthSmallest = 0;
    function inOrder(root) {
        if(root === null) {
            return root;
        }
        
        inOrder(root.left);
        k--;
        if(k === 0) {
            kthSmallest = root.val;
        }
        inOrder(root.right)
    }
 inOrder(root)
    return kthSmallest;
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
var root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
// root.left.left = new Node(2);
 root.left.right = new TreeNode(2);
// root.right.right = new TreeNode(9);
// root.right.left = new TreeNode(8);

kthSmallest(root, 3)