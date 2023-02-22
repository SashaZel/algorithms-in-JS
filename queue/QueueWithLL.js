class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithLL {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  inQueue(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return 1;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.length;
  }
  deQueue() {
    const readyOut = this.head;
    this.head = readyOut.next;
    readyOut.next = null;
    this.length--;
    return readyOut.value;
  }
  toString() {
    let result = '';
    let current = this.head;
    for (let i=0; i < this.length; i++) {
      result += current.value;
      if (current.next) {
        result += ' -> ';
        current = current.next;
      }
    }
    return result;
  }

  // Peek()
  // getLength()
  
}

const node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(8);

const myQueue = new QueueWithLL();

console.log(myQueue.toString());
myQueue.inQueue(node1);
myQueue.inQueue(node2);
myQueue.inQueue(node3);
myQueue.inQueue(node4);
console.log(myQueue.toString());
console.log(myQueue.deQueue());
console.log(myQueue.toString());
