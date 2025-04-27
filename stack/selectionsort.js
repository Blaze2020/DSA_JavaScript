"use strict";
// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/tutorial/
const a = [2, 3, 5, 6, 1, 9, 8];

//todo: sorting based on selecting minimum
function selectionSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }

    // swap
    let temp = a[i];
    a[i] = a[min];
    a[min] = temp;
  }
  return a;
}

console.log(selectionSort(a));
