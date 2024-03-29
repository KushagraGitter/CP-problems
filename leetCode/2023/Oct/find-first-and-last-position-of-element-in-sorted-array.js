/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=daily-question&envId=2023-10-09
var searchRange = function(nums, target) {
    const A = nums;
    const B = target
    function bs(start, end) {
        if(start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);

        if(A[mid] === B) {
            return mid;
        } else if(A[mid] > B) {
            return bs(start, mid - 1)
        } else if(A[mid] < B) {
            return bs(mid + 1, end);
        }
    }

    const idx = bs(0, A.length - 1);

    if(idx === -1) {
        return [-1, -1]
    } else {
        let left = idx;
        let rigth = idx;


        while(left - 1 >= 0 && A[left - 1] === B) {
            left--;
        }

        while(rigth + 1 < A.length && A[rigth + 1] === B) {
            rigth++;
        }
        // for(let i = idx; i - 1 >= 0 && A[i - 1] === B; i--){
        //     left = i
        // }
        // for(let j = idx; j + 1 < A.length && A[j + 1] === B; j++) {
        //     rigth = j
        // } 

        return [left, rigth]
    }
};