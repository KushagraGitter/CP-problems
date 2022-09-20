var removeDuplicates = function(s, k) {
    let map = new Map();
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        if(map.get(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);    
        } else {
            map.set(s[i], 1);
        }
        
        if(map.get(s[i]) === k) {
            while(map.get(s[i]) > 0) {
                stack.pop();
                map.set(s[i], map.get(s[i]) - 1)
            }
        }
    }
    
    return stack.join('');
};