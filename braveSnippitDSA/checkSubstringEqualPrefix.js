// aabcdaabcaabc
function checkSubstringEqualPref(str, iStr, eStr ) {
    let p1 = 0;
    let p2 = iStr;
    while(p2 < eStr) {
        if(str[p1] !== str[p2]) {
            return false
        } else {
            p1++;
            p2++;
        }
    }
    return true;
}