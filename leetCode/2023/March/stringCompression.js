/**
 * @param {character[]} chars
 * @return {number}
 */
//https://leetcode.com/problems/string-compression/description/
var compress = function(chars) {
    if (chars.length > 1) {
        let s = "";
        let groupSize = 1;
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === chars[i + 1]){
                groupSize++;
            } else {
                s += chars[i];
                if (groupSize > 1) {
                    s += groupSize;
                    groupSize = 1;
                }
            }
        }

        chars.splice(0, chars.length);

        for (let j = 0; j < s.length; j++) {
            chars[j] = s[j];
        }
    }
    
    return chars.length;
};