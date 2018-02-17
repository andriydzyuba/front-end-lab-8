"use strict";
function getTransformedArray(myArray, myFunction) {
  let transformedArray = forEach(myArray, myFunction);
  console.log(transformedArray);
}

function increment(num) {
  return num + 1;
}
