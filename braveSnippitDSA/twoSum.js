var twoSum = function(nums, target) {
    let hMap = new Map();
    let returnArray = [];
    let start = Infinity;
    let end = Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(hMap.get(nums[i]) === undefined)
            hMap.set(nums[i], i + 1)
    }
    
    for(let j = 0; j < nums.length; j++) {
        if(hMap.get(target - nums[j]) && hMap.get(target - nums[j]) > j) {
            if(hMap.get(target - nums[j]) < end) {
                start = j;
                end = hMap.get(target - nums[j]);
            }
            
        }
    }
    
    return [start + 1, end];
    
    
};