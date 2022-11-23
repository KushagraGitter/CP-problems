//https://leetcode.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let seen = new Set();
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      let cell = board[i][j];
      if(cell != '.') {
          let colCell = `cell: ${j} ${cell}`;
          let rowCell = `row: ${i} ${cell}`;
          let subBoxCell = `subBox: ${parseInt(i/3)}-${parseInt(j/3)} ${cell}`;
      
          if(!seen.has(colCell) && !seen.has(rowCell) && !seen.has(subBoxCell)) {
              seen.add(colCell);
              seen.add(rowCell);
              seen.add(subBoxCell);
          }
          else 
              return false;
        }
    }
  }
  return true;
};