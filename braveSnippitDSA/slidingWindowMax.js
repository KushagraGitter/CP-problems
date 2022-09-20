	function slidingMaximum(A, B){
        let returnArray = [];
        let deQueue = [];

        for(let i = 0; i < B; i++) {
            if(deQueue.length > 0 && deQueue[deQueue.length - 1] < A[i]) {
                deQueue.pop();
            }
            deQueue.push(A[i]);
        } 
        returnArray.push(deQueue[0]);

        for(let j = B; j < A.length; j++) {
            if(A[j-B] === deQueue[0]) {
                deQueue.shift();
            }
            if(deQueue.length > 0 && deQueue[deQueue.length - 1] < A[j]) {
                deQueue.pop();
            }
            deQueue.push(A[j]);
        returnArray.push(deQueue[0])
        }

        return returnArray;

	}