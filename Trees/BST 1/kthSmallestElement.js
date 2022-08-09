// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return an integer
  kthsmallest: function (A, B) {
    let arr = []
    let returnValue = 0
    function inorder(root) {
      if (root === null) {
        return
      }

      inorder(root.left)
      arr.push(root.data)
      inorder(root.right)
    }

    inorder(A)
    let i = 0
    while (B > 0) {
      B--
      i++
    }

    return arr[i - 1]
  },
}
