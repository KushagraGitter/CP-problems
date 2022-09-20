function RowWithMaxOnes(A) {
      const len = A.length;
            let maxRowIndex  = len - 1;
            let maxOneCount = -Infinity;
            for(let i = len - 1; i >= 0; i--) {
                let rowOneCount = 0;
                for(let j = 0; j < len; j++) {
                    if(A[i][j] === 1) {
                        rowOneCount++;
                    }
                }

                maxOneCount = Math.max(maxOneCount, rowOneCount);
                if(maxOneCount === rowOneCount) {
                    maxRowIndex = i;
                }
            }

            return maxRowIndex;
	}