function GraphBFS(B) {
    let adjList = new Map();
    let q = [];
    let vis = new Array(B.length).fill(false);
    
//for directed graph //
    for(let i = 0; i < B.length; i++) {
        if(adjList.get(B[i][0]) === undefined)
            adjList.set(B[i][0], []);
        adjList.get(B[i][0]).push(B[i][1]);
    }
// for undirected graph we need to add edge from a to b also from b to a    
    //q.push(B[0])
    function bfs(adjList, q) {
        while(q.length > 0) {
            const qEl = q.shift();
            console.log(qEl);
            for(let i = 0; i < adjList.get(qEl)?.length; i++) {
               const el = adjList.get(qEl)[i]
                if(!vis[el]) {
                   vis[el] = true
                   q.push(el) 
                }
            }
        }
    }

    for(let i = 1; i < vis.length; i++) {
        if(!vis[i]) {
            vis[i] = true;
            q.push(i)
            bfs(adjList, q) 
        }
    } 
}