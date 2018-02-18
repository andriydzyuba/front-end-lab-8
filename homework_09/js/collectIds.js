"use strict";
function collectIds(myArray) {
  let ratingArray = getFilteredArray(myArray, function(num) {
    return num.rating > 3;
  });
  return getTransformedArray(ratingArray, function(num) {
    return num.id;
  });
}
