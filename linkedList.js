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

    shift(){
        if(this.head === null){
            return undefined
        }else if(this.head.next === null){
            this.head = null;
            this.tail = null;
            this.length--
        }else{
            let newNode = this.head.next;
            this.head.next = null
            this.head = newNode;
            this.length--
        }

        return this
    }

    get(index){
        let indx = 0;
        if (index > this.length || index < 0) return undefined
        let current = this.head;
        while(indx<index){
            current = current.next;
            indx++
        }
        return current;
    }

    set(index,value){
        let current  = this.get(index);
        if(current) {
            current.value = value;
            return true;
        }
        return false
    }

    insert(index,value){
        if(index === 0) this.unshift(value);
        if(index === this.length) this.push(value);
        if(index <0 || index > this.length) return false;
        const newNode = new Node(value);
        const prevNode = this.get(index-1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++
        return this
    }

    remove(index){
        if(index === 0){
            this.shift()
        }else if(index === this.length-1){
            this.pop()
        }else if(index < 0){
            return undefined;
        }else{
            let prevNode = this.get(index-1);
            let nextNode = prevNode.next.next;
            prevNode.next = nextNode;
        }
        this.length-=1;
        return true
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i=0; i<this.length; i++){
            next = temp.next; //5,6,7
            temp.next = prev; //5-next:null,5-next:4-next:null,6-next:5-next:4-next:null...
            prev = temp; //4-next:null,5-next:4-next:null,6-next:5-next:4-next:null...
            temp = next; // 5-linked; 6-linked...
        }
    }
}


const newLL = new LinkedList(4);
newLL.push(5)
newLL.push(6)
newLL.push(7)
newLL.push(8)

// newLL.removerepeate()
// newLL.pop()
// newLL.unshift(3)
// newLL.shift()
// newLL.set(1,9)
// newLL.insert(1,5);
// console.log(newLL.get(2),'l')
// newLL.remove(2)
// console.log(newLL.get(2),'k')
// newLL.reverse();
// console.log(newLL)