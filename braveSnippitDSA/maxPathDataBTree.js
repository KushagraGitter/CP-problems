function maxPathDataBTree(root) {
    if(root === null) {
        return 0;
    }

    return root.data + Math.max(maxPathDataBTree(root.left), maxPathDataBTree(root.right));
}