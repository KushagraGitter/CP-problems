let A = [1, 2, 2]
function printAllPermutations(idx) {
    if(idx === A.length) {
        console.log([...A]);
        return;
    }
    
    for(let i = idx; i < A.length; i++) {
        swap(i, idx);
        printAllPermutations(idx + 1);
        swap(idx, i);
    }
}

function swap(i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

printAllPermutations(0)