/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
//https://leetcode.com/problems/time-needed-to-buy-tickets/?envType=daily-question&envId=2024-04-09
var timeRequiredToBuy = function(tickets, k) {
    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            total += Math.min(tickets[i], tickets[k]);
        } else {
            total += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return total;
};