/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
//https://leetcode.com/problems/flatten-nested-list-iterator/?envType=daily-question&envId=2023-10-20
class NestedIterator {
    constructor(nestedList) {
      // stack of iterators
      this.stack = [nestedList.values()];
      this.head = null;
    }
    
    hasNext() {
      if (this.head !== null) return true;
      
      while (this.stack.length > 0) {
        const iterator = this.stack[this.stack.length - 1];
        const { value, done } = iterator.next();
        
        // remove if it doesn't has more values
        if (done) {
          this.stack.pop();
          continue;
        }
        
        const next = value;
        
        if (next.isInteger()) {
          this.head = next.getInteger();
          break;
          
        } else {
          this.stack.push(next.getList().values());
        }
      }
      
      return this.head !== null;
    }
    
    next() {
      const next = this.head;
      this.head = null;
      return next;
    }
  }
  
  /**
   * Your NestedIterator will be called like this:
   * var i = new NestedIterator(nestedList), a = [];
   * while (i.hasNext()) a.push(i.next());
  */