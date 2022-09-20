
function compareStrings(s1, s2) {
    // Write your code here
    let s1Stack = [];
    let s2Stack = [];
    let ans  = 1;
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== '#') {
            s1Stack.push(s1[i]);
        } else {
            if(s1Stack.length > 0)
                s1Stack.pop();
        }
    }
    
        
    for(let j = 0; j < s2.length; j++) {
        if(s2[j] !== '#') {
            s2Stack.push(s2[j]);
        } else {
            if(s2Stack.length > 0)
                s2Stack.pop();
        }
    }
    
    return s1Stack.join('') === s2Stack.join('') ? 1 : 0
    
    

}