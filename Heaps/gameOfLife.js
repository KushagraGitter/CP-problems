/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const RN = board.length,
    CN = board[0].length;
  const countBoard = [...Array(RN)].map(() => Array(CN).fill(0));

  function getNeighbors(RR, CC) {
    let total = 0;

    for (let r = RR - 1; r <= RR + 1; r++) {
      for (let c = CC - 1; c <= CC + 1; c++) {
        if (board[r] && board[r][c]) total++;
      }
    }
    return total - board[RR][CC]; // subtract self
  }

  // stores number of neigbors for each cell
  for (let r = 0; r < RN; r++) {
    for (let c = 0; c < CN; c++) {
      countBoard[r][c] = getNeighbors(r, c);
    }
  }

  for (let r = 0; r < RN; r++) {
    for (let c = 0; c < CN; c++) {
      const neigbors = countBoard[r][c];
      if (neigbors === 3) board[r][c] = 1;
      if (!board[r][c]) continue;
      if (neigbors < 2) board[r][c] = 0;
      else if (neigbors > 3) board[r][c] = 0;
    }
  }
};
