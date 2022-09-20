 function BinaryString(A, B){
        let count = 0;

        for(let i = 0; i < A.length; i++) {
            if(A[i] === '0' && B + i <= A.length) {

                for(let j = i; j < B + i; j++) {
                    if(A[j] === '0') {
                      A = setCharAt(A, j, '1')
                    } else {
                      A =  setCharAt(A, j, '0')
                    }
                }
                count++;
            }
        }

        if(A.indexOf(0) > -1) return -1;

        return count;
	}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}