/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  let A = position;
  let B = m;
  A = A.sort((a, b) => a - b);

  const maxAns = (A[A.length - 1] - A[0]) / (B - 1);

  let high = maxAns;
  let low = 1;
  let retAns = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (checkArrangementPossible(mid)) {
      retAns = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return retAns;

  function checkArrangementPossible(distance) {
    let cows = 1;
    let lastPos = A[0];

    for (let i = 1; i < A.length; i++) {
      if (A[i] - lastPos >= distance) {
        cows++;
        lastPos = A[i];
        if (cows >= B) {
          return true;
        }
      }
    }

    return false;
  }
};
