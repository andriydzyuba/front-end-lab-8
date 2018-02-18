"use strict";
function decypherPhrase(myArray, text) {
  let deWordsArray = {};
  for (let i in myArray) {
    deWordsArray[myArray[i]] = i;
  }
  return cypherPhrase(deWordsArray, text);
}
