const arrayForSorting = [1, 7, 2, 3, 6, 99, 9, 2, 2, 12, 1, 77, 3];

function goodBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(goodBubbleSort(arrayForSorting));

function myBubbleSort(inputArr) {
  const arr = [...inputArr];
  let forLoopCounter = 0;
  let endPointer = arr.length - 1;
  let sortMarker = false;
  while (!sortMarker) {
    let localSortMarker = true;
    for (let i = 0; i < endPointer; i++) {
      forLoopCounter++;
      if (arr[i] > arr[i + 1]) {
        localSortMarker = false;
        let tempData = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempData;
      }
    }
    console.log("@end of the while loop arr=", arr);
    endPointer--;
    sortMarker = localSortMarker;
  }
  console.log("@forLoopCounter=", forLoopCounter);
  return arr;
}

//console.log(myBubbleSort(arrayForSorting));
