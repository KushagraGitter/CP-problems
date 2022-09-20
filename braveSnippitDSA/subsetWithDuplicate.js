	 function subsetsWithDup(A){
		let subset = [];
		let result = [];
		A.sort((a, b) => a - b);

		function dfs(idx) {
			if(idx === A.length) {
				result.push(subset.join(','));
				return;
			}

            subset.push(A[idx]);
            dfs(idx + 1);
            subset.pop();

            
            while(idx + 1 < A.length && A[idx] === A[idx + 1]) {
                idx = idx + 1;
            }

            dfs(idx + 1);
			
		}

		dfs(0);
        result.sort()
		return result.map((item) => item.split(',')[0] === '' ? [] : item.split(','));
	}