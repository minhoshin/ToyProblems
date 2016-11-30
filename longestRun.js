/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/


function longestRun (string) {
  var splitStr = string.split('');
  var count = 1;
  var longestCount = 1;
  var firstI;
  var lastI;

  for(var i = 0; i < string.length; i++, count = 1){
    for(var j = i+1; j < string.length; j++){
      if(string[j]===string[i]){
        count+=1;
        if(count > longestCount){
          firstI = i;
          lastI = j;
          longestCount = count;
        }
      }
      else {
        count = 1;
        break;
      }
    }
  }
  return [firstI||0, lastI||0];
}
