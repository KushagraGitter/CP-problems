//https://leetcode.com/problems/maximum-ice-cream-bars/description/
/**
 * ddwd
 * sd
 * dss
 * ds
  */
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b)
    let res = 0;
    for(let i = 0; i < costs.length; i++) {
        if(coins >= costs[i]) {
            res++;
            coins = coins - costs[i]
        }
    }

    return res;
};