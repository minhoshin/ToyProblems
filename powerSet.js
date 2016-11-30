/*
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
*/

function powerSet(string) {
  var results = [''];
  noDupes = [];
  var lowerCaseSort = string.toLowerCase().split('').sort(function(a,b){
    if(a>b){
      return 1;
    }

    else if(b>a){
      return -1;
    }

    else {
      return 0;
    }
  });

  for(var i = 0; i < lowerCaseSort.length; i++){
    if(noDupes.indexOf(lowerCaseSort[i])<0){
      noDupes.push(lowerCaseSort[i]);
    }
  }

  var recurse = function(word, noDupes) {
    for (var i = 0; i < noDupes.length; i++) {
      results.push(word + noDupes[i]);
      recurse(word + noDupes[i], noDupes.slice(i + 1));
    }
  };

  recurse('', noDupes);
  return results;
}
