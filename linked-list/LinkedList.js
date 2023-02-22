class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.length = 0;
    this.start = null;
  }

  toString() {
    let result = "";
    let currentElement;
    let nextElement;
    for (let i = 0; i <= this.length; i++) {
      if (i === 0) {
        currentElement = this.start;
      } else {
        result += currentElement.value + " ->> ";
        nextElement = currentElement.next;
        currentElement = nextElement;
      }
    }
    return result;
  }

  setListElement(newElement) {
    if (this.length === 0) {
      this.start = newElement;
    } else {
      let currentElement = this.start;
      let nextElement;
      for (let i = 1; i < this.length; i++) {
        nextElement = currentElement.next;
        currentElement = nextElement;
      }
      currentElement.setNext(newElement);
    }
    this.length += 1;
    return this.length;
  }

  getElement(index) {
    if (typeof index !== "number" || index >= this.length) {
      return undefined;
    }
    let currentElement = this.start;
    for (let i = 0; i < index; i++) {
      currentElement = currentElement.next;
    }
    return currentElement.value;
  }

  removeElement(index) {
    if (typeof index !== "number" || index >= this.length) {
      return undefined;
    }
    let currentElement = this.start;
    if (index === 0) {
      this.start = currentElement.next;
      this.length -= 1;
      return 1;
    }
    for (let i = 0; i <= index; i++) {
      let delElement = currentElement.next;
      if (i === index-1) {
        this.length -= 1;
        currentElement.next = delElement.next;
        return 1;
      }
      currentElement = delElement;
    }
  }

  findElement(valueForSearch) {
    let currentElement = this.start;
    for (let i=0; i < this.length; i++) {
      if (currentElement.value === valueForSearch) {
        return i;
      }
      currentElement = currentElement.next;
    }
    return -1;
  } 

  insertElement(newValue, index) {
    if (typeof index !== 'number' || index > this.length || index < 0) {
      return -1;
    }
    let currentElement = this.start;
    let insertElement = new Node(newValue);
    if (index === 0) {
      this.start = insertElement;
      this.start.next = currentElement;
      this.length += 1;
      return this.length;
    }

    for (let i=0; i<this.length; i++) {
      let nextElement = currentElement.next;
      if (i === index-1) {
        currentElement.next = insertElement;
        insertElement.next = nextElement;
        this.length += 1;
        return this.length;
      }
      currentElement = currentElement.next;
    }
  }

}

const node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(8);

const myLinkedList = new LinkedList();

myLinkedList.setListElement(node1);
myLinkedList.setListElement(node2);
myLinkedList.setListElement(node3);
myLinkedList.setListElement(node4);

//console.log(myLinkedList);
console.log(myLinkedList.toString());
//console.log(myLinkedList.length);
//console.log(myLinkedList.getElement(0));
//console.log(myLinkedList.removeElement(1));
//console.log(myLinkedList.findElement(6));
console.log(myLinkedList.insertElement(10, 2))
console.log(myLinkedList.toString());