"use strict";
function forEach(myArray, myFunction) {
  for (let i in myArray) {
    myFunction(myArray[i]);
  }
}
