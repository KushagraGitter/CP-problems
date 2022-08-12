//https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let result = true

  root && traverse(root)

  return result

  function traverse(node) {
    let left,
      right,
      range = [node.val, node.val]
    node.left && (left = traverse(node.left))
    if (left && (left[0] >= node.val || left[1] >= node.val)) {
      result = false
    }
    if (!result) {
      return
    }
    node.right && (right = traverse(node.right))
    if (right && (right[0] <= node.val || right[1] <= node.val)) {
      result = false
    }
    if (!result) {
      return
    }
    if (left && range[0] > left[0]) {
      range[0] = left[0]
    }
    if (right && range[1] < right[1]) {
      range[1] = right[1]
    }
    return range
  }
}
