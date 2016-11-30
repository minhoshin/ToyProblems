/*
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Examples
Input	Output
string:
"aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
string:
"mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
string:
""	[ ]
*/

function characterFrequency (string) {
  var splitStr = string.split('').sort();
  var uniques = [];
  var obj = {};
  var ans = [];

for(var k = 0; k < splitStr.length; k++){
  if(uniques.indexOf(splitStr[k]) < 0){
    uniques.push(splitStr[k]);
  }
}

  console.log('uniques', uniques);

  for(var i = 0; i < splitStr.length; i++){
    if(!obj[splitStr[i]]){
      obj[splitStr[i]] = 1;
    } else {
      obj[splitStr[i]]++;
    }
  }

  console.log('obj', obj);

  for(var j = 0; j < uniques.length; j++){
    ans.push([uniques[j], obj[uniques[j]]]);
  }

 return ans.sort(function(a,b){
    if(a[1] < b[1]){
      return 1;
    }
    if(a[1] > b[1]) {
      return -1;
    }
    if(a[0] > b[0]){
      return 1;
    }
    if(a[0] < b[0]){
      return -1;
    }
    else {
      return 0;
    }
  });
 }
