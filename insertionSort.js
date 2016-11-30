/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. this means that equal elements should retain their relative order. Numbers, as primities, give us no way to check this, so we'll be sorting objects with a value field, on which they will be sorted like so:

[[value: 10], [value: 5, order: 1], [value: 5, order: 2]]

A stable sort must return [[value: 5, order: 1], [value: 5, order: 2]] in that order.

input: [3,1,2]
output: [1,2,3]

input: [1,0,100,42]
output: [0,1,42,100]
*/

function insertionSort(array) {
  for(var i = 0; i < array.length; i++){
    var current = array[i];
    for(var j = i-1; j >= 0 && array[j] > current; j--){
      array[j+1] = array[j];
    }
    array[j+1] = current;
  }
  return array;
}
