//https://leetcode.com/problems/time-based-key-value-store/
// var TimeMap = function() {
//     this.timeMap = new Map();
// };

// /** 
//  * @param {string} key 
//  * @param {string} value 
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function(key, value, timestamp) {
//     if(!this.timeMap.has(key)) {
//         this.timeMap.set(key, new Map())
//     }
    
//     this.timeMap.get(key).set(timestamp, value)
// };

// /** 
//  * @param {string} key 
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function(key, timestamp) {
    
//     const tMap = this.timeMap.get(key)
    
//     if(tMap){
//         let largestTime = -Infinity
//         for(let currTime = timestamp; currTime >= 1; currTime--) {
//             if(tMap.has(currTime)) {
//                 return tMap.get(currTime)
//             }
//         }
        
//     } else {
//         return ""
//     }
    
//     return ""
    
// };

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// TC O(M.N)
// SC O(M.N)

// additional comments
// better way to solve this that question mentioned that the timestamp. will always be in increasing order, we can story the timeStamp and Key in Array as [key, value]

let keyTimeMap = {};
var TimeMap = function() { 
    keyTimeMap = {};
};

TimeMap.prototype.set = function(key, value, timestamp) {
    // If the 'key' does not exist in dictionary.
    if (!(key in keyTimeMap)) {
        keyTimeMap[key] = Array();
    }

    // Store '(timestamp, value)' pair in 'key' bucket.
    keyTimeMap[key].push([ timestamp, value ]);
};


TimeMap.prototype.get = function(key, timestamp) {
    // If the 'key' does not exist in dictionary we will return empty string.
    if (!(key in keyTimeMap)) {
        return "";
    }
    
    if (timestamp < keyTimeMap[key][0][0]) {
        return "";
    }
    
    let left = 0;
    let right = keyTimeMap[key].length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (keyTimeMap[key][mid][0] <= timestamp) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    // If iterator points to first element it means, no time <= timestamp exists.
    if (right == 0) {
        return "";
    }

    return keyTimeMap[key][right - 1][1];
};  