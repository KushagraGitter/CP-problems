module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    // for odd edges it will require to color a graph 3 colors and for even it will require 2 colors
    return A % 2 === 0 ? 2 : 3;
  },
};
