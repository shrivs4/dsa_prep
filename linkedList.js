class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const node = new Node(value)
        this.head = node;
        this.tail = node;
        this.length = 1
    }

    push(value){
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            this.length = 1
        }else{
            this.tail.next = node;
            this.tail = node;
            this.length +=1;
        }
        return this
    }

    pop(){
        if(this.head === null){
            return 'no items to pop'
        }else if(this.head.next === null){
            this.head = null;
            this.tail = null;
        }else{
            let current = this.head;
            while(current.next.next !== null){
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.length -= 1;
            return this
        }
    }

    unshift(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else {
        node.next = this.head;
        this.head = node;
        }
        this.length +=1
        return this
    }
}

const newLL = new LinkedList(4);
newLL.push(5)
newLL.push(6)
newLL.push(7)
newLL.push(8)
newLL.pop()
newLL.unshift(3)
console.log(newLL)