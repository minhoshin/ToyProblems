/*Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
*/



function LetterCapitalize(str) {

  var words = str.split(' ');

  for(var i=0; i<words.length; i++){
    var letters = words[i].split('');
    letters[0] = letters[0].toUpperCase();
    words[i] = letters.join('');
  }


 return words.join(' ');
}
