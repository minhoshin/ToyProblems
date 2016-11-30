/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/

function rockPaperPermutation (roundCount) {
  var results = [];
  var choices = ['r','p','s'];

  var recurse = function(input){
    input = input || [];
    if(input.length === roundCount){
      results.push(input);
    } else {
      for(var i = 0; i < choices.length; i++){
        recurse(input + choices[i]);
      }
    }
  };

  recurse('');
  return results;
}
