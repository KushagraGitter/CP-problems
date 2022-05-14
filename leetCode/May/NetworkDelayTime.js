/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
  let graph = {};
  let costs = {};
  let parents = {};
  let processed = {};
  let processedCounter = 0;
  
  for (let time of times) {
      if (!graph[time[0]]) {
          graph[time[0]] = {};
      } 
      graph[time[0]][time[1]] = time[2];
      
  }
  
  for (let i = 1; i <= n; i++) {
      costs[i] = Infinity;
      processed[i] = false;
  }
  costs[k] = 0;

  node = k;
  
  while (node !== -1) {
      let cost = costs[node];
      let neighbours = graph[node];
      for (let neighbor in neighbours) {
          let newCostOfNeighbor = cost + neighbours[neighbor];
          if (newCostOfNeighbor < costs[neighbor]) {
              costs[neighbor] = newCostOfNeighbor;
              parents[neighbor] = node;
          }
      }
      processed[node] = true;
      processedCounter++;
      node = findLowestCostNode(costs)
  } 
  
  function findLowestCostNode(costs) {
      lowestCost = Infinity;
      lowestCostNode = -1;
      for (let node in costs) {
          cost = costs[node];
          if (cost < lowestCost && !processed[node]) {
              lowestCost = cost;
              lowestCostNode = node;
          }
      }
      return lowestCostNode;
  }
  
  if (processedCounter !== n) return -1;

  let set = new Set();
  for (let node in costs) {
    set.add(costs[node]);
  }
  let max = Math.max(...set);
  
  return max;
};