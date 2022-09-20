
function countTheNodeAtD(root,D) {
    let count = 0;

    function preOrder(root, d) {
        if (root === null) return null;
        if (d === D) count++;

        preOrder(root.left, d + 1 );
        preOrder(root.right, d + 1 ); 
    }

    preOrder(root, 0);
    return count;
}