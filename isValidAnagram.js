/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/


var isAnagram = function(s, t) {
  var splitS = s.split('');
  var splitT = t.split('');

  if(splitS.length !== splitT.length) {
    return false;
  }

  while(splitS.length > 0){
    var letter = splitS.shift();
    var s2Index = splitT.indexOf(letter);
    if(s2Index === -1){
      return false;
    }
    else {
      splitT.splice(s2Index, 1);
    }
  }

  return splitT.length === 0;
};
