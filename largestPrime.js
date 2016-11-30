// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function largestPrime(n){
  // initiate at 2 because 2 is the lowest prime
  var i = 2;
  // keep checking up to the number passed in
  while(i < n){
    // while the number is divisible by a number between 2 and n, keep dividing
    while(n % i === 0){
      n = parseInt(n/i);
    }
    // increment
    i++;
  }
  // when number is not divisible by any number between 2 and the number, return the number
  return n;
}

// solution 2
// function largestPrime(n){
//   var i = 2;
//   while(i < n){
//     while(n % i === 0){
//       (function(){
//          n = n / i;
//       })();
//     }
//     i++;
//   }
//   return n;
// }
