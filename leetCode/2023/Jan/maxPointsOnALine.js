//https://leetcode.com/problems/max-points-on-a-line/description/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2){
        return points.length;
    }
    
    let pointCombos = [];
    /*
        Any two distinct points will make a line
        we need to check every possible line that we can create
    */
    for (let i = 0; i < points.length -1; i++){
        for (let j = i + 1; j < points.length; j++){
            pointCombos.push([points[i],points[j]]);
        }
    }
    
    const isPointOnLine = (twoPoint, candidate) => {
        for (let i = 0; i < twoPoint.length;i++){ // Checks to see if they are the same as on of the two points
            if (twoPoint[i][0] === candidate[0] && twoPoint[i][1] === candidate[1]){
                return true;
            }
        }
        if (twoPoint[0][0] - twoPoint[1][0] === 0){ //vertical line needs to have same x
            return twoPoint[0][0] === candidate[0];
        } 

        if (twoPoint[0][1] - twoPoint[1][1] === 0){ // horizontal line same y
            return twoPoint[0][1] === candidate[1];
        } 
        
        
        /*
            If any point has the same slope to both points it will be on the line
        */
        let slope = (twoPoint[0][1] - twoPoint[1][1]) / (twoPoint[0][0] - twoPoint[1][0]);
        let slopeTo1 = (twoPoint[0][1] - candidate[1]) / (twoPoint[0][0] - candidate[0]);
        let slopeTo2 = (twoPoint[1][1] - candidate[1]) / (twoPoint[1][0] - candidate[0]);
        return slope === slopeTo1 && slope === slopeTo2;

    }
    
    let maxPoints = 0;
    
    pointCombos.forEach(combo=>{
        let count = 0;
        points.forEach(candidate=>{
            if (isPointOnLine(combo,candidate)){
                count++;
            }
        })
        
        if (count > maxPoints){
            maxPoints = count;
        }
    })
    
    return maxPoints;
};