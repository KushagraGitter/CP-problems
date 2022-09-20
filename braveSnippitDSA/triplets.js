var arithmeticTriplets = function(nums, diff) {
    let map = new Map()
    const n = nums.length
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      map.set(nums[i], i)
    }
  

    for (let j = 0; j < n; j++) {
      if ( map.has(diff + nums[j]) &&  map.has(nums[j] - diff)) {
         count++;
      }
    }
   
 


    return count;
};