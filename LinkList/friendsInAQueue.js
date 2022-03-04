function friendsInAQueue(A, B){
    let QArr = [];
    function insert(a, b) {
        if(a.next === null) {
            a.next = b;
        } else {
            const temp = a.next;
            b.next = temp;
            a.next = b;
        }
    }
    
    function createBQ(A, B) {
        let count = 0;
        let temp = A;
        while(count < B) {
            QArr.push(new Node(temp.data))
            temp = temp.next;
            count++;
        }
        
        while(temp !== null) {
            insert(QArr[ count % B], new Node(temp.data));
            temp = temp.next;
            count = count + 1;
        }
    }
    
    function mergeQ() {
        let temp = QArr[0];
        while(temp!== null && temp.next !== null) {
            temp = temp.next;
        }
        
        for(let i = 1; i < B ; i++) {
            temp.next = QArr[i];
            while(temp.next !== null) {
                temp = temp.next;
            }
        }
    }
    createBQ(A, B);
    mergeQ();
    return QArr[0];
}