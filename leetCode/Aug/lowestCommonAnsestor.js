//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == p || root == q) {
    return root
  }
  const leftP = exist(root.left, p)
  const leftQ = exist(root.left, q)
  const rightP = exist(root.right, p)
  const rightQ = exist(root.right, q)

  if ((leftP && rightQ) || (leftQ && rightP)) {
    return root
  } else if (leftP && leftQ) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return lowestCommonAncestor(root.right, p, q)
  }

  function exist(root, n) {
    if (!root) {
      return false
    }
    if (root == n) {
      return true
    }
    return exist(root.left, n) || exist(root.right, n)
  }
}
