//aabcaabcdaabcaabca
function ZAlgo(str) {
    let len = str.length;
    let zArray  = new Array(len);
    let l,r = 0;
    zArray[0] = str.length;

    for(let i = 1; i < len; i++) {
        if(i > r) {
            l = i,r = i
            while(r < len && str[r] === str[r-l]) {
                r++;
            }
            zArray[i] = r-l;
            r--;
        }
        else {
            let j = i - l;
            if(str[j] + j <= r) {
                z[i] = z[i-l];
            } else {
                l = i,r = i
                while(r < len && str[r] === str[r-l]) {
                    r++;
                }
                zArray[i] = r-l;
                r--;
            }
        }
    }
    return zArray;
}
//to execute call function ZAlgo('aabcaabcdaabcaabca')

