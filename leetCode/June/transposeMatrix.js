//https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (A) {
  if (A.length === 0) return [];
  var w = A[0].length,
    h = A.length;
  var desArr = [];
  for (var i = 0; i < w; i++) {
    desArr[i] = [];
    for (var j = 0; j < h; j++) {
      desArr[i][j] = A[j][i];
    }
  }
  return desArr;
};
