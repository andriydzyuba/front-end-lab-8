// Getting the number of floors of the pyramid
var floors = parseInt(prompt("Enter the number of floors of the pyramid (1 to 20): "));

// Checking the correctness of input and output the pyramid in the console
if (floors > 0 && floors <= 20) {
  for (var i = 0; i < floors; i++) {
    var row = "";
    for (var j = 1; j < floors - i; j++) {
      row += "   ";
    }
    for (var k = 1; k <= (2*i+1); k++) {
      row += "[~]";
    }
    row += "\n"; // This row does not affect the execution of the code
    console.log(row);
  }
} else {
  console.log("Incorrect!");
}
