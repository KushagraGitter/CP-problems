	 function firstNonRepeatingChar(A){
        let returnString = '';
        let deQue = [];

        for(let i = 0; i < A.length; i++) {
             
            if(deQue.length > 0 && deQue[0] === A[i]) {
                deQue.shift();
            } else {
                deQue.push(A[i]);
            }
            const firstChar = deQue[0] === undefined? '#' : deQue[0];
            returnString = returnString + firstChar;
        }

        return returnString;

	}