/*
Balanced Parenthesis
Given a string, return true if it contains balanced parenthesis ().
*/

function isBalanced (string) {
 var splitStr = string.split('');
 var left = 0;
 var right = 0;

  for(var i = 0; i < splitStr.length; i++){
    if(splitStr[i] === '(')  {
      left++;
    }

    if(splitStr[i] === ')' && left > 0)  {
      right++;
    }
  }

  return left === right;
}
