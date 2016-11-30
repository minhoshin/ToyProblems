/*
Missing Parenthesis

Missing Parenthesis takes a string consisting of parenthesis. The function returns the number of parenthesis required to create a string of balanced parenthesis.
*/



function missPar(str) {
  var strArr = str.split('');
  var leftParens =  0;
  var rightParens = 0;

  for(var i = 0; i < strArr.length; i++){

    if(strArr[i] === '('){
      leftParens+=1;
    }

    if(strArr[i] === ')'){
      if(leftParens !== 0){
        leftParens-=1;
      }
      else{
        rightParens+=1;
      }
    }

    console.log('round', i, 'left', leftParens);
    console.log('round', i, 'right', rightParens);
  }

  // console.log(leftParens);
  return leftParens + rightParens;
}

// L = [(];
//   R = [), ), )];

console.log(missPar('(()(()')); // 2
console.log(missPar('()()(()')); // 1
console.log(missPar('(())(()())')); // 0
console.log(missPar('))()'));  // 2
console.log(missPar(')(')); // 2
