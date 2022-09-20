  function countRectangle(A, B){
        let hset = new Set();
        const n = A.length;
        let count = 0;

        for(let i = 0; i < n; i++) {
            hset.add(`${A[i]}-${B[i]}`)
        }

        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                let [x1, y1] = [A[i], B[i]];
                let [x2, y2] = [A[j], B[j]];
				// if our points are on same axis then it will not form a ractangle
				if(x1 === x2 || y1 === y2) continue;

                if( 
				   hset.has(`${x2}-${y1}`) && 
				   hset.has(`${x1}-${y2}`)) {
                    count++;
                }
            }
        }
		// we need to divide the count /2 becaue we are calulating the 2 diagonals and we will 
		  // count the same rectangle twice
        return count / 2;
	}