class Stack {
  constructor () {
    this.length = 0;
    this.stack = {};
  };
  push (element) {
    this.stack[this.length] = element;
    this.length++;
  };
  pop () {
    const result = this.stack[this.length-1];
    delete this.stack[this.length-1];
    this.length--;
    return result;
  };
  peek () {
    return this.stack[this.length-1];
  };
  isEmpty () {
    return this.length === 0;
  }
  clear () {
    this.length = 0;
    this.stack = {};
  }
};

const myStack = new Stack();

console.log("@isEmpty ", myStack.isEmpty());

myStack.push('hi_1');
myStack.push('hi_2');
myStack.push('hi_3');
myStack.push('hello');

console.log("@length ", myStack.length);
console.log("@pop ", myStack.pop());
console.log("@peek ", myStack.peek());
console.log("@isEmpty ", myStack.isEmpty());
console.log("@lenght ", myStack.length);
console.log("@pop ", myStack.pop());
console.log("@lenght ", myStack.length);

myStack.clear();

console.log("@after_clear ", myStack.length);
console.log("@isEmpty ", myStack.isEmpty());