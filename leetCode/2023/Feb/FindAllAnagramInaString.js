//https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
//update
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let Sfreq = new Array(26).fill(0);
    let Pfreq = new Array(26).fill(0);
    let result = [];
    if(s.length < p.length) return []
    for(let i = 0; i < p.length; i++) {
        const idx1 = s[i].charCodeAt() - 'a'.charCodeAt();
        const idx2 = p[i].charCodeAt() - 'a'.charCodeAt();

        Sfreq[idx1] = Sfreq[idx1] + 1;
        Pfreq[idx2] = Pfreq[idx2] + 1;
    }

    if(checkEqual(Sfreq, Pfreq)) {
        result.push(0);
    }

    let first = 0;
    let second = p.length;

    while(second < s.length) {
        const idx1 = s[second].charCodeAt() - 'a'.charCodeAt();
        const idx2 = s[first].charCodeAt() - 'a'.charCodeAt();

        Sfreq[idx1] = Sfreq[idx1] + 1;
        Sfreq[idx2] = Sfreq[idx2] - 1;

        if(checkEqual(Sfreq, Pfreq)) {
            result.push(first + 1)
        }
        second++;
        first++;
    }

    function checkEqual(arr1, arr2) {
        for(let i = 0; i < 26; i++) {
            if(arr1[i] !== arr2[i]) {
                return false
            }
        }

        return true
    }

    return result;
};