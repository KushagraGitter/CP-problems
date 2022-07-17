// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  solve: function (A) {
    let ans = []

    function leftBoundary(node) {
      if (node === null) {
        return
      }
      ans.push(node.data)
      if (node.left) leftBoundary(node.left)
      else leftBoundary(node.right)
    }

    function bottom(node) {
      if (node === null) {
        return
      }
      if (node.left === null && node.right === null) {
        if (ans[ans.length - 1] !== node.data) {
          ans.push(node.data)
        }
      }
      bottom(node.left)
      bottom(node.right)
    }

    function rightBoundary(node) {
      if (node === null) {
        return
      }

      if (node.right !== null) {
        rightBoundary(node.right)
      } else {
        rightBoundary(node.left)
      }

      if (ans[ans.length - 1] !== node.data) {
        ans.push(node.data)
      }
    }

    ans.push(A.data)
    leftBoundary(A.left)
    bottom(A)

    rightBoundary(A.right)

    return ans
  },
}
