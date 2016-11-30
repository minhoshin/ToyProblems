// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums  = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
//
// [0, 1, 0, 3, 12]
//
// [0, 0, 0, 0, 0] => [1, 3, 12, 0, 0]

// strategy 1

function move(arr) {
    arr2 = new Array(arr.length);
    origIndex = 0;
    for (i = 0; i < arr2.length; i++) {
        while (origIndex < arr.length && arr[origIndex] === 0) {
            origIndex++;
        }
        if (origIndex >= arr.length) {
            arr2[i] = 0;
        } else {
            arr2[i] = arr[origIndex];
        }
        origIndex++;
    }
    return arr2;
}


// strategy 2

function move(arr){
var count = 0;

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      count++;
      arr.splice(i,1);
    }
  }

  for(var j = 0; j < count; j++){
    arr.push(0);
  }

  return arr;
}


// strategy 3

function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2){
var result = [];

    while(arr1.length && arr2.length){
      if(arr1[0] !== 0) {
        result.push(arr1.shift());
      }

      if(arr2[0] !== 0){
        result.push(arr2.shift());
      }


    }

    while(arr1.length){
      result.push(arr1.shift());
    }

  while(arr2.length){
    result.push(arr2.shift());
  }
    return result;
}
