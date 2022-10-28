//https://leetcode.com/problems/group-anagrams/
/**
* @param {string[]} strs
* @return {string[][]}
*/
const groupAnagrams = function(strs) {
    let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
};