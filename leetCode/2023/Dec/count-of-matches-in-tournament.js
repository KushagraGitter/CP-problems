/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;
    let rev = 0;
    while (n > 1) {
        rev = Math.floor(n / 2);
        count += rev;
        n = n - rev;
    }
    return count;
};