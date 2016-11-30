/*
Spiral Traversal
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

Examples
Input	Output
matrix:
[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]	[ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
matrix:
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]	[ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
matrix:
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]	[ 1, 2, 3, 4 ]
matrix:
[ [ 1, 2, 3, 4, 5, 6, 7 ] ]	[ 1, 2, 3, 4, 5, 6, 7 ]
*/

function spiralTraversal (matrix) {
  var result = [];

  while(matrix.length){
    for(var i = 0; i < matrix[0].length; i++){
      result.push(matrix[0][i]);
    }
    matrix.shift();

    matrix = rotate(matrix);
  }

  function rotate(matrix){
    var rotatedMatrix = [];
    var temp = [];
    while (matrix.length){
      for(var i = 0; i < matrix.length; i++){
        if(matrix[i].length === 0){
          matrix.splice(i,1);
        } else {
          temp.push(matrix[i].pop());
        }
      }
      rotatedMatrix.push(temp);
      temp = [];
    }
    return rotatedMatrix;
  }

  return result;
}

// solution with comments
function spiralTraversal(matrix){
  var results = [];

  //   keep traversing as long as there are still values
  while(matrix.length > 0){
    // iterate over the 0 index array and push all values in order into results array
    for(var i = 0; i < matrix[0].length; i++){
      results.push(matrix[0][i]);
    }
    // remove 0 index array once all values are pushed into results
    matrix.shift();

    // rotate the rest of the matrix
    matrix = rotate(matrix);
  }


  function rotate(matrix){
    var temp = [];
    var rotated = [];

    while(matrix.length){
      for(var i = 0; i < matrix.length; i++){
        // if any inside array becomes empty, remove it
        if(matrix[i].length === 0){
          matrix.splice(i,1);
        }
        // otherwise, pop off the last value and store in temp
        else {
          temp.push(matrix[i].pop());
        }
      }

      // push temp array into rotated array and reset temp to empty so it can continue pushing the rest of the matrix in without duplicating
      rotated.push(temp);
      temp = [];
    }

    return rotated;
  }
  return results;
}
