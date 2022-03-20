var minDominoRotations = function (tops, bottoms) {
  let maxFreqTop = -Infinity;
  let maxFreqBottom = -Infinity;
  let maxFreqTopEl = 0;
  let maxFreqBottomEl = 0;
  let topFreqMap = new Map();
  let bottomFreqMap = new Map();
  debugger;
  for (let i = 0; i < tops.length; i++) {
    if (topFreqMap.get(tops[i])) {
      topFreqMap.set(tops[i], topFreqMap.get(tops[i]) + 1);
    } else {
      topFreqMap.set(tops[i], 1);
    }

    maxFreqTop = Math.max(maxFreqTop, topFreqMap.get(tops[i]));

    if (maxFreqTop === topFreqMap.get(tops[i])) {
      maxFreqTopEl = tops[i];
    }
  }

  for (let j = 0; j < bottoms.length; j++) {
    if (bottomFreqMap.get(bottoms[j])) {
      bottomFreqMap.set(bottoms[j], bottomFreqMap.get(bottoms[j]) + 1);
    } else {
      bottomFreqMap.set(bottoms[j], 1);
    }

    maxFreqBottom = Math.max(maxFreqBottom, bottomFreqMap.get(bottoms[j]));

    if (maxFreqBottom === bottomFreqMap.get(bottoms[j])) {
      maxFreqBottomEl = bottoms[j];
    }
  }

  const isTopArrayTobeSame = maxFreqTop >= maxFreqBottom;
  let rotationCount = 0;
  let finalMaxFeq = 0;

  if (isTopArrayTobeSame) {
    finalMaxFeq = maxFreqTop;
    rotationCount = countRotation(tops, bottoms, maxFreqTopEl);
  } else {
    finalMaxFeq = maxFreqBottom;
    rotationCount = countRotation(bottoms, tops, maxFreqBottomEl);
  }

  function countRotation(A, B, el) {
    let rotation = 0;
    for (let k = 0; k < A.length; k++) {
      if (A[k] !== el && B[k] === el) {
        rotation++;
      }
    }
    return rotation;
  }

  return rotationCount === tops.length - finalMaxFeq ? rotationCount : -1;
};

//driver Code

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));

console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));
