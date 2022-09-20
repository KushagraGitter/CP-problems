function isValidBST(A) {
    let isValid = 0;
           function validBST(root, minValue, maxValue) {
               if(root === null) {
                   return null;
               }
               isValid = root.data > minValue && root.data < maxValue ? 1 : 0;
               if(isValid === 0) {
                   return 0;
               }
               validBST(root.left, minValue, root.data);
               validBST(root.right, root.data, maxValue);
            }
            validBST(A, -Infinity, Infinity);

            return isValid;
}