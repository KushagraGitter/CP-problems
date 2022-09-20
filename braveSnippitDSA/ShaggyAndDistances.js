function ShaggyAndDistances(A) {

     const Amap = new Map();
        let minDistance = Infinity;
        for(let i = 0; i < A.length; i++) {
            if(Amap.has(A[i]) ) {
                minDistance = Math.min(minDistance, i - Amap.get(A[i]) );
            } else {
                Amap.set(A[i], i);
            }
        }
        return minDistance;

}