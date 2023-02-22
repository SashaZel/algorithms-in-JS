class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class myDoubleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  setNode(node) {
    if (this.head === null && this.length === 0) {
      this.head = node;
      this.length = 1;
      return 0;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    node.prev = currentNode;
    currentNode.next = node;
    this.length++;
    return this.length;
  } 

  insertNode(index, node) {
    let currentNode = this.head;
    for(let i=1; i<=index && i<this.length; i++) {
      if (i === index) {
        const nextNode = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;
        node.next = nextNode;
        nextNode.prev = node;
        this.length++;
        return i;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    for (let i=0; i < this.length; i++) {
      result += currentNode.value
      if (currentNode.next !== null) {
        result += ' <-> ';
      }
      currentNode = currentNode.next;
    }
    return result;
  }

  toDetailString() {
    let currentNode = this.head;
    let result = '';
    for (let i=0; i < this.length; i++) {
      result += `{ prev.value: ${currentNode.prev?.value || 'null'}, value: ${currentNode.value}, next.value: ${currentNode.next?.value || 'null'} }`;
      if (currentNode.next !== null) {
        result += ' <-> ';
      }
      currentNode = currentNode.next;
    }
    return result;
  }
}

const myDouble = new myDoubleLinkedList();

const myNode1 = new Node(5);
const myNode2 = new Node(6);
const myNode3 = new Node(7);
const myNode4 = new Node(8);
const myNode5 = new Node(12);

myDouble.setNode(myNode1);
myDouble.setNode(myNode2);
myDouble.setNode(myNode3);
myDouble.setNode(myNode4);
myDouble.insertNode(2, myNode5);

console.log(myDouble.toDetailString());
//console.log(myDouble.head.next.next)
