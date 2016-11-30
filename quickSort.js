function quickSort(arr){
  var left;
  var right;
  var pivot;

  if(arr.length === 0){
    return arr;
  }

  left = [];
  right = [];
  pivot = arr[0];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
