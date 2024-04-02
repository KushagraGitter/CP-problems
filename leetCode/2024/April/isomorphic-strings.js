/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//https://leetcode.com/problems/isomorphic-strings/?envType=daily-question&envId=2024-04-02
var isIsomorphic = function(s, t) {
    if (s.length !== t.length)
        return false;
    const mapChars = {};
    const setVals = new Set();
    for (let i = 0; i < s.length; i++) {
        if (mapChars.hasOwnProperty(s[i])) {
            if (mapChars[s[i]] !== t[i])
                return false;
        } else {
            if (setVals.has(t[i]))
                return false;
            mapChars[s[i]] = t[i];
            setVals.add(t[i]);
        }
    }
    return true;
};