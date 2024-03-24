/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let ans = 0 ;
    function getSmallerNumberCount(num) {
        let count = 0;
        
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] <= num) {
                count++;
            }
        }
        return count;
    }
    
    function bs(start, end) {
        if(start > end) {
            return -1;
        }
        
        const mid = Math.floor((start + end) / 2);
        
        let count = getSmallerNumberCount(mid);
        
        if(count > mid) {
            ans = mid;
            return bs(start, mid - 1);
        } else {
            return bs(mid + 1, end)
        }
    }
    bs(1, nums.length)
    return ans;
};

//[1,3,4,2,2]