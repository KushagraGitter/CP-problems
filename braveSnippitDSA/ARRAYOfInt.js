function ArrayOfInt(A){
	     let rem = 0;
            let carry = 1;
	        for(let i = A.length - 1; i>=0; i--) {
                
                let sum = carry + A[i];
                rem = sum % 10;
                carry = Math.floor(sum / 10);
                
                A[i] = rem;
	        }
	      
            A = carry ? [carry, ...A] : A

             let indexOfZero;
            for(let j = 0; j <= A.length; j++) {
            	if(A[j] === 0) {
            		indexOfZero = j
            	} else {
            		break;
            	}
            }
            A.splice(0, indexOfZero + 1);
	        return A;
	        
	}