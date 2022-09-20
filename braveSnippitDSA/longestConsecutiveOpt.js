function longestConsecutiveOpt(A) {
      const set = new Set(A);
        let ans = 0;
        for (let num of A) {
            if (!set.has(num - 1)) {
                let l = 0;
                while (set.has(num++)) {
                    ++l;
                }
                ans = Math.max(ans, l);
            }
        }
        return ans;

    
}