/*
Non-repeated Character
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {
  var count = 0;
  var noRepeat = 'sorry';
  for(var i = 0; i < string.length; i++){
    for(var j = 0; j < string.length; j++){
      if(string[i]===string[j]){
        count+=1;
      }
    }
    if(count === 1){
      return string[i];
    }
    count = 0;
  }
  return noRepeat;
}
