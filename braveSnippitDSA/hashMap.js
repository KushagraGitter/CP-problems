function node(data) {
    this.data = data;
    this.next = null;
}

function HashMap(size) {
    this.mapArray = new Array(size);
    this.size = size;

    
    
}

HashMap.prototype.add = function add(number) {
    const index = number % this.size;
    const newNode = new node(number);
    
    if(this.mapArray[index] !== undefined) {
        let head = this.mapArray[index];
        
        newNode.next = head;
        head = newNode;
        this.mapArray[index] = head;
        
    } else {
        this.mapArray[index] = newNode;
    }
    
}

HashMap.prototype.remove = function remove() {
    
}

HashMap.prototype.get = function get() {
    
}

HashMap.prototype.exists = function exists(key) {
    const index = key % this.size;

    if(this.mapArray[index] !== undefined) {
        let temp = this.mapArray[index];

        while(temp.next !== null) {
            if(temp.data === key) {
                return true
            }
        }
        temp = temp.next;
        return false;
    } else {
        return false;
    }
}