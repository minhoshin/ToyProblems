/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to num2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

var intersect = function(nums1, nums2) {
  var obj1 = {};
  var obj2 = {};
  var inter = [];

  for(var i = 0; i < nums1.length; i++) {
    if(!obj1[nums1[i]]) {
      obj1[nums1[i]] = 1;
    } else {
      obj1[nums1[i]]++;
    }
  }

  for(var j = 0; j < nums2.length; j++) {
    if(!obj2[nums2[j]]) {
      obj2[nums2[j]] = 1;
    } else {
      obj2[nums2[j]]++;
    }
  }

for(var key in obj1) {
    var count = 0;
    if(obj2[key]) {
        while(count < Math.min(obj1[key], obj2[key])) {
            inter.push(Number(key));
            count++;
        }
    }
}

  return inter;
};
