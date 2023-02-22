class Queue {

	constructor () {
		this.minNumber = 0;
		this.maxNumber = 0;
		this.queueStore = {};
	};
 
    inQueue (person) {
    	this.queueStore[this.maxNumber] = person;
    	this.maxNumber++;
    };

    outQueue () {
    	const result = this.queueStore[this.minNumber];
    	delete this.queueStore[this.minNumber];
        this.minNumber++;
        return result;
    };

    getLength () {
    	return this.maxNumber - this.minNumber;
    };

    isEmpty () {
    	return this.getLength() === 0;
    };

    clear () {
    	this.minNumber = 0;
    	this.maxNumber = 0;
    	this.queueStore = {}
    }

}

const myQueue = new Queue();

console.log("@length ", myQueue.getLength());

myQueue.inQueue("John");
myQueue.inQueue("Alice");
myQueue.inQueue("Patric");

console.log("@length ", myQueue.getLength());
console.log("@isEmpty ", myQueue.isEmpty());

console.log(myQueue.outQueue());

console.log("@length ", myQueue.getLength());

console.log(myQueue.outQueue());
myQueue.inQueue("Ivan");

console.log("@length ", myQueue.getLength());
myQueue.clear();
console.log("@isEmpty ", myQueue.isEmpty());
