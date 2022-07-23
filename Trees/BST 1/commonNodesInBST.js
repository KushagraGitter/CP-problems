// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return an integer
  solve: function (A, B) {
    let a = []
    let b = []

    function inorderA(root) {
      if (root === null) {
        return
      }

      inorderA(root.left)
      a.push(root.data)
      inorderA(root.right)
    }

    function inorderB(root) {
      if (root === null) {
        return
      }

      inorderB(root.left)
      b.push(root.data)
      inorderB(root.right)
    }

    inorderA(A)
    inorderB(B)

    let i = 0
    j = 0
    let sum = 0
    const mod = Math.pow(10, 9) + 7
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        i++
      } else if (a[i] > b[j]) {
        j++
      } else {
        sum = (a[i] + sum) % mod
        i++
        j++
      }
    }

    return sum
  },
}
