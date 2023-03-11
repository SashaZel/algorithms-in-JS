export class Node {
  value: string;
  next: Node | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }

  setNext(next: Node) {
    this.next = next;
  }
}

export class LinkedList {
  length: number;
  start: Node | null;

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

  // TODO: add types

  setListElement(newElement: Node) {
    if (this.length === 0) {
      this.start = newElement;
    } else {
      let currentElement = this.start;

      let nextElement;
      for (let i = 1; i < this.length; i++) {
        if (currentElement === null) {
          throw new Error("no current element in setListElement");
        }
        nextElement = currentElement.next;
        currentElement = nextElement;
      }
      if (currentElement === null) {
        throw new Error("no current element in setListElement");
      }
      currentElement.setNext(newElement);
    }
    this.length += 1;
    return this.length;
  }

  getElement(index: number) {
    if (typeof index !== "number" || index >= this.length) {
      return undefined;
    }
    let currentElement = this.start;
    for (let i = 0; i < index; i++) {
      if (currentElement === null) {
        throw new Error("no current element in getElement");
      }
      currentElement = currentElement.next;
    }
    if (currentElement === null) {
      throw new Error("no current element in getElement");
    }
    return currentElement.value;
  }

  removeElement(index: number) {
    if (typeof index !== "number" || index >= this.length) {
      return undefined;
    }
    let currentElement = this.start;
    if (currentElement === null) {
      throw new Error("no current element in removeElement");
    }
    if (index === 0) {
      this.start = currentElement.next;
      this.length -= 1;
      return 1;
    }
    for (let i = 0; i <= index; i++) {
      
    if (currentElement === null || !currentElement?.next) {
      throw new Error("no currentElement.next in removeElement");
    }
      let delElement: Node = currentElement.next;
      if (i === index - 1) {
        this.length -= 1;
        currentElement.next = delElement.next;
        return 1;
      }
      currentElement = delElement;
    }
  }

  findElement(valueForSearch) {
    let currentElement = this.start;
    for (let i = 0; i < this.length; i++) {
      if (currentElement.value === valueForSearch) {
        return i;
      }
      currentElement = currentElement.next;
    }
    return -1;
  }

  insertElement(newValue, index) {
    if (typeof index !== "number" || index > this.length || index < 0) {
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

    for (let i = 0; i < this.length; i++) {
      let nextElement = currentElement.next;
      if (i === index - 1) {
        currentElement.next = insertElement;
        insertElement.next = nextElement;
        this.length += 1;
        return this.length;
      }
      currentElement = currentElement.next;
    }
  }
}
