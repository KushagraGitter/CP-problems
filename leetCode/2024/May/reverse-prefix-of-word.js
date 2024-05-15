/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
//https://leetcode.com/problems/reverse-prefix-of-word/?envType=daily-question&envId=2024-05-01
var reversePrefix = function(word, ch) {
    let n = word.length;

    //create a list to store the characters before the CHARACTER(ch)
    let pre = [];
    // suf will store the remaining suffix if there is any 
    let suf = "";
    for(let i=0; i<n; i++) {
        pre.push(word[i]);

        // check if the current character is the character wanted
        if(word[i] == ch) {
            // if so then put the remaining character to suf and break the loop
            suf = word.substr(i+1, n-1);
            break;
        }
        // if the wanted character is not found, then just leave the pre empty in case it is easy to check
        if(i+1 == n) pre = [];
    }
    //return `word` itself if pre is empty which means the wanted character is not found or return the result in which prefix is reversed and suffix is added
    return pre.length == 0 ? word : pre.reverse().join('') + suf;
};