//https://leetcode.com/problems/integer-to-roman/
/**
* @param {number} num
* @return {string}
*/
var intToRoman = function(num) {
    if(num < 0 || num > 3999) return ""

    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let i = 0
    let result = ""
    while(num > 0) {
        while(num >= values[i]) {
            num = num - values[i]
            result = result + roman[i]
        }
        i++
    }
    return result;
};