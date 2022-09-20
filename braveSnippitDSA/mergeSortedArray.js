var merge = function(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    nums1 = nums1.slice(0, n);
    let tempArray = [];
    while(p1 < nums1.length || p2 < nums2.length) {
        if(nums1[p1] === 0) {
            p1++;
            continue;
        }
        if(nums1[p1] < nums2[p2]) {
            tempArray.push(nums1[p1]);
            p1++
        } else {
            tempArray.push(nums2[p2]);
            p2++
        }
    }
    
    while(p1 < nums1.length) {
         tempArray.push(nums1[p1]);
            p1++;
    }
    
    while(p2 < nums2.length) {
         tempArray.push(nums2[p2]);
            p2++;
    }
    
    nums1 = tempArray
};