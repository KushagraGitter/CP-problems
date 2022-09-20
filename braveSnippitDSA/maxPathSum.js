 function maxPathSum(A){
       let value = -Infinity;

       function singleNodeMaxPath(root) {
           if(root === null) {
               return -Infinity;
           }

           let l = singleNodeMaxPath(root.left);
           let r = singleNodeMaxPath(root.right);

           let maxSingleNode = Math.max(Math.max(l, r), root.data);

           let maxTop = Math.max(l + r + root.data, maxSingleNode);

           value = Math.max(maxTop, value);

           return maxSingleNode; 

       }

       singleNodeMaxPath(A);

       return value;

	}