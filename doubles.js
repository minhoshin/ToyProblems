/*
Description:

Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not.
*/


function doubleCheck(str){
  var letters = str.toLowerCase().split('');

   for(var i = 0; i < letters.length; i++){
       if(letters[i] === letters[i+1]){
           return true;
       }
   }
       return false;
}
