//https://leetcode.com/problems/word-search/
var exist = function (board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== word[0]) continue;
      if (dfs(board, r, c, word)) return true;
    }
  }
  return false;
};

function dfs(g, r, c, w, idx = 0) {
  if (idx === w.length) return true;
  if (r < 0 || r >= g.length || c < 0 || c >= g[r].length) return false;
  if (g[r][c] !== w[idx]) return false;
  if (g[r][c] === 0) return false;
  const temp = g[r][c];
  g[r][c] = 0;
  const found =
    dfs(g, r + 1, c, w, idx + 1) ||
    dfs(g, r - 1, c, w, idx + 1) ||
    dfs(g, r, c + 1, w, idx + 1) ||
    dfs(g, r, c - 1, w, idx + 1);
  g[r][c] = temp;
  return found;
}
