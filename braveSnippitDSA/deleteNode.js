var deleteNode = function(root, key) {
    
    function deleteNodeRec(root, key) {
        if(root === null) {
            return root;
        }
        
        if(root.val > key) {
            root.left = deleteNode(root.left, key)
        } else if(root.val < key) {
            root.right = deleteNode(root.rigth, key)
        }
        
        else {
            if(root.left === null) {
                return root.right
            }
            else if(root.right === null) {
                return root.left;
            }  
            
            root.val = findMin(root.right);
            root.right = deleteNode(root.right, root.val);
            
        }
        
      
        
        return root;
    }
    
    function findMin(root) {
        let minv = root.val;
        while (root.left != null)
        {
            minv = root.left.val;
            root = root.left;
        }
        return minv;
    }
    
    return deleteNodeRec(root, key);
};


// driver code 
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//[5,3,6,2,4,null,7]
//3
var root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(7);

console.log(deleteNode(root, 3))