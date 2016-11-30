/*
tests if a number is a prime
*/

function primeTester(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
