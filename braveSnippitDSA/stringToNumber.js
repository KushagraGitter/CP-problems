function stringToNumber(mainString ,word) {
    let n = word.length;
    let stringLength = mainString.length;
    let p = 23;
    let pPower = 1;
    let mod = Math.pow(10, 9) + 7;
    let fw = 0;
    let fMS = 0;
    let count = 0;
    
    for(let i = 0; i < n; i++) {
        fw = (fw + word[i].charCodeAt() * pPower) % mod;
        fMS = (fMS + mainString[i].charCodeAt() * pPower) % mod;
        pPower = pPower * p;
    }

    if(fw === fMS) {
           count++; 
    }

    let start = 1, end = n;
    let pStartPower = 1;
    let pEndPower = pPower;
    
    while(end < stringLength) {
        fMS = (fMS - mainString[start - 1].charCodeAt() * pStartPower + mainString[end].charCodeAt() * pEndPower) % mod;
        fw = (fw * p ) % mod;

        pStartPower = (pStartPower * p) % mod;
        pEndPower = (pEndPower * p) % mod;
        start++;
        end++;

        if(fw === fMS) {
           count++; 
        }
    }

    

    return count;
}