/*
Description:

Write a function that returns the total surface area and volume of a box as an array: [area, volume].
*/


function getSize(width, height, depth){
  var results=[];
  var area = 2*(width*height)+ 2*(depth*height)+2*(width*depth);
  var volume = width*height*depth;
    results.push(area,volume);

  return results;
}
