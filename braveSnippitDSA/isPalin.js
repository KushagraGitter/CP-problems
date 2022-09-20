 function lPalin(A){
        var slow = A;
        var ispalin = false;
        var stack = [];
 
        while (slow != null) {
            stack.push(slow.data);
            slow = slow.ptr;
        }
 
        while (A != null) {
 
            var i = stack.pop();
            if (A.data == i) {
                ispalin = true;
            } else {
                ispalin = false;
                break;
            }
            A = A.ptr;
        }
        return ispalin ? 1 : 0;
	}