/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

Examples
Input	Output
array:
[ 1, 2, 3 ]	6
array:
[ 4, -1, 5 ]	8
array:
[ 10, -11, 11 ]	11
array:
[ 1, 2, 3, -6, 4, 5, 6 ]	15
*/

function sumArray (array) {
  var highestNum = array[0];
  var runningCount = 0;

  for(var j = 0; j < array.length; j++){
    for(var k = j; k < array.length; k++){
      runningCount += array[k];
      if(runningCount > highestNum){
        highestNum = runningCount;
      }
    }
    runningCount = 0;
  }

  return highestNum;
}
