/*
Task

You have to write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing.

Examples

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
*/


function dirReduc(arr){

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "NORTH" && arr[i+1] === "SOUTH"){
      arr.splice(i, 2);
      i = -1;
    }

    if(arr[i] === "SOUTH" && arr[i+1] === "NORTH"){
      arr.splice(i,2);
      i = -1;
    }

    if(arr[i] === "WEST" && arr[i+1] === "EAST"){
      arr.splice(i,2);
      i = -1;
    }

    if(arr[i] === "EAST" && arr[i+1] === "WEST"){
      arr.splice(i,2);
      i = -1;
    }
  }
  return arr;
}
