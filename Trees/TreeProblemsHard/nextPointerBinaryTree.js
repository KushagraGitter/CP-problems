// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//return nothing
	connect : function(A){
        let curr = A;

        while(curr !== null) {
            let temp = curr; 

            while(temp !== null) {

                if(temp.right !== null) {
                    temp.left.next = temp.right;
                }

                if(temp.next !== null && temp.next.left !== null) {
                    temp.right.next = temp.next.left;
                }

                temp = temp.next;
            }

            curr = curr.left;
        }

        return A;
	}
};
