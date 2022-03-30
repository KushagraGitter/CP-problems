function sqrt(A) {
  let retAns = A;
  let start = 1;
  let end = A;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid * mid === A) {
      return mid;
    } else if (mid * mid > A) {
      end = mid - 1;
    } else if (mid * mid < A) {
      retAns = mid;
      start = mid + 1;
    }
  }

  return retAns;
}
