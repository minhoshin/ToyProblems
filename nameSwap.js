/*
Description:

Write a function that returns a string in which firstname is swapped with last name.
*/


// function nameShuffler(str){
//   var splitStr = str.split(' ');
//   var temp;
//   temp = splitStr[0];
//   splitStr[0] = splitStr[1];
//   splitStr[1] = temp;
//
//   return splitStr.join(' ');
// }

// refactored
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}
