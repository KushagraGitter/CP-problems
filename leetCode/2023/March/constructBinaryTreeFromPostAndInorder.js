//https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
//update
var buildTree = function(inorder, postorder) {
    const n = inorder.length;
    const map = new Map();
    inorder.forEach((num, index) => map.set(num, index));
    
    let index_post = n - 1;
    
    return treeBuilder(0, n - 1);
    
    function treeBuilder(left, right) {
        if (index_post < 0 || left > right) return null;
        
        const curr_val = postorder[index_post--];
        const curr_node = new TreeNode(curr_val);
        
        const curr_index = map.get(curr_val);
        
        curr_node.right = treeBuilder(curr_index + 1, right);
        curr_node.left = treeBuilder(left, curr_index - 1);
        
        return curr_node;
    }
};