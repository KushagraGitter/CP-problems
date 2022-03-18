function pairs_count(arr, n, sum) {
  // To store the count of pairs
  let ans = 0;
  debugger;
  // Take two pointers
  let i = 0,
    j = n - 1;

  while (i < j) {
    // If sum is greater
    if (arr[i] + arr[j] < sum) i++;
    // If sum is lesser
    else if (arr[i] + arr[j] > sum) j--;
    // If sum is equal
    else {
      // Find the frequency of arr[i]
      let x = arr[i],
        xx = i;
      while (i < j && arr[i] == x) i++;

      // Find the frequency of arr[j]
      let y = arr[j],
        yy = j;
      while (j >= i && arr[j] == y) j--;

      // If arr[i] and arr[j] are same
      // then remove the extra number counted
      if (x == y) {
        let temp = i - xx + yy - j - 1;
        ans += (temp * (temp + 1)) / 2;
      } else ans += (i - xx) * (yy - j);
    }
  }

  // Return the required answer
  return ans;
}

console.log(pairs_count([2, 3, 3, 5, 7, 7, 8, 9, 9, 10, 10], 11, 11));
