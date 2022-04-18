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
 * @param {number} k
 * @return {number}
 */
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