/**
 * @param {number[][]} graph
 * @return {boolean}
 */
//need to work on this after graph class
var isBipartite = function(graph) {
  // create a visited board
  // 0 = unassigned, 1 = group A, 2 = group B
  const visited = new Array(graph.length).fill(0);
  // assigned 0 to group A
  visited[0] = 1;
  
  // assigning group
  for(let i = 0; i < graph.length; i++) {
      if(!assignedGroup(i)) {
          return false;
      }
  }
  return true;
  function assignedGroup(start) {
      for(let i = 0; i < graph[start].length; i++) {
          const member = graph[start][i];
          if (visited[member] !== 0 && visited[member] === visited[start]) {
              return false;
          }
          if (visited[member] !== 0) {
              continue;
          }
          visited[member] = visited[start] == 1 ? 2 : 1;
          if (!assignedGroup(member)) {
              return false;
          }
      }
      return true;
  }
};