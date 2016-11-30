/*
Island Count
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.
*/

/*
Island Count
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.
*/

function countIslands (mapStr) {
  var count = 0;
  var splitMap = mapStr.split('\n');
  var islandMap=[];

  for(var i = 0; i < splitMap.length; i++){
    islandMap.push(splitMap[i].split(''));
  }

  function inBounds(row, col){
    if(row < 0){
      return false;
    }
    if(row >= islandMap.length){
      return false;
    }
    if(col >= islandMap[0].length){
      return false;
    }
    if(col < 0) {
      return false;
    }
    return true;
  }


  function recurse(row, col){
    if(inBounds(row,col) && islandMap[row][col] === '0'){
      islandMap[row][col] = '.';
    }

    if(inBounds(row,col-1) && islandMap[row][col-1] === '0'){
      recurse(row,col-1);
    }

    if(inBounds(row,col+1) && islandMap[row][col+1] === '0'){
      recurse(row,col+1);
    }

    if(inBounds(row-1,col) && islandMap[row-1][col] === '0'){
      recurse(row-1,col);
    }

    if(inBounds(row+1,col) && islandMap[row+1][col] === '0'){
      recurse(row+1,col);
    }
  }

  for(var j = 0; j < islandMap.length; j++){
    for(var k = 0; k < islandMap[j].length; k++){
      if(islandMap[j][k]==='0'){
        count++;
        recurse(j,k);
      }
    }
  }

  return count;
}
