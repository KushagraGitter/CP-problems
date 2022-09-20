	 function isBalanced(A){

        let isBalanced = true;

        function depth(root) {

            if(root == null) {
                return 0;
            }

            leftD = depth(root.left);
            rightD = depth(root.right);

            if(Math.abs(leftD - rightD) > 1) {
                isBalanced = false;
            }

            return leftD + rightD + 1;

        }

        depth(A);

        return isBalanced ? 1 : 0;
	}