module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (a, m) {
    let m0 = m;
    let y = 0;
    let x = 1;

    if (m == 1) return 0;

    while (a > 1) {
      // q is quotient
      let q = parseInt(a / m);
      let t = m;

      // m is remainder now,
      // process same as
      // Euclid's algo
      m = a % m;
      a = t;
      t = y;

      // Update y and x
      y = x - q * y;
      x = t;
    }

    // Make x positive
    if (x < 0) x += m0;

    return x;
  },
};
