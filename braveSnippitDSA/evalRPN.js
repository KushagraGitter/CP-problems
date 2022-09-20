	function evalRPN(A){
            let stack = [];

            for(let i = 0; i < A.length; i++) {
                if(A[i] === '+' || A[i] === '-' || A[i] === '*' || A[i] === '/') {
                    let op2 = stack.pop();
                    let op1 = stack.pop();
                    let result = evaluate(op1, op2, A[i]);
                    stack.push(result);
                } else {
                    stack.push(A[i]);
                }
            }

            function evaluate(op1, op2, operator) {
                let op1Int = parseInt(op1);
                let op2Int = parseInt(op2);

                switch (operator){
                    case '+':
                        return op1Int + op2Int;
                    case '-':
                        return op1Int - op2Int;
                    case '*':
                        return op1Int * op2Int;
                    case '/':
                        return op1Int / op2Int;
                }
                
            }

            return stack[stack.length - 1];
	}