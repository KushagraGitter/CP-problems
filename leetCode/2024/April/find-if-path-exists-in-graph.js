/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjList = new Map();
    let vis = new Array(edges.length).fill(false)

    for(let i = 0; i < edges.length; i++) {
        if(adjList.has(edges[i][0])) {
            adjList.get(edges[i][0]).push(edges[i][1])
        } else {
            adjList.set(edges[i][0], [edges[i][1]])
        }

        if(adjList.has(edges[i][1])) {
            adjList.get(edges[i][1]).push(edges[i][0])
        } else {
            adjList.set(edges[i][1], [edges[i][0]])
        }
    }

    function dfs(source, destination) {
        if(destination === source) {
            return true
        }

        if(vis[source]) {
            return
        }

        vis[source] = true;

        for(let i = 0; i < adjList.get(source).length; i++) {
            let el = adjList.get(source)[i]
            if(dfs(el, destination)) {
                return true
            }
        }

        return false;

    }


    if(dfs(source, destination))
        return true
   

    return false;
};