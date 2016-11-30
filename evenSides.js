function evenSides(array){
  var index;
  var left;
  var right;
  var leftSum=0;
  var rightSum=0;


  for(var i = 0; i < array.length; i++){
    index = i;
    left = array.slice(0,i);
    right = array.slice(i+1, array.length);
    for(var j = 0; j < left.length; j++){
      leftSum +=left[j];
    }

    for(var k = 0; k < right.length; k++){
      rightSum +=right[k];
    }

    console.log('i', i);
    console.log('leftsum', leftSum);
    console.log('rightsum', rightSum);


    if(leftSum === rightSum){
      return index;
    }
    leftSum = 0;
    rightSum = 0;
  }

  return null;
}


console.log(evenSides([3,4,1,2])); //1
// console.log(evenSides([3,5,1,2])); //null
// console.log(evenSides([6,2,5,8])); //2
