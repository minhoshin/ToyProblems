/*Number to English
Write a function numberToEnglish, it should take a number and return the number as a string using English words.
*/
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


function numberToEnglish (number) {
 var output = '';
 var numInPlace;
 var rest;

  if(numbersToWords[number]){
   output += numbersToWords[number];
 } else {
   numInPlace = Math.floor(number / 10);
   rest = number % 10;
   output += numbersToWords[numInPlace * 10] + '-' + numbersToWords[rest];
 }

 return output;
}
