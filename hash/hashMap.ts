import { Node, LinkedList } from "../linked-list/LinkedList.js";

// This implementation of HashMap

class HashMapNode {
  key: string;
  value: string;
  next: HashMapNode | null;
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  store: HashMapNode[];
  constructor(size: number) {
    this.store = new Array(size);
  }
  hashFunction(str: string) {
    const strLen = str.length;
    let sumOfCharCodes = 0;
    for (let i = 0; i < strLen; i++) {
      sumOfCharCodes += str.charCodeAt(i);
    }
    return sumOfCharCodes % this.store.length;
  }
  setValue(key: string, value: string) {
    const hashNumber = this.hashFunction(key);
    const newNode = new HashMapNode(key, value);
    if (!this.store[hashNumber]) {
      this.store[hashNumber] = newNode;
      return [hashNumber, 0];
    }
    let currentNode = this.store[hashNumber];
    let counterOfCollisions = 1;
    while (currentNode.next !== null) {
      const nextNode = currentNode.next;
      currentNode = nextNode;
      counterOfCollisions++;
    }
    currentNode.next = newNode;
    return [hashNumber, counterOfCollisions];
    // this.store[hashNumber] = value;
    // return hashNumber;
  }
  getValue(searchKey: string) {
    const hashNumber = this.hashFunction(searchKey);
    if (!this.store[hashNumber]) {
      return undefined;
    }
    let currentElement = this.store[hashNumber];
    do {
      if (currentElement.next === null || currentElement.key === searchKey) {
        return currentElement.value;
      }
      const nextElement = currentElement.next;
      currentElement = nextElement;
    } while (currentElement.next !== null);
    if (currentElement.key === searchKey) {
      return currentElement.value;
    }
  }
  printNodeValue(
    node: HashMapNode | undefined,
    resultPicture: string = ""
  ): string {
    let result = resultPicture;
    if (node === undefined) {
      return "--";
    }
    result += " -> " + node.value;
    if (node.next === null) {
      return result;
    }
    return this.printNodeValue(node.next, result);
  }
  print() {
    for (let i = 0; i < this.store.length; i++) {
      console.log(this.printNodeValue(this.store[i]));
    }
  }
  printNodeKeyValue(
    node: HashMapNode | undefined,
    resultPicture: string = ""
  ): string {
    let result = resultPicture;
    if (node === undefined) {
      return "--";
    }
    result += " -> { key: " + node.key + ", value: " + node.value + " }";
    if (node.next === null) {
      return result;
    }
    return this.printNodeValue(node.next, result);
  }
  printKeyValue() {
    for (let i = 0; i < this.store.length; i++) {
      console.log(this.printNodeKeyValue(this.store[i]));
    }
  }
}

const myHashMap = new HashMap(10);
console.log(myHashMap.setValue("hello", "This is hello word"));
console.log(myHashMap.setValue("ololo", "This is ololo word"));
console.log(myHashMap.setValue("brr!!!", "Oh, I'm so scared!!!"));
console.log(myHashMap.setValue("ababaaaaa", "Ababa! Awful."));
console.log(
  myHashMap.setValue(
    "Rolling Stones",
    "Pleased to meet you. Hope you guess my name"
  )
);

myHashMap.print();
console.log(myHashMap.getValue("hello"));
console.log(myHashMap.getValue("brr!!!"));
console.log(myHashMap.getValue("Rolling Stones"));
