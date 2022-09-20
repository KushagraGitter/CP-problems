function cyclicPermutations(A, B)  {
    B = B + B
    B = B.substring(0, B.length - 1);
    let zString = A + '$' + B;
        let lenString = A.length;
        let ZArray = ZAlgo(zString);
        let countOccrounce = 0;

        for(let i = 1; i <= ZArray.length - 1; i++) {
            if(ZArray[i] == lenString)
                countOccrounce++;
        }


function ZAlgo(s) {
   var l = 0,
          r = 0;
          var z = new Array(s.length);
        var n = s.length;
        for (var i = 1; i <= n - 1; i++) {
          if (i > r) {
            l = i;
            r = i;
            while (r < n && s[r - l] === s[r]) {
              r++;
            }
            z[i] = r - l;
            r--;
          } else {
            var k = i - l;
            if (z[k] < r - i + 1) {
              z[i] = z[k];
            } else {
              l = i;
              while (r < n && s[r - l] === s[r]) {
                r++;
              }
              z[i] = r - l;
              r--;
            }
          }
        }
    return z;
}
    return countOccrounce;
	}