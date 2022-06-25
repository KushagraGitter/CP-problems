module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let adjMat = new Map()

    for (let i = 0; i < A.length; i++) {
      if (adjMat.get(A[i]) === undefined) adjMat.set(A[i], [])
      adjMat.get(A[i]).push(i + 1)
    }

    let visMap = new Map()
    Array.from(adjMat.keys()).forEach(item => {
      visMap.set(item, false)
    })

    function dfs(adjMat, vis, s) {
      if (vis.get(s) === true) return true

      vis.set(s, true)
      if (adjMat.get(s)) {
        for (let i = 0; i < adjMat.get(s).length; i++) {
          dfs(adjMat, vis, adjMat.get(s)[i])
        }
      }

      return vis
    }
    dfs(adjMat, visMap, C)

    return visMap.get(B) ? 1 : 0
  },
}
