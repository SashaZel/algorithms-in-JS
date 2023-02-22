function partition(arr, lo, hi) {
   const pivot = arr[hi];
   let indx = lo - 1;
   for (let i=lo; i < hi; i++) {
    if(arr[i] <=  pivot) {
      indx++;
      const temp = arr[i];
      arr[i] = arr[indx];
      arr[indx] = temp;
    }
   }
   indx++;
   arr[hi] = arr[indx];
   arr[indx] = pivot;
   return indx;
}

function myQuickSort(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const prt = partition(arr, lo, hi);
  myQuickSort(arr, lo, prt - 1);
  myQuickSort(arr, prt + 1, hi);
}

const myArr = [5, 8, 2, 3, 9, 4];

myQuickSort(myArr, 0, myArr.length - 1);
console.log(myArr);
