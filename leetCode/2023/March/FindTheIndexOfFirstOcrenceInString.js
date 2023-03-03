/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
var strStr = function(haystack, needle) {
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i < haystack.length; i++) {
       p1 = i;
        while(haystack[p1] === needle[p2] && p2 < needle.length) {
            p1++
            p2++
        }
        if(p2 === needle.length){
            return i
        }
        p2 = 0;
        
    }

    return -1;

};