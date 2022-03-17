function scoreOfParentheses(s) {
  let stack = [];
  debugger;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      stack.push(1);
    } else if (s[i] === ')' && stack[stack.length - 1] !== '(') {
      let tempSum = 0;
      while (stack[stack.length - 1] !== '(') {
        tempSum = tempSum + stack.pop();
      }
      stack.pop();
      stack.push(2 * tempSum);
    }
  }

  let initialValue = 0;
  let sum = stack.reduce((a, b) => a + b, initialValue);

  return sum;
}

console.log(scoreOfParentheses('()()'));

console.log(scoreOfParentheses('()'));

console.log(scoreOfParentheses('(())'));

//"(()(()))"
console.log(scoreOfParentheses('(()(()))'));
