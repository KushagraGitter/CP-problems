function findTriplets(arr, n) {
  let found = false;
  let returnArr = [];
  // sort array elements
  arr.sort((a, b) => a - b);
  arr = [...new Set(arr)];
  for (let i = 0; i < n - 1; i++) {
    // initialize left and right
    let l = i + 1;
    let r = n - 1;
    let x = arr[i];
    while (l < r) {
      if (x + arr[l] + arr[r] == 0) {
        returnArr.push([x, arr[l], arr[r]]);
        l++;
        r--;
        found = true;
      }

      // If sum of three elements is less
      // than zero then increment in left
      else if (x + arr[l] + arr[r] < 0) l++;
      // if sum is greater than zero than
      // decrement in right side
      else r--;
    }
  }

  if (found == false) return -1;
  else return returnArr;
}

// Driven source

let arr = [1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3];
let n = arr.length;
console.log(findTriplets(arr, n));
