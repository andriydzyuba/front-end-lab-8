// Getting the sizes of the sides of the triangle and calculating the area
var sideA = parseFloat(prompt("Enter the first side of the triangle: "));
var sideB = parseFloat(prompt("Enter the second side of the triangle: "));
var sideC = parseFloat(prompt("Enter the third side of the triangle: "));

var semiP = (sideA + sideB + sideC) / 2;
var areaABC = Math.sqrt(semiP * (semiP - sideA) * (semiP - sideB) * (semiP - sideC));

// Outputting correct results in consoles
if (isNaN(areaABC) || areaABC == 0) {
  console.log("Incorrect data");
}
else {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0 || sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
    console.log("Incorrect data");
  } else if (Math.pow(parseInt(sideA), 2) == Math.pow(parseInt(sideB), 2) + Math.pow(parseInt(sideC), 2) ||
    Math.pow(parseInt(sideB), 2) == Math.pow(parseInt(sideA), 2) + Math.pow(parseInt(sideC), 2) ||
    Math.pow(parseInt(sideC), 2) == Math.pow(parseInt(sideA), 2) + Math.pow(parseInt(sideB), 2)) {
  	console.log("Type of triangle is right triangle and square is " + parseFloat(areaABC.toFixed(2)));
  } else if (sideA == sideB && sideA == sideC && sideB == sideC) {
  	console.log("Type of triangle is equilateral and square is " + parseFloat(areaABC.toFixed(2)));
  } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
  	console.log("Type of triangle is isosceles and square is " + parseFloat(areaABC.toFixed(2)));
  } else if (sideA != sideB && sideA != sideC && sideB != sideC) {
  	console.log("Type of triangle is scalene and square is " + parseFloat(areaABC.toFixed(2)));
  }
}
