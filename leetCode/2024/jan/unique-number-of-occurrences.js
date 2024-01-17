/**
 * @param {number[]} arr
 * @return {boolean}
 */
//https://leetcode.com/problems/unique-number-of-occurrences/?envType=daily-question&envId=2024-01-17
var uniqueOccurrences = function(arr) {
    let map = new Map();
    let set = new Set();
    
    for(let i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    
    for(const [key, value] of map) {
        set.add(value)
    }
    
    return set.size === map.size
    
    
};