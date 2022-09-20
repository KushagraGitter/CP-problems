var threeSum = function(nums) {
    let map = new Map();
    let returnArray = [];
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(map.get(nums[i]) === undefined)
            map.set(nums[i], 1);
        else 
            map.set(nums[i], map.get(nums[i]) + 1)
    }
    
    for(let i = 0; i < nums.length - 2; i++) {
        decMapFreq(nums[i])
        for(let j = i + 1; j < nums.length - 1; j++) {
            let triplet = [];
            decMapFreq(nums[j])
            let match = -(nums[i] + nums[j]);
            const matchIdx = map.get(match);
            if(matchIdx !== undefined && matchIdx > 0) {
                triplet.push(nums[i]);
                triplet.push(nums[j]);
                if(match == 0) {
                    match = parseInt(`${match}`);
                    
                }
                    
                triplet.push(match);
                triplet.sort((a, b) => a - b);
                set.add(triplet);   
                 decMapFreq(match)
            }
            //addFreq(nums[j]);
        }
        //addFreq(nums[i]);
    }

    function decMapFreq(value) {
        const freq = map.get(value);
        if(freq !== undefined) {
            map.set(value, freq - 1)
        }
    }

    function addFreq(value) {
        const freq = map.get(value);
        if(freq !== undefined) {
            map.set(value, freq + 1)
        }
    }
    
    return returnArray;
};