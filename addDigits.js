/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/


// var addDigits = function(num) {
//   var sum;
//   if(num < 10){
//     return num;
//   } else {
//     sum = (num % 10) + Math.floor(num/10);
//     if (sum > 9) {
//       sum = (sum % 10) + Math.floor(sum/10);
//     }
//   }
//   return sum;
// };

// O(1) Constant Time
var addDigits = function(num) {
  if (num <= 0) {
    return 0;
  }

  return (num - 1) % 9 + 1;
};
