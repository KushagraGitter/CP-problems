/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

    let stack = 0;
    for (let i = 0; i < s.length; i ++) {
        let character = s[i];
        if (character === '(' || character === '*') {
            stack ++;
        } else if (character === ')') {
            if (stack < 1) {
                return false;
            } else {
                stack --;
            }
        }
    }
    
    stack = 0;
    for (let i = s.length - 1; i >= 0; i --) {
        let character = s[i];
        if (character === ')' || character === '*') {
            stack ++;
        } else if (character === '(') {
            if (stack < 1) {
                return false;
            } else {
                stack --;
            }
        }
    }
    
    return true
    
};