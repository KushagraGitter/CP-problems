
/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let dp = new Array(n).fill(0);
  
  dp[0] = cost[0];
  dp[1] = cost[1];
  
  for(let i = 2; i < n; i++) {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  
  return Math.min(dp[n - 1], dp[n - 2]);
  
//     function minCostRec(i) {
//         if(i < 2) {
//             return cost[i];
//         }
      
//         return cost[i] +  Math.min(minCostRec(i - 1), minCostRec(i - 2));
//     }
};

//reccurence relation 
//minCost[i] = cost[i] + min(minCost(i - 1), minCost(i - 2));
//base case
//minCost[0] = cost[0];
//minCost[1] = cost[1];