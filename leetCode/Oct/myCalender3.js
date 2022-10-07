//https://leetcode.com/problems/my-calendar-iii/
var MyCalendarThree = function() {
    this.list = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    let temp = this.list.get(start);
    temp = temp === undefined ? 1 : ++temp;
    this.list.set(start, temp);
    temp = this.list.get(end);
    temp = temp === undefined ? -1 : --temp;
    this.list.set(end, temp);
    
    let tempList = Array.from(this.list);
    tempList.sort((a, b) => a[0] - b[0]);
    
    let max = 0, val = 0;
    for(let i = 0; i < tempList.length; ++i){
        let temp = tempList[i][1];
        if(temp !== undefined){
            val += temp;
            max = Math.max(max, val);
        }
    }
    return max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */