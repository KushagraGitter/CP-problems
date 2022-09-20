function minDiff(A) {

            let sortA = A.sort((a, b) => a - b);
            let minDiff = Infinity;
            for(let i = 0; i < A.length - 1; i++) {
                minDiff = Math.min(minDiff, Math.abs(sortA[i] - sortA[i + 1]));
            }

            return minDiff;
}