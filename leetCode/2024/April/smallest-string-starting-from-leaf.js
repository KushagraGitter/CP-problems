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
 * @return {string}
 */
// //https://leetcode.com/problems/smallest-string-starting-from-leaf/?envType=daily-question&envId=2024-04-17
const smallestFromLeaf = root => {
    let smallest_string = null;
    const getNum = (root, n) => {
        if (root === null) return;
        n = String.fromCharCode(97+root.val)+n;
        if (root.left === null && root.right === null) {
            if(smallest_string===null || n<smallest_string)
                smallest_string = n;
        }
        getNum(root.left, n)
        getNum(root.right, n);
    }
    getNum(root, "");
    return smallest_string;
};