/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/count-number-of-homogenous-substrings/?envType=daily-question&envId=2023-11-09
var countHomogenous = function(s) {
    let left = 0;
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[left] === s[right]) {
            res += right - left + 1;
        } else {
            res += 1;
            left = right;
        }
    }

    return res % (Math.pow(10, 9) + 7);    
};