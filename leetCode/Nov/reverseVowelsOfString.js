//https://leetcode.com/problems/reverse-vowels-of-a-string/
/**
* @param {string} s
* @return {string}
*/
var reverseVowels = function(s) {
    let set = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])
    let start = 0;
    let end = s.length - 1;
    s = [...s]

    function isVowels(s) {
        return set.has(s)
    }

    function swap(start, end) {
        const temp = s[start]
        s[start] = s[end]
        s[end] = temp
    }

    while(end > start) {
        if(isVowels(s[start]) && isVowels(s[end])) {
            swap(start, end)
            start++;
            end--
        }  else if(isVowels(s[start]) && !isVowels(s[end])) {
            end--;
        } else if(!isVowels(s[start]) && isVowels(s[end])) {
            start++;
        } else {
            start++;
            end--
        }
    }

    return s.join('')

};