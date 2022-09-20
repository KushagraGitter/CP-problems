function simplifyPath(A){
        let head = null;
        let returnStaring = '';

        function Node(data) {
            this.data = data;
            this.next = null;
        }

        function Push(data) {
            let newNode = new Node(data);
            newNode.next = head;
            head = newNode;
        }

        function Pop() {
            head = head.next;
        }

        function Top() {
            return head.data;
        }

        function IsEmpty() {
            return head === null ? true : false;
        }

        for(let i = 0; i < A.length ; i++) {

           

            while(i < A.length && A[i] === '/') {
                i++;
                let dir = '';
                while( i < A.length && A[i] !== '/') {
                    dir = dir + A[i];
                    i++
                }

                if (dir === '..' && !IsEmpty()) {
                    Pop();
                } else if (dir === '.') {
                    continue;
                } else if(dir.length != 0 && dir !== '..') {
                    Push(dir);
                }
            }
        }
        
        if(head === null) {
            returnStaring = '/'
        }

        while(head !== null) {
            returnStaring = '/' + Top() + returnStaring; 
            Pop();
        }
        

        return returnStaring;

	}