/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const DIR = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
var nearestExit = function (maze, entrance) {
  const [row, col] = entrance;
  const que = [[row, col, 1]];
  maze[row][col] = '+'; // mark as visited.

  const ROWS = maze.length;
  const COLS = maze[0].length;

  while (que.length) {
    const [row, col, steps] = que.shift();
    for (const dir of DIR) {
      const newRow = row + dir[0];
      const newCol = col + dir[1];

      if (newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS)
        continue;
      if (maze[newRow][newCol] == '+') continue;

      if (
        newRow == 0 ||
        newCol == 0 ||
        newRow == ROWS - 1 ||
        newCol == COLS - 1
      )
        return steps;

      if (maze[newRow][newCol] === '.') {
        maze[newRow][newCol] = '+'; // mark as visited.
        que.push([newRow, newCol, steps + 1]);
      }
    }
  }
  return -1;
};
