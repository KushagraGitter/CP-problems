class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let result = [];

  function dfs(node, sum) {
    if(node.left === null && node.right === null) {
       result.push(sum);
      return
    }

    sum = sum + node.value
    dfs(node.left, sum);
   
    dfs(node.right, sum);
   
  }

  dfs(root, 0)
  return result;

}

let root = new BinaryTree(1)
root.left = new BinaryTree(2)
root.left.left = new BinaryTree(3);
root.left.right = new BinaryTree(4)

console.log(branchSums(root));