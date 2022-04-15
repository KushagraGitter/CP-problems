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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// var trimBST = function(root, R, L) {

//     function dfs(root) {
//         if(!root) {
//             return null;
//         } else if(root.val > R) {
//             return dfs(root.left);
//         } else if(root.val < L) {
//             return dfs(root.right);
//         } else {
//             root.left = dfs(root.left);
//             root.right = dfs(root.right);
//             return root;
//         }
//     }
//    const newroot = dfs(root)
//      return newroot;
// };

// class Solution {
//     public TreeNode trimBST(TreeNode root, int L, int R) {
//         if (root == null) {
//             return null;
//         }
//         //if the range is correct then checking both root left and right
//         if (root.val >= L && root.val <= R) {
//             root.left = trimBST(root.left, L, R);//Trim the left subtree
//             root.right = trimBST(root.right, L, R);//Trim the right subtree
//         } else if (root.val < L) {
//             //if the root val is less than low then getting values from left will be even lower(binary tree rule) so we need to set the root to root.right;
//             root = trimBST(root.right, L, R);
//         } else if (root.val > R) {
//             //if the root val is greater than high then getting values from right will be even higher(binary tree rule) so we need to the root to root.left.
//             root = trimBST(root.left, L, R);
//         }
//         return root;
//     }
// }
