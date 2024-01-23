//https://leetcode.com/problems/range-sum-of-bst/?envType=daily-question&envId=2024-01-08
var rangeSumBST = function(root, low, high) {
    if (!root) {
        return 0;
    }

    const currentVal = (root.val >= low && root.val <= high) ? root.val : 0;

    const leftSum = rangeSumBST(root.left, low, high);
    const rightSum = rangeSumBST(root.right, low, high);

    return currentVal + leftSum + rightSum;
};