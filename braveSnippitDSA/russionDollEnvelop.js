	function russionDollEnvelop(A){
        const n  = A.length;

        A.sort((a, b) => a[0] - b[0]);

        let lis = new Array(n + 1).fill(0);

        for(let i = 1; i <= n; i++) {
            lis[i] = 1;

            for(let j = 1; j <= i; j++) {
                if(A[i - 1][1] < A[j - 1][1]) {
                    lis[i] = Math.max(lis[i], lis[j] + 1);
                }
            }
        }

        return lis[n];

	}