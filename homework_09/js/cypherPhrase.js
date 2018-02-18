"use strict";
function cypherPhrase(myArray, text) {
  let wordsArray = text.split("");
  return getTransformedArray(wordsArray, function(num) {
    for (let i in myArray) {
      if (num === i) {
        return myArray[i];
      }
    }
    return num;
  }).join("");
}

let charactersMap = {a: 'o', c: 'd', t: 'g'};
