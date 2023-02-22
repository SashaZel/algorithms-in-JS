class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackWithLL {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  push(node) {
    if (this.length === 0) {
      this.head = node;
      this.length++;
      return 1;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return -1;
    }
    const readyOut = this.head;
    this.head = readyOut.next;
    readyOut.next = null;
    this.length--;
    return readyOut;
  }
  toString() {
    let result = '';
    let current = this.head;
    for (let i=0; i < this.length; i++) {
      result = current.value + result;
      if (current.next) {
        result = ' <- ' + result;
        current = current.next;
      }
    }
    return result;
  }
}

const node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(8);

const myQueue = new StackWithLL();
myQueue.push(node1);
console.log(myQueue.toString());
myQueue.push(node2);
myQueue.push(node3);
console.log(myQueue.toString());
console.log(myQueue.pop())
myQueue.push(node4);
console.log(myQueue.toString());
