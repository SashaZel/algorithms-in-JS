const myList = [ 1, 2, 3, 4, 7, 8, 9];

function linearSearch(arr, value) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
// const mySearch = linearSearch(myList, 9);
// console.log(mySearch);



function binarySearch(arr, value) {

  // It works!
  // let min = -1; //0
  // let max = arr.length; //6
  // do {
  //   let m = min + Math.ceil((max - min)/ 2);
  //   console.log('@min max m ', min, max, m);
  //   if (arr[m] === value) {
  //     return m;
  //   }
  //   if (arr[m] > value) {
  //     max = m-1;
  //   } else {
  //     min = m;
  //   }
  // } while (min < max)
  // return -1;

  // It works too
  let min = 0;
  let max = arr.length + 1;
  do {
    let m = min + Math.floor((max - min)/ 2);
    console.log('@min max m ', min, max, m);
    if (arr[m] === value) {
      return m;
    }
    if (arr[m] > value) {
      max = m;
    } else {
      min = m+1;
    }
  } while (min < max)
  return -1;
}

//console.log(binarySearch(myOrderedList, 4))

function anotherBinarySearch (arr, needle) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo)/2);
    if (arr[mid] === needle) {
      return mid;
    }
    if (needle < arr[mid]) {
      hi = mid;
    }
    if (needle > arr[mid]) {
      lo = mid+1;
    }
  } 
  return -1;
}
//console.log(anotherBinarySearch(myOrderedList, 9));


const myOrderedList = [ 1, 2, 3, 4, 9, 10, 17 ];

function newBinarySearch ( arr, needle ) {
  let low = 0;
  let hight = arr.length;
  while (low < hight) {
    const middle = Math.floor(low + (hight - low)/2);
    if (arr[middle] === needle) {
      return middle;
    }
    if (needle < arr[middle]) {
      hight = middle;
    }
    if (needle > arr[middle]) {
      low = middle + 1;
    }
  }
  return -1;
}

console.log(newBinarySearch(myOrderedList, 1));