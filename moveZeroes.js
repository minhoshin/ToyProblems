/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
    var current;
    var temp;

    for(var i = 0; i < nums.length; i++){
        current = nums[i];
        for(var j = i-1; j >= 0 && nums[j] === 0; j--){
            temp = nums[j];
            nums[j+1] = temp;
          nums[j] = current;
        }
    }
console.log(nums);
};

// time complexity: O(n^2)

var moveZeroes = function(nums) {
var count = 0;
var movedZeroes = [];

  for(var i = 0; i < nums.length; i++) {
    console.log(i);
    if(nums[i] === 0){
      nums.splice(i, 1);
      count++;
      i--;
    }
  }

  for(var j = 0; j < count; j++) {
    nums.push(0);
  }
  console.log(nums);
};

// time complexity: O(n)
