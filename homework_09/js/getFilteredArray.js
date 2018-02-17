"use strict";
function getFilteredArray(myArray, myFunction) {
  let newArray = forEach(myArray, myFunction);
  let filteredArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (newArray[i]) {
      filteredArray.push(myArray[i])
    }
  }
  console.log(filteredArray);
}

function predicateFunction(num) {
return num > 3;
}
