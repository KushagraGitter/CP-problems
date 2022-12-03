/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
let map = new Map();

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
   const sortedChars = [...map].sort((a, b) => b[1] - a[1]);
   return sortedChars.reduce((acc, [ch, count]) => {
       acc += ch.repeat(count);
       return acc;
   }, '')

};