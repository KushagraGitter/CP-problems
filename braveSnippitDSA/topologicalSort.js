function topologicalSortOutdegree(B) {
    let adjMat = new Map();
    let elStack = [];
    let visMap = new Map();
    
    for(let i = 0; i < B.length; i++) {
        if(adjMat.get(B[i][0]) === undefined) 
            adjMat.set(B[i][0], []);
            adjMat.get(B[i][0]).push(B[i][1])
    }
    
   Array.from(adjMat.keys()).forEach((item) => {
      visMap.set(item, false)
   })
  
  function dfs(adjMat, vis, s) {
      vis.set(s, true);

     if(adjMat.get(s)) {
         for(let i = 0; i < adjMat.get(s).length; i++) {
         if(!vis.get(adjMat.get(s)[i])) {
            dfs(adjMat, vis, adjMat.get(s)[i]) 
         }
        } 
     }

      elStack.push(s);
    }  

    for([key, value] of visMap) {
        if(!value) {
           dfs(adjMat, visMap, key) 
        }
    }

    

    return elStack.reverse();
}  


    
