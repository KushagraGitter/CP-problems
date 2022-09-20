function Passinggame(A, B, C){
        let stack = [];
        for(let i = 0; i < C.length; i++) {
            if(C[i] === 0) {
                if(stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(C[i]);
            }
        }
        let returnId = stack.length > 0 ? stack[stack.length - 1] : B;

        return returnId;
	}