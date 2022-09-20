var jump = function(nums) {
    let l = 0, r = 0;
    let res = 0;
   
    while(r < nums.length - 1 && res <= nums.length) {
        let farthest = 0;
        for(let j = l; j < r + 1; j++) {
            farthest = Math.max(farthest, j + nums[j]);
        }
        
        l = r + 1;
        r = farthest;
        res++;
    }
    
    return res < nums.length - 1 ? res : -1;
};