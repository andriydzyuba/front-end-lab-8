"use strict";
function reverseNumber(a) {
  let num = a.toString().split('');
  let rev;
  if(num[0] === '-') {
    let res = num.shift()
    rev = parseInt(res +num.reverse().join(''))
  } else {
    rev = parseInt(num.reverse().join(''))
  }
  return rev;
}
