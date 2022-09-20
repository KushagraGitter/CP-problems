var maximumSum = function(nums) {
    let map = new Map();
    let maxSum = -1;
    
    for(let i = 0; i < nums.length; i++) {
       const sumD =  sumOfDigit(nums[i])
       if(map.has(sumD)) {
           let list = map.get(sumD)
             for(let j = 0; j < list.length; j++) {
                maxSum = Math.max(maxSum, (list[j] + nums[i])); 
             }    
           map.get(sumD).push(nums[i])
       } else {
           map.set(sumD, [nums[i]])
       }
    }
        
    function sumOfDigit(num) {
        let sum = 0;
        while(num !== 0) {
            sum = sum + (num % 10)
            num = Math.floor(num / 10)
        }
        return sum;
    }   
    
    return maxSum
};