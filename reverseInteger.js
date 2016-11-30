/*
Integer Reverse
Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.

Examples
Input	Output
n:
1234	4321
n:
100	1
n:
150	51
*/

function reverseInteger (n) {
  var reverse = 0;

  while(n !== 0){
    reverse = reverse * 10;
    reverse += n % 10;
    n = Math.floor(n / 10);
  }

  return reverse;
}
