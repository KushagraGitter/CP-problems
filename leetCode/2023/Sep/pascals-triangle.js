/**
 * @param {number} numRows
 * @return {number[][]}
 */
//https://leetcode.com/problems/pascals-triangle/description/?envType=daily-question&envId=2023-09-08
let generate = function(numRows) {
    let final=[];
    for(let i=0;i<numRows;i++){
        final[i]=[];
        final[i][0]=final[i][i]=1;
        for(let j=1;j<i;j++){
            final[i][j]=final[i-1][j]+final[i-1][j-1];
        }
    }
    return final;
};