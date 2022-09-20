function pathSum(root, sum) {
    
    let ans = false;

    if(root === null) {
        return false;
    }

    let subSum = sum - root.data

    if(subSum === 0 && root.left === null && root.right === null) {
        ans = true;
    }

    if(root.left !== null){
        ans = ans || pathSum(root.left, subSum);
    }
    
     if(root.right !== null){
        ans = ans || pathSum(root.right, subSum);
    }
    

    return ans;
}