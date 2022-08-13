module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  maxone: function (A, B) {
    let p1 = 0,
      p2 = 0,
      cnt = 0,
      max = 0,
      len = A.length
    let maxP1 = 0,
      maxP2 = 0,
      slide = 0
    while (p2 < len) {
      if (A[p2] == 0) {
        cnt++
        while (cnt > B) {
          if (A[p1] == 0) {
            cnt--
          }
          p1++
          slide--
        }
      }
      slide++
      if (slide > max) {
        max = slide
        maxP1 = p1
        maxP2 = p2
      }
      p2++
    }
    let response = new Array()
    for (let i = maxP1; i <= maxP2; i++) {
      response.push(i)
    }
    return response
  },
}
