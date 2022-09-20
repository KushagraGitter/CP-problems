	function CycleInUndirectedGraph(A, B){

        let adjMat = new Map();

        for(let i = 0; i < B.length; i++) {
            if(adjMat.get(B[i][0]) === undefined) 
                adjMat.set(B[i][0], []);
                adjMat.get(B[i][0]).push(B[i][1])

        if(adjMat.get(B[i][1]) === undefined) 
                adjMat.set(B[i][1], []);
                adjMat.get(B[i][1]).push(B[i][0])
        }

  let visMap = new Map();
   Array.from(adjMat.keys()).forEach((item) => {
      visMap.set(item, false)
   })
  
  function dfs(adjMat, vis, s, p) {
      vis.set(s, true);
      for(let i = 0; i < adjMat.get(s).length; i++) {
          if(vis.get(adjMat.get(s)[i]) === true && adjMat.get(s)[i] !== p) {
              return true;
          }
          if(vis.get(adjMat.get(s)[i]) === false){
               if(dfs(adjMat, vis, adjMat.get(s)[i], s)) {
                return true
            }
          }     
      }
  
      return false;
  }

		 
  for([key, value] of visMap.entries()) {
     if(value === false) {
        if( dfs(adjMat, visMap, key, null)) {
			return 1
		}
        
     }
     
  }
        return 0;
	}