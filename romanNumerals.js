/*
Roman Numeral Translator
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

You should return "null" on invalid input.
*/


function translateRomanNumeral (romanNumeral) {
  var splitRomans = romanNumeral.split('');
  var total = 0;

  console.log(splitRomans);
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

for(var i = 0; i < splitRomans.length; i++){
  var current = DIGIT_VALUES[splitRomans[i]];
  var next = DIGIT_VALUES[splitRomans[i+1]];

  if(next && current < next){
    total -= current;
  }

  else {
    total += current;
  }
}

if(isNaN(total)){
  return 'null';
}

  return total;
}
