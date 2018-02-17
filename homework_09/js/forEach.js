"use strict";
function forEach(myArray, myFunction) {
  let mainArray = [];
  for (let i = 0; i < myArray.length; i++) {
    mainArray.push(myFunction(myArray[i]));
  }
  return mainArray;
}
