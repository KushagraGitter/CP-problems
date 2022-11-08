//https://leetcode.com/problems/make-the-string-great/
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(stack.length > 0 && stack[stack.length - 1] !== s[i] && (stack[stack.length - 1].toUpperCase() === s[i] || stack[stack.length - 1] === s[i].toUpperCase())) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};