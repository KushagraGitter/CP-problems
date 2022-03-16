function pairForGivenDiffrence(A, B) {
  let count = 0;
  let hm = new Map();

  for (let i = 0; i < A.length; i++) {
    if (hm.has(A[i])) {
      hm.set(A[i], hm.get(A[i]) + 1);
    } else {
      hm.set(A[i], 1);
    }
  }
  A = [...new Set(A)];
  for (let j = 0; j < A.length; j++) {
    const sum = A[j] + B;

    if (B == 0) {
      if (hm.get(sum) > 1) {
        count++;
        hm.set(sum, hm.get(sum) - 1);
      }
    } else {
      if (hm.get(sum) >= 1) {
        count++;
        hm.set(sum, hm.get(sum) - 1);
      }
    }
  }

  return count;
}

console.log(
  pairForGivenDiffrence(
    [
      8, 5, 1, 10, 5, 9, 9, 3, 5, 6, 6, 2, 8, 2, 2, 6, 3, 8, 7, 2, 5, 3, 4, 3,
      3, 2, 7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3,
    ],
    3
  )
);
