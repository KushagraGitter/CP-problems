function kDifference(nums, k) {
     let count = 0;
    const sArray = nums.sort();
    let i = 0, j = 1;
    
    for(let l = 0; l < nums.length; l++) {
        const diff = Math.abs(nums[i] - nums[j]);
        
        if(i < j && diff === k) {
           count++;
           i++;
           j++;
        } else if (diff < k) {
           j++;
        } else {
           i++;
        }
    }
   
    
    return count;
}