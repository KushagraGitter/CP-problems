//https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
  let n = properties.length;
     let count = 0;
     //properties.sort((a, b) =>)
     properties.sort((a, b) => (b[0] == a[0]) ? (a[1] - b[1]) : b[0] - a[0]);
     
     let max = 0;
     for (let i = 0; i < n; i++) {
         
         if (properties[i][1] < max) {
             count++;
         }
         max = Math.max(max, properties[i][1]);
     }
     return count;
};