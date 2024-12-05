class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublylinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    let temp = this.tail;
    if(this.length === 0){
        return undefined
    }
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
    }

    this.length--
    return temp

  }

  unshift(value){
    let newNode = new Node(value);
    if(this.length === 0){
        this.head = newNode;
        this.tail = this.head;
    }else{
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    this.length++;
    return this;
  }
}

let myDoublyLinkedList = new DoublylinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
console.log(myDoublyLinkedList);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(3)
console.log(myDoublyLinkedList);
