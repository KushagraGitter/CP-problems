/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//https://leetcode.com/problems/group-anagrams/?envType=daily-question&envId=2024-02-06
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