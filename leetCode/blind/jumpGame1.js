/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  // we can solve this using greedy sol 
  // we can check from the goal and shift the goal to start if we can reach the goal from i -1 index.
  
  let goal = nums.length - 1;
  
  for(let i = nums.length - 2; i >= 0; i--) {
      if(i  +  nums[i] >= goal) {
          goal = i;
      }
  }
  
  return goal === 0;
};
  
  //[2, 3, 1, 1, 4]