/*
Longest Palindrome
Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples
Input	Output
string:
"aibohphobia"	"aibohphobia"
string:
"My dad is a racecar athlete"	"a racecar a"
*/

function longestPalindrome (string) {
  var splitStr = string.split('');
  var sliced;
  var word;
  var reversed;
  var longestWord = '';

  for(var i = 0; i < splitStr.length; i++) {
    for(var j = splitStr.length; j > i; j--){
      if(splitStr[i] === splitStr[j]){
        sliced = splitStr.slice(i, j+1);
        reversed = sliced.slice().reverse();
        if(sliced.join('') === reversed.join('')){
          if(sliced.length > longestWord.length){
            longestWord = sliced.join('');
          }
        }
      }
    }
  }
  return longestWord;
}
