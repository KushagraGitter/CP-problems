var FreqStack = function () {
  this.frequencies = new Map();
  this.highest = 0;
  this.stack = new Map();
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  debugger;
  var freq = (this.frequencies.get(x) | 0) + 1;
  this.highest = Math.max(this.highest, freq);
  this.frequencies.set(x, freq);
  var vals = this.stack.get(freq);
  if (!vals) vals = [];
  vals.push(x);
  this.stack.set(freq, vals);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  var ans = this.stack.get(this.highest);
  if (ans.length == 1) {
    this.stack.delete(this.highest);
    this.highest -= 1;
  }
  var val = ans.pop();
  this.frequencies.set(val, this.frequencies.get(val) - 1);
  return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

//  Input
//  ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
//  [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
//  Output
//  [null, null, null, null, null, null, null, 5, 7, 5, 4]

//Explanation
freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop(); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
