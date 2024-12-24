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

  shift(){
    if(this.head === null) return this.head;
    let node = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;
    return node;
  }

  get(index){
    if(index<0 && index>=this.length) return undefined;
    let temp = this.head;
    if(index < this.length/2){
      for(let i = 0; i<index; i++){
        temp = temp.next
      }
    }else{
      temp = this.tail;
      for (let i = this.length -1 ; i>index; i--){
        temp = temp.prev
      }
    }
    return temp;
  }

  set(index,value){
    if(index<=0 || index > this.length) return 'out of bound';
    let node = this.get(index);
    node.value = value;
  }

  insert(index,value){
    let newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    let prevNode = this.get(index-1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index){
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    if(this.length < 0) return false; 
    let removedNode = this.get(index);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next; 
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let myDoublyLinkedList = new DoublylinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(4)
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.pop();
// myDoublyLinkedList.unshift(5)
// myDoublyLinkedList.shift()
// myDoublyLinkedList.get(1)
myDoublyLinkedList.set(2,3);
myDoublyLinkedList.insert(1,5);
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList);
