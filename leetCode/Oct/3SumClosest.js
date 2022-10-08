//https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let closest = Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1
        
        while(right > left) {
            let localSum = nums[i] + nums[left] + nums[right];
            
            if(Math.abs(target - localSum) < Math.abs(target - closest)) {
                closest = localSum
            }
            
            if(localSum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return closest;
};
//TC O(n2)
//SC O(1)