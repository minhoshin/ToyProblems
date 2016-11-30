/*
Generate user links

Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example

generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

function generateLink(user) {
  var splitUser = user.split('');
  for(var i = 0; i < splitUser.length; i++){
    if(splitUser[i] === ' '){
      splitUser[i] = '%20';
    }
  }
  user = splitUser.join('');

  return 'http://www.codewars.com/users/' + user;
}
