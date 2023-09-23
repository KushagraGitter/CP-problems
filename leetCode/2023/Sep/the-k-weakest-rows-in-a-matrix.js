/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    function countNumberOfOneUsingBS(start, end, nums, count) {
        if(start > end ) {
            return count;
        }
    
        const mid = Math.floor((start + end) / 2);
    
        if(nums[mid] === 0) {
            return countNumberOfOneUsingBS(start, mid - 1, nums, count);
        } else if(nums[mid] === 1) {
            count = count + mid - start + 1;
            return countNumberOfOneUsingBS(mid + 1, end, nums, count); 
        }
        
    }
    let newArray = new Array()
    
    for(let j = 0; j < mat.length; j++) {
        let count = countNumberOfOneUsingBS(0, mat[j].length - 1, mat[j], 0);
        newArray.push({num: count, index: j});
    }
    
    
    return newArray.sort((a, b) => a.num - b.num).map((a) => a.index).slice(0, k)
        
    };