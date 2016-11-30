/*
Description:

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

// O(n^2) quadratic time
function pigIt(str){
  var words = str.split(' ');

  for(var i = 0; i < words.length; i++){
    var letters = words[i].split('');
    letters[words[i].length] = letters[0];
    letters.splice(0,1);
    letters.push('ay');
    words[i] = letters.join('');
  }

  return words.join(' ');
}


// functional method
// O(n^2) quadratic time
/*
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
*/
