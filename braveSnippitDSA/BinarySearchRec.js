
function BinarySearch(A, start, end, k) {

    if(start > end) {
        return -1;
    }

    mid = Math.floor((start + end)/2);

    if(A[mid] === k) {
        return mid;
    } else if(A[mid] < k) {
      return BinarySearch(A, mid + 1, end, k);
    } else {
      return BinarySearch(A, start, mid - 1, k);
    }

  
}