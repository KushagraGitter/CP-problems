var reachableNodes = function(n, edges, restricted) {
    let adjMat = new Map();
    let resNode = new Set(restricted);
    let count = 0;
    adjMat.set(0, [])
    for(let i = 0; i < edges.length; i++) {
      if(!resNode.has(edges[i][1]) && !resNode.has(edges[i][0])) {

              if (adjMat.get(edges[i][0]) === undefined) adjMat.set(edges[i][0], [])
                  adjMat.get(edges[i][0]).push(edges[i][1])
            
              if (adjMat.get(edges[i][1]) === undefined) adjMat.set(edges[i][1], [])
                  adjMat.get(edges[i][1]).push(edges[i][0])
            
      }

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

    dfs(adjMat, visMap, 0)

    for(const [k, v] of visMap) {
        if(v) {
            count++;
        }
    }
  
   return count;
};