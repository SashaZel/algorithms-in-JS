const myArray = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
const myNextArray = [ 29, 28, 25, 22, 19, 11, 9, 7, 3, 1];

myArray.splice(2, 1)

//console.log(myArray);

for (let i=0; i<myArray.length; i++) {
  //console.log('in loop_', myArray[i]);
  if (myArray[i] === 'bar') {
    break
  }
}

const myNumber = 20;
for (let i=0; i<myNextArray.length; i++) {
  if (myNumber > myNextArray[i]) {
    myNextArray.splice(i, 0, myNumber);
    break;
  }
}

console.log(myNextArray);