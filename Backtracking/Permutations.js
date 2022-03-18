function permutations(res, nums, l, h) {
  // Base case
  // Add the vector to result and return
  if (l == h) {
    res.push([...nums]);
    //console.log(nums);
    return;
  }

  // Permutations made
  for (let i = l; i <= h; i++) {
    // Swapping
    let temp = nums[l];
    nums[l] = nums[i];
    nums[i] = temp;

    // Calling permutations for
    // next greater value of l
    permutations(res, nums, l + 1, h);

    // Backtracking
    temp = nums[l];
    nums[l] = nums[i];
    nums[i] = temp;
  }
}

// Function to get the permutations
function permute(nums) {
  // Declaring result variable
  let x = nums.length - 1;
  let res = [];

  // Calling permutations for the first
  // time by passing l
  // as 0 and h = nums.size()-1
  permutations(res, nums, 0, x);
  return res;
}

// Driver Code
let nums = [1, 2, 3];
let res = permute(nums);
console.log(res);
