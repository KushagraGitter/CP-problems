function findClosestValueInBst(tree, target) {
  // Write your code here.
  let absValue = Infinity;
  let node = 0;  
  function inorder(root) {
    if(root === null) {
      return;
    }
    if(root.value !== null){
         absValue = Math.min(absValue, Math.abs(root.value - target));
        if(absValue === Math.abs(root.value - target))
            node = root.value
    }
  
    inorder(root.left);
    inorder(root.right);
  }
  inorder(tree)  
  return node;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// driver code 
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;
  const actual = findClosestValueInBst(root, 12);
  console.log(actual);