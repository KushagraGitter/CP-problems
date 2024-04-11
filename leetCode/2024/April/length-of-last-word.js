/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/length-of-last-word/?envType=daily-question&envId=2024-04-01
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    let count = 0;
    let foundWord = false;

    while(end > -1) {
        if(s[end] !== " ") {
            count++;
            foundWord = true;
        } else {
            if(foundWord) {
                break;
            }
        }
        end--;
    }

    return count;
};