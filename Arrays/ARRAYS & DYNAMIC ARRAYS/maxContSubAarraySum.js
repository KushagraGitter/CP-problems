//https://www.scaler.com/academy/mentee-dashboard/class/17162/assignment/problems/56/?navref=cl_pb_nv_tb
module.exports = {
    //param A : array of integers
    //return an integer
    maxSubArray : function(A){
        if(A.length == 1) return A[0]
        let maxCount = -Infinity;
        let maxTemp = 0;
        let start = 0;
        let end = 0;
        let tempStart = 0;

        for(let i = 0; i < A.length; i++) {
            maxTemp = maxTemp + A[i];

            if(maxTemp > maxCount) {
                maxCount = maxTemp;
                end = i
            }

            if(maxTemp < 0) {
                maxTemp = 0
            }
        }

        return maxCount


    }
};
