function maxSumArraySum(arr) {
    let currMax = 0;
    let globalMax = 0;

    for(let i = 0; i < arr.length; i++) {
        currMax = currMax + arr[i];

        if(currMax > globalMax) {
            globalMax = currMax;
        } 

        if (currMax < 0) {
            currMax = 0;
        }
    }

    return globalMax;
}