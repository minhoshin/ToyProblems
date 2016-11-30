/*
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
    var obj = {};
    // var duplicates = false;

    for(var i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }
    return false;
};
    // for(var key in obj){
    //     if(obj[key] > 1){
    //      duplicates = true;
    //      return duplicates;
    //     }
    // }

    // return duplicates;
// };

// Time Complexity: O(n)
