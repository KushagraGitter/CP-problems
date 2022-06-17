
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
  let ans = 0;
  let covered = new Set();
  covered.add(null);
  
  function dfs(node, parent) {
      if(node !== null) {
          dfs(node.left, node);
          dfs(node.right, node);
          
          if(parent === null && !covered.has(node) ||
                             !covered.has(node.left) ||
                          ! covered.has(node.right)) {
              ans++;
              covered.add(node);
              covered.add(parent);
              covered.add(node.left);
              covered.add(node.right);
          }
      }
  }
  
  dfs(root, null);
  return ans;
};