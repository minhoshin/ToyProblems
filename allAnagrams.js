/*
All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.
*/

function allAnagrams(string){
  var results = [];
  var splitString = string.split('');


  function recurse(addWord, left){
    if(addWord.length === string.length){
      if(results.indexOf(addWord) < 0){
        results.push(addWord);
      }
      return;
    }

    for(var i=0; i<left.length; i++){
      var temp = left.slice();
      var word = addWord + left[i];
      temp.splice(i, 1);
      recurse(word, temp);
    }
  }

  recurse('', splitString);
  return results;
}
