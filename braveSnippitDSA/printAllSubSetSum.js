let A = [1, 2, 3, 3]
function printAllSubSetSum(subSet, idx) {
    if(idx === A.length) {
        console.log([...subSet]);
        return;
    }
    
    subSet.push(A[idx]);
    printAllSubSetSum(subSet, idx + 1);
    subSet.pop();
    printAllSubSetSum(subSet, idx + 1);
}

printAllSubSetSum([], 0);