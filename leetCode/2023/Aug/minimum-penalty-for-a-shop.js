/**
 * @param {string} customers
 * @return {number}
 */
//https://leetcode.com/problems/minimum-penalty-for-a-shop/submissions/
var bestClosingTime = function(customers) {
    let res = 0;
    let customerLeft = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            customerLeft++;

            if (customerLeft > 0) {
                res = i + 1;
                customerLeft = 0;
            }
        } else {
            customerLeft--;
        }
    }

    return res;    
};