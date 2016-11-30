/*
Robot Paths
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)
*/

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
}


function robotPaths (n) {
  var board = makeBoard(n);
  var count = 0;

  function inbounds(x, y){
    if(x >= 0 && y >= 0 && x < n && y < n){
      return true;
    }

    return false;
  }

  function recurse(x, y){
    board.togglePiece(x, y);

    if(x === n-1 && y === n-1){
      count++;
      return;
    }

    if(inbounds(x+1,y) && !board.hasBeenVisited(x+1, y)){
      recurse(x+1, y);
      board.togglePiece(x+1, y);
    }

    if(inbounds(x,y+1) && !board.hasBeenVisited(x, y+1)){
      recurse(x, y+1);
      board.togglePiece(x, y+1);
    }

    if(inbounds(x-1, y) && !board.hasBeenVisited(x-1, y)){
      recurse(x-1, y);
      board.togglePiece(x-1, y);
    }

    if(inbounds(x, y-1) && !board.hasBeenVisited(x, y-1)){
      recurse(x, y-1);
      board.togglePiece(x, y-1);
    }
  }

  recurse(0,0);
  return count;
}
