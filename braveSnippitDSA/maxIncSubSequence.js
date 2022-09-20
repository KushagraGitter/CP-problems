var lengthOfLIS = function(nums) {
    let subSequence = -Infinity;
    
    for(let i = 1; i < nums.length; i++) {
        let currentMax = nums[i];
        let subSeq = 1;
        for(let j = 0; j < i; j++) {
            if(currentMax < nums[j]) {
                subSeq = subSeq + 1;
                currentMax = nums[j];
            }
        }
        subSequence = Math.max(subSequence, subSeq)
    }
    
    return subSequence;

// if (!nums.length) return 0;

//   let arr = new Array(nums.length).fill(1);
	
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
//     }
//   }
  
//   return Math.max(...arr);
};