/**
 * @param {number[][]} land
 * @return {number[][]}
 */
//https://leetcode.com/problems/find-all-groups-of-farmland/?envType=daily-question&envId=2024-04-20
var findFarmland = function(land) {
    const result = [];
    const m = land.length;
    const n = land[0].length;
    
    const findFarmlandCoordinates = (row, col) => {
        const coordinates = [row, col];
        let r = row, c = col;
        
        while (r < m && land[r][col] === 1) r++;
        while (c < n && land[row][c] === 1) c++;
        
        coordinates.push(r - 1, c - 1);
        
        for (let i = row; i <= r - 1; i++) {
            for (let j = col; j <= c - 1; j++) {
                land[i][j] = 0;
            }
        }
        
        return coordinates;
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                result.push(findFarmlandCoordinates(i, j));
            }
        }
    }
    
    return result;
};