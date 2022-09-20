class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
    addVertex(v) {
      this.AdjList.set(v, []);  
    } 

    addEdge(u, v) {
        this.AdjList.get(u).push(v);
        this.AdjList.get(v).push(u);
    }
    // addVertex(v)
    // addEdge(v, w)
    // printGraph()
 
    // bfs(v)
    // dfs(v)
}