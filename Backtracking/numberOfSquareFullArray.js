module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    if (A.length < 2) {
      return 0;
    }
    let current = [];
    let valid = new Array(A.length).fill(true);
    let allPerm = new Set();
    let count = 0;

    function generate(current) {
      if (current.length == A.length) {
        if (!allPerm.has(current.join(','))) {
          allPerm.add(current.join(','));
          count++;
        }
        return;
      }

      for (let i = 0; i < A.length; i++) {
        if (!valid[i]) {
          continue;
        }
        valid[i] = false;
        current.push(A[i]);
        if (
          current.length === 1 ||
          (current.length > 1 &&
            isSquare(current[current.length - 1] + current[current.length - 2]))
        ) {
          generate(current);
        }
        valid[i] = true;
        current.pop();
      }
    }

    function isSquare(num) {
      const sqrt = Math.sqrt(num);
      return sqrt % 1 === 0;
    }

    // function findPerfectSquare(arrayValue) {
    //    let isPerfectSquare = true;
    //    for(let i = 1; i < arrayValue.length; i++) {
    //      const sum = parseInt(arrayValue[i - 1]) + parseInt(arrayValue[i]);
    //      const sqrt = Math.sqrt(sum);
    //      if(sqrt % 1 !== 0) {
    //        isPerfectSquare = false;
    //        return isPerfectSquare;
    //      }
    //    }
    //   return isPerfectSquare;
    // }

    // const setArray =  Array.from(allPerm.keys());

    // for(let i = 0; i < setArray.length; i++) {
    //   if(findPerfectSquare(setArray[i].split(','))) {
    //     count++;
    //   }
    // }
    generate([], 0);
    return count;
  },
};
