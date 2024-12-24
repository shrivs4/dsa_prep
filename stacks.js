class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value){
        let node = new Node(value);
        this.top = node
        this.length = 1
    }

    push(value){
        if(value === null) return this;
        let newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
        }else{
        newNode.next = this.top;
        this.top = newNode;
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return 'no items available';
        let temp = this.top;
        if(this.length === 1){
            this.top = null;
        }else{
            this.top = this.top.next;
            temp.next = null
        }

        this.length--
        return temp
    }
}


let StackCall = new Stack(7);

StackCall.push(23);
StackCall.push(3);
StackCall.push(11);
StackCall.push(12);
StackCall.pop();
console.log(StackCall)