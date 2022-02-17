// Definition for a binary tree node 
// function TreeNode(data){ 
//       this.data = data 
//       this.left = null 
//       this.right = null 
// } 
module.exports = { 
    /*** param A: list of integer 
    ***  return: root node of balanced BST 
    ***/ 
    sortedArrayToBST: function (nums) { 
        return buildBST(nums, 0, nums.length - 1);
        function buildBST(nums, low, high) {
            if (low < 0 || high > nums.length - 1){
                return null;
            }
            if (nums.length == 0 || low > high){
                return null;
            }
            let mid = low + Math.floor((high - low) / 2);
            let root = new TreeNode(nums[mid]);
            root.left = buildBST(nums, low, mid - 1);
            root.right = buildBST(nums, mid + 1, high);
            return root;
        }
    }, 
};