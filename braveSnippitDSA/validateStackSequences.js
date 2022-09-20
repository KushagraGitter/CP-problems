var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let poppedIdx = 0;
    let pushedIdx = 0;
    
    while(poppedIdx < popped.length) {
        if(stack[stack.length - 1] == popped[poppedIdx]) {
            stack.pop();
            poppedIdx++;
        } else {
            if(pushed[pushedIdx] !== undefined) {
              stack.push(pushed[pushedIdx]);
                pushedIdx++;  
            } else {
                break;
            }
            
        }
    }

    return stack.length > 0 ? false : true;
};