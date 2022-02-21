// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       verticalOrderTraversal : function(A){
   let returnArray  = [];
           let Q = [];
           let nodeValueMap = new Map()
           // check if tree  root is null return null
           if(A === null) return null;
   
           //add root node to the Q
           Q.push({node: A, d: 0});
   
           while(Q.length > 0) {
               let CSize  = Q.length;
   
               for(i = 0; i < CSize; i++) {
   
                   let qObj = Q.shift();
                   let node = qObj.node;
                   let distance = qObj.d;
   
                   if(nodeValueMap.get(distance)) {
                       nodeValueMap.get(distance).push(node.data);
                   } else {
                       nodeValueMap.set(distance, [node.data]);
                   }
   
                   let left = node.left;
   
                   if(left !== null) {
                       Q.push({node: left, d: distance-1});
                   }
                   let right = node.right;
                   if(right !== null) {
                       Q.push({node: right, d: distance + 1});
                   }
                   
               }
              
               //returnArray.push(tempArr);
           }
               Array.from(nodeValueMap.keys()).sort((a,b) => a - b).forEach((key) => {
                   returnArray.push(nodeValueMap.get(key));
               })
   
           return returnArray;
       }
   };
   