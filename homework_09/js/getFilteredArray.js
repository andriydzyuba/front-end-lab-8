"use strict";
function getFilteredArray(myArray, myFunction) {
  let filteredArray = [];
  forEach(myArray, function (num) {
    if (myFunction(num)) {
      filteredArray.push(num)
    }
  });
  return filteredArray;
}
