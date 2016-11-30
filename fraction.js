/*
Fraction Converter
Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.

Examples
Input	Output
number:
0.5	"1/2"
number:
3	"3/1"
number:
2.5	"5/2"
number:
2.75	"11/4"
*/

var fraction = function(number){
  var left = number.toString().split('.')[0];
  var right = number.toString().split('.')[1];

  if(!right){
    return left + '/1';
  }

var numerator = left + right;
var denominator = Math.pow(10, right.length);

var gcd = function(num, den){
  if(!den){
    return num;
  }

  return gcd(den, num % den);
};

var divisor = gcd(numerator, denominator);

numerator = numerator/divisor;
denominator = denominator/divisor;

return numerator + '/' + denominator;
};
