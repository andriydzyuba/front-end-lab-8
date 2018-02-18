"use strict";
function getTransformedArray(myArray, myFunction) {
  let transformedArray = [];
  forEach(myArray, function (num) {
    transformedArray.push(myFunction(num));
  });
  return transformedArray;
}
