function addNodeFloorAndCeil(root, value) {
    let tempArray = [];
    let tempNode;
    let floor = -1;
    let ceil = -1;

    if(root === null) { 
        tempArray.push(-1);
        tempArray.push(-1);
        return tempArray;
    } else {
        while(root !== null) {
            tempNode = root;
            if(root.data === value) {
                tempArray.push(root.data);
                tempArray.push(root.data);
                return tempArray;
            } else if(root.data > value) {
                ceil = root.data;
                root = root.left;
            } else if(root.data < value) {
                floor = root.data;
                root = root.right;
            }
        }
        tempArray.push(floor);
        tempArray.push(ceil);

        return tempArray;
    }
}