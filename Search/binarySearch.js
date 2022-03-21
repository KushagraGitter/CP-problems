function binarySearch(start, end, B) {
  if (start >= end) {
    return end + 1;
  }
  debugger;
  const mid = Math.floor((start + end) / 2);

  if (A[mid] === B) {
    return mid;
  } else if (A[mid] > B) {
    return binarySearch(start, mid - 1, B);
  } else {
    return binarySearch(mid + 1, end, B);
  }
}

// driver code
let A = [1];
let B = 1;

console.log(binarySearch(0, A.length - 1, B));
