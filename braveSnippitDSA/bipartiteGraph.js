 function bipartiteGraph(A, B){
        let colorArr = new Array(A).fill(0);
        let adjMat = new Map();
        let q = [];
        //adjecency matrix
        for(let i = 0; i < B.length; i++) {
            const [u, v] = B[i];
            if(adjMat.has(u)) {
                adjMat.get(u).push(v);
                
            } else {
                adjMat.set(u, [])
                adjMat.get(u).push(v);
            }
             if(adjMat.has(v)) {
                adjMat.get(v).push(u);
                
            } else {
                adjMat.set(v, []);
                adjMat.get(v).push(u);
                
            }
        }

        for(const [key, value] of adjMat) {
            if(colorArr[key] === 0) {
                q.push(key);
                colorArr[key] = 1;

                while(q.length > 0) {
                    const node = q.shift();
                    const newCol = colorArr[node] === 1 ? 2 : 1;
                    const newNodes = adjMat.get(node);
                    if(newNodes !== undefined) {
                        for(let j = 0; j < newNodes.length; j++) {
                            if(colorArr[newNodes[j]] == 0) {
                                 q.push(newNodes[j]);
                                 colorArr[newNodes[j]] = newCol;
                            } else {
                                if(colorArr[node] == colorArr[newNodes[j]]) {
                                    return 0
                                }
                            }
                           
                        } 
                    }

                }
            }
        }

        return 1;


	}