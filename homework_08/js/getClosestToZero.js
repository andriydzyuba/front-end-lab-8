"use strict";
function getClosestToZero() {
  let i;
  let nearZero = Math.abs(arguments[0]);
  for (i = 0; i < arguments.length; i++) {
    if (Math.abs(arguments[i]) < nearZero) {
      nearZero = arguments[i];
    }
  }
  return nearZero;
}
