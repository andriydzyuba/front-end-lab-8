"use strict";
function isPrime(a) {
  let i;
  if (a === 1) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return a > 0;
}
