/*
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.
*/


function SimpleAdding(num) {

  for(var i = num-1; i > 0; i--){
  	num+=i;
  }

  return num;
}
