function leftMaxRigtMinValueTree(root) {
    if(root === null) {
        return 0;
    }

    let maxLeft  = leftMaxRigtMinValueTree(root.left);
    let maxRight = leftMaxRigtMinValueTree(root.right);

    return Math.max(Math.max(maxLeft, maxRight), root.data);

}