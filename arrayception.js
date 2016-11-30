/*
Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

Examples
Input	Output
array:
[ [ 5 ], [ [ ] ] ]	2
array:
[ 10, 20, 30, 40 ]	1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	4
array:
[ ]	0
array:
[ [ [ ] ] ]	0
*/

function arrayception (array) {
  var longest = 0;

  var recurse = function(arr, lvl){
    if(!Array.isArray(arr)){
      if(lvl > longest){
        longest = lvl;
      }
    } else {
      lvl+=1;
      for(var i = 0; i < arr.length; i++){
        recurse(arr[i], lvl);
      }
    }
  };

  recurse(array, 0);
  return longest;
}
