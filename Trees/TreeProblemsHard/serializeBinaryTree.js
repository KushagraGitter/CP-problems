// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       solve : function(A){
           let returnArr = [];
           let q = [];
           if(A === null) {
               return [-1];
           }
   
           q.push(A);
   
           while(q.length > 0) {
               let c_size = q.length;
   
               for(let i = 0; i < c_size; i++) {
                   let first = q.shift();
   
                   if(first === null) {
                       returnArr.push(-1)
                   } else {
                       if(first.left) {
                           q.push(first.left);
                       } else {
                           q.push(null)
                       }
                       if(first.right) {
                           q.push(first.right);
                       } else {
                           q.push(null)
                       }
                       
                       returnArr.push(first.data);
                   }
               }
           }
   
           return returnArr;
   
       }
   };
   