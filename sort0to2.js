/*
Sort an array of 0s, 1s and 2s
Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[]. The functions should put all 0s first, then all 1s and all 2s in last.

Example
Input = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
Output = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
*/

function dutchSort(arr){
  //create obj
  var obj = {};
  // create results
  var results = [];

  // iterate over array
    // store in object
    // if object does not include the number, create a key val pair with 1 as count val
    for(var i = 0; i < arr.length; i++){
      var num = arr[i];
      if(!obj[num]){
        obj[num] = 1;
      }
      // if object does contain the key, increment its count val
      else {
        obj[num]++;
      }
    }
  console.log(obj);

  for(var key in obj){
    // while key in obj is 0 AND count val is > 0
      // push all 0's into results array
    while(key === '0' && obj[key] > 0){
      results.push(Number(key));
      obj[key]--;
    }
    // while key in obj is 1 AND count val is > 0
      // push all 1's into results array
    while(key === '1' && obj[key] > 0){
      results.push(Number(key));
      obj[key]--;
    }
   // while key in obj is 2 AND count val is > 0
      // push all 2's into results array
    while(key === '2' && obj[key] > 0){
      results.push(Number(key));
      obj[key]--;
    }
  }
  // return results array
  return results;
}

// Time complexity: O(n)
