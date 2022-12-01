//https://leetcode.com/problems/determine-if-string-halves-are-alike/
/**
* @param {string} s
* @return {boolean}
*/
var halvesAreAlike = function(s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let start = 0;
    let end = s.length - 1
    let startVCount = 0;
    let endVCount = 0;

    while(start < end) {
        if(set.has(s[start])) {
            startVCount++;
        }
        if(set.has(s[end])) {
            endVCount++;
        }

        start++;
        end--;
    }

    return startVCount === endVCount
};