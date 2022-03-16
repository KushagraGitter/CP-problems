function twoSum(A, B) {
  let left = 0;
  let right = A.length - 1;
  let count = 0;

  while (left !== right) {
    if (A[left] + A[right] > B) {
      right--;
    } else if (A[left] + A[right] < B) {
      left++;
    } else {
      left++;
      count++;
    }
  }
  return count;
}

console.log(twoSum([1, 2, 3, 4], 4));
