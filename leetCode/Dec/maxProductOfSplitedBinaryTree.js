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
var maxProduct = function(root) {
    let sum = 0;
    let maxProduct = 0;

    function dfs(root) {
        if(root === null) return
        sum = sum + root.val;
        dfs(root.left)
        dfs(root.right)
    }

    function checkMax(root) {

        if(root === null) return 0;
        let l = checkMax(root.left);
        let r = checkMax(root.right);

        maxProduct = Math.max(maxProduct, (l + r + root.val) * (sum - l - r - root.val))
        return l + r + root.val
    }

    dfs(root)
    checkMax(root)

    return maxProduct % (Math.pow(10, 9) + 7)


};