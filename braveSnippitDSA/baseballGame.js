var calPoints = function(ops) {
    let arr = [];
    
    for(let i = 0; i < ops.length; i++) {
        if(ops[i] === 'C') {
            arr.pop();
        } else if(ops[i] === 'D') {
            arr.push(arr[arr.length - 1] * 2);
        } else if(ops[i] === '+') {
            const el1 = arr.pop();
            const newVal = arr.pop() + el1;
            arr.push(el1)
            arr.push(newVal)
        } else {
            arr.push(parseInt(ops[i]));
        }
        
    }
    
    let initalSum = 0;
    
    let sum = arr.reduce((a, b) => a + b, initalSum)
    
    return sum;
};