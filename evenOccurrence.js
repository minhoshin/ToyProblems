/*
Even Occurrence
3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Examples
Input	Output
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
arr:
[ "cat", "dog", "dig", "cat" ]	"cat"
*/


// time complexity = O(n^2)

// function evenOccurrence (arr) {
//   var count = 0;
//
//   for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//       if(arr[i] === arr[j]){
//         count += 1;
//       }
//     }
//     if(count % 2 === 0){
//       return arr[i];
//     }
//
//     else {
//       count = 0;
//     }
//   }
//   return null;
// }


// refactored to optimize time complexity
// time complexity = O(n)

function evenOccurrence(arr){
  var obj = {};

  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  for(var j = 0; j < arr.length; j++){
    if(obj[arr[j]] % 2 === 0){
      return arr[j];
    }
  }

  return null;
}
