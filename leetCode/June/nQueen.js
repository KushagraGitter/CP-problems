/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (A) {
  let vigRow = new Array(A).fill(0);
  let vigCol = new Array(A).fill(0);
  let d1 = new Array(2 * A - 1).fill(0);
  let d2 = new Array(2 * A - 1).fill(0);
  let final = [];
  let finalreturnArray = [];

  function generate(set, idx) {
    if (idx === A) {
      final.push([...set]);
      return;
    }

    for (let i = 0; i < A; i++) {
      if (
        vigRow[idx] !== 1 &&
        vigCol[i] !== 1 &&
        d1[i + idx] !== 1 &&
        d2[A - 1 + i - idx] !== 1
      ) {
        vigRow[idx] = 1;
        vigCol[i] = 1;
        d1[i + idx] = 1;
        d2[A - 1 + i - idx] = 1;
        set.push([idx, i]);
        generate(set, idx + 1);
        set.pop();
        vigRow[idx] = 0;
        vigCol[i] = 0;
        d1[i + idx] = 0;
        d2[A - 1 + i - idx] = 0;
      }
    }
  }

  generate([], 0);

  for (let i = 0; i < final.length; i++) {
    let returnArray = [];
    for (let j = 0; j < final[i].length; j++) {
      let tempArray = new Array(final[i].length).fill('.');
      tempArray[final[i][j][1]] = 'Q';
      returnArray.push(tempArray.join(''));
    }
    finalreturnArray.push(returnArray);
  }
  return finalreturnArray.reverse();
};
