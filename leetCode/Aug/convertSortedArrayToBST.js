//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let length = nums.length
  return length ? t(0, length - 1) : null
  function t(a, b) {
    let node = new TreeNode()
    let mid = Math.ceil((b + a) / 2)
    node.val = nums[mid]
    node.left = a === mid ? null : t(a, mid - 1)
    node.right = b === mid ? null : t(mid + 1, b)
    return node
  }
}
