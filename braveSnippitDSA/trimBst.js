var trimBST = function(root, L, R) {
    
    
    
    function dfs(root) {
        if(!root) {
            return null;
        } else if(root.val > R) {
            return dfs(root.left);
        } else if(root.val < L) {
            return dfs(root.right);
        } else {
            root.left = dfs(root.left);
            root.right = dfs(root.right);
            return root;
        }
    }
  return dfs(root);
   
};

// driver code 
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


var root = new Node(1);
root.left = new Node(0);
root.right = new Node(2);
// root.left.left = new Node(3);
// root.left.right = new Node(2);
// root.left.right.left = new Node(1);

trimBST(root, 1, 2)