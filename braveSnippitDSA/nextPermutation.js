
var nextPermutation = function(nums) {
    let left = nums.length - 2;
    
    while(left >= 0 && nums[left] >= nums[left + 1]) {
        left--;
    }
    
    if(left >= 0) {
        let right = nums.length - 1;
        
        while(right >= 0 && nums[left] > nums[right]) {
            right--;
        }
        
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        
       
        
    }
     for(let i = left; i < nums.length; i++) {
            const temp = nums[i];
            nums[i] = nums[nums.length - 1 - i];
            nums[nums.length - 1 - i] = temp;
        }
    
    return nums;
};