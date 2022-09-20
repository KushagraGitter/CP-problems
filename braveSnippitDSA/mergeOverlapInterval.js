 function mergeInterval(intervals, new_interval) {
        let startIntIdx;
        let endIntIdx;
        let startInt;
        let endInt;
        let returnArray = [];
     
        for(let i = 0; i < intervals.length; i++) {
            if(new_interval[1] >= intervals[i][0] && new_interval[0] <= intervals[i][1]) {
                if(startIntIdx !== undefined) {
                    endIntIdx = i;
                    endInt = Math.max(intervals[i][1], new_interval[1]);
                } else {
                    startIntIdx = i;
                    startInt = Math.min(intervals[i][0], new_interval[0]);
                } 
                
            } else {
                if(startIntIdx !== undefined) {
                    endIntIdx = i - 1;
                    endInt = Math.max(intervals[i - 1][1], new_interval[1]);
                }
            }
        }

        if(startIntIdx !== undefined && endIntIdx !== undefined)  {
                   let intervalInsertal = false;
     
                for(let j = 0; j < intervals.length; j++) {
                    if(j >= startIntIdx && j <= endIntIdx ) {
                        if(!intervalInsertal) {
                            returnArray.push([startInt, endInt]);
                            intervalInsertal = true;
                        }
                    } else {
                        returnArray.push(intervals[j])
                    }
                } 
        } else {
            if(new_interval[1] < intervals[0][0]) {
                returnArray = [new_interval, ...intervals];
            } else {
                returnArray = [...intervals, new_interval];
            }
        }

     
        return returnArray;
    };