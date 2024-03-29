// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }


    //param A : root node of tree
    //return a array of integers
       function leftView(A){
           let returnArray  = [];
           let Q = [];
           // check if tree  root is null return null
           if(A === null) return null;
   
           //add root node to the Q
           Q.push(A);
            debugger;
           while(Q.length > 0) {
               let tempArr = [];
               let CSize  = Q.length;
               for(i = 0; i < CSize; i++) {
                   let node = Q.shift();
                   tempArr.push(node.data);
                   let left = node.left;
                   if(left !== null) {
                       Q.push(left);
                   }
                   let right = node.right;
                   if(right !== null) {
                       Q.push(right)
                   }
                 debugger;  
               }
               returnArray.push(tempArr[0]);
           }
   
           return returnArray;
       }


   class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

var root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);
   
console.log(leftView(root))