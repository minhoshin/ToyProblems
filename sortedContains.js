/*
sortedArrayContainsItem looks through a sorted array for a specified target item.
It uses a binary search method to locate the target item.
This search employs a logarithmic time complexity - O(log(n)).
*/

var sortedArrayContainsItem = function(array, item){
  if (array.length === 0){
    return false;
  }

  var recurse = function(start, finish){
    var center = Math.floor(((finish - start) / 2) + start);

    // Base cases
    if (start === finish) {
      return array[start] === item;
    } else if (array[center] === item) {
      return true;
    }

    // Recursion
    if (item < array[center]) {
      return recurse(start, center - 1);
    } else {
      return recurse(center + 1, finish);
    }
  };

  return recurse(0, array.length - 1);
};
