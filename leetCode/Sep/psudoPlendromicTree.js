//https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
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
var pseudoPalindromicPaths = function (root) {
  let count = 0;

  function preorder(node, path) {
    if (node != null) {
      // compute occurences of each digit
      // in the corresponding register
      path = path ^ (1 << node.val);
      // if it's a leaf check if the path is pseudo-palindromic
      if (node.left == null && node.right == null) {
        // check if at most one digit has an odd frequency
        if ((path & (path - 1)) == 0) {
          ++count;
        }
      }
      preorder(node.left, path);
      preorder(node.right, path);
    }
  }

  // function pseudoPalindromicPaths ( root) {
  preorder(root, 0);
  return count;
  // }
};
