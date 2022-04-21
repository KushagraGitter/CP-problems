/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyValue = prices[0];
  let sellValue = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buyValue > prices[i] && i !== prices.length - 1) {
      buyValue = prices[i];
      sellValue = prices[i];
    } else {
      sellValue = Math.max(sellValue, prices[i]);
    }

    profit = Math.max(profit, sellValue - buyValue);
  }

  return profit;
};
