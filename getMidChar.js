/*
Description:

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s){
  var midIndex = Math.ceil(s.length/2);

  if(s.length % 2 === 0){
  return [s[midIndex-1],s[midIndex]].join('');
  } else {
    return s[midIndex-1];
  }
}
