let subSet = [];
function subsetWithBackTracking(A, idx) {
   
    if(idx === A.length) {
         console.log(subSet)
        return
    }


    // for(let i = idx; i < A.length; i++) {
    //    subSet.push(A[i]);
    //    subsetWithBackTracking(A, i + 1);
    //    subSet.pop(); 
    // }

    subSet.push(A[idx]);
    subsetWithBackTracking(A, idx + 1);
    subSet.pop();
    subsetWithBackTracking(A, idx + 1);
}