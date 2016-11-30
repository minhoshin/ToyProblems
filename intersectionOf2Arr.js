/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/


var intersection = function(nums1, nums2) {

  var obj1 = {};
  var inter = [];

  for(var i = 0; i < nums1.length; i++) {
    if(!obj1[nums1[i]]) {
      obj1[nums1[i]] = 1;
    } else {
      obj1[nums1[i]]++;
    }
  }

  for(var j = 0; j < nums2.length; j++) {
    if(obj1[nums2[j]] && inter.indexOf(nums2[j]) === -1) {
      inter.push(nums2[j]);
    }
  }

  return inter;
};
