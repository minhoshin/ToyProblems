/*
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined. You can assume that all array elements will be positive integers.
*/

var isSquare = function(arr){
  var sqrtNums = [];

// checks if empty array
  if(!arr.length){
    return undefined;
  }

// if not empty, iterates through array and square roots all elements and pushes to sqrtNums array
  for(var i = 0; i < arr.length; i++){
    {
      sqrtNums.push(Math.sqrt(arr[i]));
    }
  }

// checks the square of each element in sqrtNums array and confirms all elements in arr are squares
// returns false on first instance that an element is not a square root
  for(var j = 0; j < sqrtNums.length; j++){
    if(arr.indexOf(Math.pow(sqrtNums[j], 2)) < 0){
      return false;
    }
  }

  return true;
};
