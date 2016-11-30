/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

var majorityElement = function(nums) {
  var obj = {};
  var frequency = 0;
  var mostFreq;

  for(var i = 0; i < nums.length; i++){
    if(obj[nums[i]]){
      obj[nums[i]]+=1;
    } else {
      obj[nums[i]] = 1;
    }

    if(obj[nums[i]] > frequency){
      frequency = obj[nums[i]];
      mostFreq = nums[i];
    }
  }

  return mostFreq;
};

// Time Complexity: O(n)
