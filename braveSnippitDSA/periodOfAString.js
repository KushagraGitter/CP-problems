function periodOfString(A){

        let ZA = new Array(A.length);
        ZA = ZAlgo(A);
        let k = A.length;
        for(let i = 1; i < A.length; i++) {
            if(ZA[i] + i == A.length) {
                k = i;
                return k;
            }
        }

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
            if(zArray[j] + j <= r - l) {
                zArray[i] = zArray[i-l];
            } else {
                l = i,r++;
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
return k;
	}