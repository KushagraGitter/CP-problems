var serialize = function(root) {
  // we can use level order traversal to store a tree in form of a string
  let q = [];
  let serializeStr = '';  
  q.push(root);
    serializeStr = root.val;
    
    while(q.length > 0) {
        const node = q.shift();
        if(node.left) {
            q.push(node.left);
            serializeStr = `${serializeStr},${node.left.val}`;
        } else {
            serializeStr = `${serializeStr},$`
        }
        if (node.right) {
            q.push(node.right)
             serializeStr = `${serializeStr},${node.right.val}`;
        } else {
             serializeStr = `${serializeStr},$`
        }
    }
    
    return serializeStr;
};

var deserialize = function(data) {
    let q = []
    let dataArray = data.split(',')
    let root = new TreeNode(parseInt(dataArray.shift()))
  
    q.push(root)

    while(q.length > 0 && dataArray.length > 0) {
      const node = q.shift();

      const l = dataArray.shift();
      
        if(l !== '$' && l !== undefined) {
          node.left = new TreeNode(parseInt(l))
          q.push(node.left)
        } 

      const r = dataArray.shift();
        if(r !== '$' && r !== undefined) {
          node.right = new TreeNode(parseInt(r))
          q.push(node.right)
        } 
    }

  return root;
};

// driver code 
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//[5,3,6,2,4,null,7]
//3
var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
// root.left.left = new Node(2);
// root.left.right = new Node(4);
root.right.right = new TreeNode(9);
root.right.left = new TreeNode(8);
root.right.left.left = new TreeNode(10);
root.right.left.right = new TreeNode(11);

const serializeStr = serialize(root);
deserialize(serializeStr);