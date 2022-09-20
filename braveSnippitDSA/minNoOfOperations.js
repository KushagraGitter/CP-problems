var minOperations = function(nums, x) {
    // we have to maximize the subarray sum totalSum - x
    
    let sum1 = 0, len = -1, sum2 = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum1 = sum1 + nums[i];
    } 
    
    sum1 = sum1 - x; // this is the remaining sub array sum and we need to maximize the length of the sub array;
    
    if(sum1 === 0) return nums.length;
    
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        sum2 = sum2 + nums[j];
        
        while(i < nums.length && sum2 > sum1) {
            sum2 = sum2 - nums[i]
             i++;}
            if(sum2 === sum1) {
                len = Math.max(len, j - i + 1);
            }
           
        
    }
    
    return len === -1 ? -1 : nums.length - len;
    
    
};