function minXOR(A){
        let sortedA = A.sort((a, b) => a - b);
        let x = Infinity;

        for(let i = 0; i < sortedA.length - 1; i++) {
            x = Math.min(x, sortedA[i] ^ sortedA[i+1]);
        }

        return x;
	}