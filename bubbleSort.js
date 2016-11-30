

function bubbleSort (input) {

  var temp;
  var swap;

  do{
    swap = false;
    for(var i=0; i<input.length; i++){
      if(input[i+1]<input[i]){
        temp = input[i+1];
        input[i+1] = input[i];
        input[i] = temp;
        swap = true;
      }
    }
  }while (swap);
  return input;
}

console.log(bubbleSort([3,5,2,7,5]));



function bubbleSort(arr){
  var temp;
  var swap;

  do {
    swap = false;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
      }
    }
  } while(swap);

  return arr;
}
