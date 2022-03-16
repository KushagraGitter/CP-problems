function containerWithMosstWater(A) {
  const n = A.length;
  let left = 0;
  let right = n - 1;
  let ans = -Infinity;

  while (left !== right) {
    ans = Math.max(ans, (right - left) * Math.min(A[left], A[right]));

    if (Math.min(A[left], A[right]) === A[right]) {
      right--;
    } else {
      left++;
    }
  }

  return ans === -Infinity ? 0 : ans;
}

console.log(containerWithMosstWater([1]));
