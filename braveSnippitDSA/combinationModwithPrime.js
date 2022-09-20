function combModPrime(A, B, C){
            let factArray = new Array(A+1);
            factArray[0] = 1;
            //create factorial Array
            for(let i = 1; i <= A; i++) {
                factArray[i] =  C > 1 ? (factArray[i-1] * i)%C : (factArray[i-1] * i);
            } 
            // calculate power for certain term;
            function binpow(a, b) {
                if (b === 0)
                    return 1;
                let res = binpow(a, Math.floor(b / 2));
                if (b % 2)
                    return res%C * res%C * a%C;
                else
                    return res%C * res%C;
            }
            let nFact = factArray[A];
            let nrFactPow = C > 1 ? binpow(factArray[A-B], C - 2) : factArray[A-B];
            let rFactPow = C > 1 ? binpow(factArray[B], C - 2) : factArray[B];

            return (nFact*nrFactPow*rFactPow)%C;
	}