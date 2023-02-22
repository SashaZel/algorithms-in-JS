const myArray = [7, 8, 1, 3, 7, 5, 4, 9, 2];

function quickSort(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const midPart = partition(arr, lo, hi);
  quickSort(arr, lo, midPart - 1);
  quickSort(arr, midPart + 1, hi);
}

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let indx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      indx++;
      const temp = arr[i];
      arr[i] = arr[indx];
      arr[indx] = temp;
    }
  }
  indx++;
  arr[hi] = arr[indx];
  arr[indx] = pivot;
  console.log(indx);
  return indx;
}

quickSort(myArray, 0, myArray.length-1);

console.log(myArray);
