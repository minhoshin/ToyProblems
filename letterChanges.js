/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/

function LetterChanges(str) {
  	var string = str.split('');
    var vowels = 'aeiou';
  	var letters = 'abcdefghijklmnopqrstuvwxyz';

  for(var i=0; i<string.length; i++){

    if(letters.indexOf(string[i])!==-1){
      var index = letters.indexOf(string[i]);
      string.splice(i, 1, letters[index+1]);
    }

    if(vowels.indexOf(string[i]) !== -1){
      string.splice(i, 1, string[i].toUpperCase());
    }

  }

  return string.join('');
}
