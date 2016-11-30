/*
Rotated Array Search
If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.



Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.
*/

function rotatedArraySearch (rotated, target) {
  var midIndex = Math.floor(rotated.length/2);
  var ansIndex;

function recurse(input){
      if(input[midIndex]===target){
          ansIndex = midIndex;
      }
      else if(target < input[midIndex]){
                  midIndex = Math.floor((rotated.length-midIndex)/2)-1;
                  recurse(rotated);
              }

      else if(target > input[midIndex]){
              midIndex = Math.floor((midIndex+rotated.length+1)/2);
              recurse(rotated);
          }

      else {
          ansIndex = -1;
      }
  }

    recurse(rotated);
   return ansIndex;
  }
