function checkBSTWITHONeNode(A){
        let retAns = "YES";
        let isGreaterValue = false;
        let isSmallerValue = false;

        for(let i = 0; i < A.length - 2; i++) {
            if(A[i] > A[i+1] && A[i] > A[i+2]) {
                retAns = "YES";
            }
            else if(A[i] < A[i+1] && A[i] < A[i+2]) {
                retAns = "YES";
            } else {
                return "NO";
            }
        }

        return retAns;
	}