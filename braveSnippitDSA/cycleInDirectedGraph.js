 function cycleInDirectedGraph(A, B){
    
        let adjMat = new Map();

        for(let i = 0; i < B.length; i++) {
            if(adjMat.get(B[i][0]) === undefined) 
                adjMat.set(B[i][0], []);
                adjMat.get(B[i][0]).push(B[i][1])
        }

  let visMap = new Map();
  let dfsStack = new Map();    
   Array.from(adjMat.keys()).forEach((item) => {
       
      visMap.set(item, false)
      dfsStack.set(item, false)
       
   })
  
  function dfs(adjMat, vis, dfsStack, s) {
      
      vis.set(s, true);
      dfsStack.set(s, true);
      
      for(let i = 0; i < adjMat.get(s).length; i++) {
          
          if(vis.get(adjMat.get(s)[i]) === false){
               if(dfs(adjMat, vis, dfsStack, adjMat.get(s)[i])) {
                return true;
            }
          } else if (dfsStack.get(adjMat.get(s)[i]) === true)  {
              return true;
          }   
      }

      dfsStack.set(s, false);
  
      return false;
  }

    

		 
  for([key, value] of visMap.entries()) {
     if(value === false) {
        if( dfs(adjMat, visMap, dfsStack, key)) {
			return 1
		}
        
     }
     
  }
        return 0;
	}