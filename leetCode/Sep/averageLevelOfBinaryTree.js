//https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let nodeQ = []
  let result = []
  let averageLevelValue = 0

  nodeQ.push(root)

  while (nodeQ.length > 0) {
    const size = nodeQ.length
    for (let i = 0; i < size; i++) {
      const node = nodeQ.shift()
      averageLevelValue = averageLevelValue + node.val

      if (node.left) {
        nodeQ.push(node.left)
      }

      if (node.right) {
        nodeQ.push(node.right)
      }
    }
    result.push(averageLevelValue / size)
    averageLevelValue = 0
  }

  return result
}
