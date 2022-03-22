function singleElementInSortedArray(start, end) {
  if (start > end) {
    return -1;
  }
  debugger;
  const mid = Math.floor((start + end) / 2);

  if (A[mid] !== A[mid + 1] && A[mid] !== A[mid - 1]) {
    return A[mid];
  }

  if (mid % 2 === 0) {
    if (A[mid] === A[mid + 1]) {
      start = mid + 1;
    } else if (A[mid] === A[mid - 1]) {
      end = mid - 1;
    }
  } else {
    if (A[mid] === A[mid + 1]) {
      end = mid - 1;
    } else if (A[mid] === A[mid - 1]) {
      start = mid + 1;
    }
  }

  return singleElementInSortedArray(start, end);
}

let A = [2, 3, 3];

//driver code

console.log(singleElementInSortedArray(0, A.length - 1));
