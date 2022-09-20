function pathInADirectedGraph(A, B){
        let adjMat = new Map();

        for(let i = 0; i < B.length; i++) {
            if(adjMat.get(B[i][0]) === undefined) 
                adjMat.set(B[i][0], []);
                adjMat.get(B[i][0]).push(B[i][1])

        // if(adjMat.get(B[i][1]) === undefined) 
        //         adjMat.set(B[i][1], []);
        //         adjMat.get(B[i][1]).push(B[i][0])
        }

        let visMap = new Map();
        Array.from(adjMat.keys()).forEach((item) => {
            visMap.set(item, false)
        })
        
        function dfs(adjMat, vis, s) {
            if(vis.get(s) === true) return true;
        
            vis.set(s, true);
            
            if(adjMat.get(s)) {
             for(let i = 0; i < adjMat.get(s).length; i++) {
                    dfs(adjMat, vis, adjMat.get(s)[i]);
             }   
            }

        
            return vis;
        }
        dfs(adjMat, visMap, 1);

        return visMap.get(A) ? 1 : 0;
	}