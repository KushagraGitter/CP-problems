var NumMatrix = function (G) {
  const rs = G.length;
  const cs = !rs ? 0 : G[0].length;
  this.M = new Array(rs + 1).fill().map((_) => new Array(cs + 1).fill(0));
  for (let r = 1; r <= rs; ++r)
    for (let c = 1; c <= cs; ++c)
      this.M[r][c] =
        G[r - 1][c - 1] +
        this.M[r - 1][c] +
        this.M[r][c - 1] -
        this.M[r - 1][c - 1]; // remove doubly added reference
};
NumMatrix.prototype.sumRegion = function (r0, c0, r1, c1, M = this.M) {
  ++r0;
  ++c0;
  ++r1;
  ++c1; // make indices line up with DP array
  return (
    M[r1][c1] - // take sum from (0,0) to corner
    M[r0 - 1][c1] -
    M[r1][c0 - 1] + // remove sides
    M[r0 - 1][c0 - 1]
  ); // add back doubly removed reference
};
