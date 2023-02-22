class MaxHeap {
  heapData: number[];
  heapSize: number;
  constructor (arr: number[]) {
    this.heapData = arr;
    this.heapSize = this.heapData.length;
    for (let i=Math.floor(this.heapSize/2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }
  private parent(i: number) {
    return Math.floor(i+1/2)-1;
  }
  private left(i: number) {
    return (i+1)*2-1;
  }
  private right(i: number) {
    return (i+1)*2;
  }
  private swap(a: number, b: number): void {
    const temp = this.heapData[a];
    this.heapData[a] = this.heapData[b];
    this.heapData[b] = temp;
  }
  private maxHeapify (i: number) {
    const arr = this.heapData;
    //console.log('before ', arr);
    const leftIndx = this.left(i);
    const rightIndx = this.right(i);
    //console.log('leftIndx ', leftIndx, 'rightIndx ', rightIndx);
    let largest = i;
    if (leftIndx < this.heapSize && arr[leftIndx] > arr[largest]) {
      //console.log('left is large');
       largest = leftIndx;
    }
    if (rightIndx < this.heapSize && arr[rightIndx] > arr[largest]) {
      //console.log('right is large');
      largest = rightIndx;
    }
    //console.log('largest ', largest)
    if (largest !== i) {
      this.swap(i, largest);
      this.maxHeapify(largest);
    }
  }
  sort () {
    // Implement sorting
    for (let i=this.heapData.length-1; i >=1; i--) {
      this.swap(0, i);
      this.heapSize--;
      this.maxHeapify(0);
    }
    return this.heapData;
  }
  print () {
    console.log(this.heapData);
  }
}

const myArray = [ 7, 2, 5, 8, 9, 10, 11, 66, 24, 56, 75 ];
const myArrayTwo = [ 1, 8, 3, 16 ];
/*
       1
    2     3
6  7     8  9 
*/

const myHeap = new MaxHeap(myArray);
//myHeap.maxHeapify(0);

myHeap.print(); 

myHeap.sort();
myHeap.print(); 