/*
checks to see if there are dupilcates and returns a boolean
*/

var hasDuplicates = function(array){
  for(var i = 0; i < array.length; i++){
    var item = array[i];
    if(array.slice(i+1).indexOf(item) !== -1){
      return true;
    }
  }
  return false;
};

// below version finds duplicates and returns an array with the duplicate values

// var find_dups = function(string) {
//   var splitStr = string.split('');
//   var results=[];
//
//   for(var i = 0; i < splitStr.length; i++){
//     var item = splitStr[i];
//     if(splitStr.slice(i+1).indexOf(item) !== -1){
//       if(results.indexOf(item) < 0){
//         results.push(item);
//       }
//     }
//   }
//   return results;
// };
