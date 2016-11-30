/*
Reverse a string using a recursive solution
*/


function reverse(string){
  var splitString = string.split('');
  var recurse = function(revString, left){
    if(splitString.length === 0){
      return revString;
    }

    revString += left.pop();
    return recurse(revString, splitString);
  };

  return recurse('', splitString);
}
