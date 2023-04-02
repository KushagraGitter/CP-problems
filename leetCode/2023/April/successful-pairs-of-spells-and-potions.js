//https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b)
    let result = [];    
    function findIndexBinSearch(num, potions, start, end) {
        if(start > end) {
            return Infinity;
        }
        const mid = Math.floor((start + end) / 2)
        const mul = num * potions[mid]
        return mul >= success ? Math.min(mid,findIndexBinSearch(num, potions, start, mid - 1)) : findIndexBinSearch(num, potions, mid + 1, end)
    }

    for(let i = 0; i < spells.length; i++) {
        const index = findIndexBinSearch(spells[i], potions, 0 , potions.length);
        if(index == Infinity)
            result.push(0);
        else 
            result.push(potions.length - index );    
    }

    return result

    
};