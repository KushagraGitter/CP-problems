// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //param C : integer
    //return a array of integers
       solve : function(A, B, C){
             let arr = [];
       let count = 0;
       let returnArray = [];
   
       function path(root, node, arr) {
   
           if(root === null) return false;
   
           if(root.data === node) {
               arr.push(root);
               return true;
           }
   
           if(path(root.left, node, arr) || path(root.right, node, arr)) {
               arr.push(root);
               return true
           } else {
               return false;
           }
       }
   
       function countTheNodeAtD(root,D) {
           let count = 0;
   
           function preOrder(root, d) {
               if (root === null) return null;
               if (d === D){
                   returnArray.push(root.data);
                   count++
               };
   
               preOrder(root.left, d + 1 );
               preOrder(root.right, d + 1 ); 
           }
   
           preOrder(root, 0);
           return count;
       }
   
       path(A, B, arr);
   
       countTheNodeAtD(arr[0], C);
   
       for(let i = 1; i < arr.length; i++) {
   
           let currNode = arr[i];
           let prevNode = arr[i-1];
           if(i === C) { 
               returnArray.push(arr[i].data)
           } else {
               if(currNode.left == prevNode) {
                   countTheNodeAtD(currNode.right, C - (i + 1));
           }   else {
                   countTheNodeAtD(currNode.left, C - (i + 1));
           }
           }
          
   
       }
       return returnArray;
       }
   };
   