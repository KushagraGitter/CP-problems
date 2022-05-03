/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (A) {
  // for(let i = 0; i < A.length; i++) {
  // A[i] =  A[i].split('');
  // }

  function sudokuSolver(idx) {
    if (idx === 81) {
      return true;
    }
    const row = Math.floor(idx / 9);
    const col = idx % 9;

    if (A[row][col] !== '.') {
      return sudokuSolver(idx + 1);
    }

    for (let i = 1; i <= 9; i++) {
      if (checkIsValid(`${i}`, row, col)) {
        A[row][col] = `${i}`;
        if (sudokuSolver(idx + 1)) {
          return true;
        }
        A[row][col] = '.';
      }
    }
  }

  function checkIsValid(value, row, col) {
    let isValid = true;

    for (let i = 0; i < 9; i++) {
      if (A[row][i] === value) {
        isValid = false;
        return;
      }
    }

    if (isValid) {
      for (let i = 0; i < 9; i++) {
        if (A[i][col] === value) {
          isValid = false;
          return;
        }
      }
    }

    if (isValid) {
      const x = row - (row % 3);
      const y = col - (col % 3);

      for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
          if (A[i][j] === value) {
            isValid = false;
            return;
          }
        }
      }
    }

    return isValid;
  }

  sudokuSolver(0);
  //A = A.map((item) => item.join(""))
};
