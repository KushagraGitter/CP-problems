
//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/**
 * @param {string[]} tokens
 * @return {number}
 */
let operators = {
    '+' : function add(a, b) {
        return a + b
    },

    '-': function sub(a, b) {
        return a - b
    },

    '*' : function mul(a, b) {
        return a * b;
    },

    '/' : function div(a, b) {
        let result = a / b;
        if(result > 0) {
            return Math.floor(result)
        } else {
            return Math.ceil(result)
        }
    }


}
var evalRPN = function(tokens) {
    let result = 0
    let stack = [];

    while(tokens.length > 0) {
        let item = tokens.shift();
        if(operators[item]) {
            const b = parseInt(stack.pop())
            const a = parseInt(stack.pop())
            

            result = operators[item](a, b)
            stack.push(result)
        } else {
            stack.push(item)
        }
    }

    return stack.pop();
};