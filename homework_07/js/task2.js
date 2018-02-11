// Appeal to the user
var playGame = confirm("Do you want to play a game?");

// Confirmation of participation in the game
if (playGame == true) {
  var randomNumber = Math.floor(Math.random() * 6);
  var prize = 10;
  var win = 0;

  for (var i = 3; i > 0; i--) {
    // Getting from the user numbers
    var number = parseInt(prompt("Enter a number from 0 to 5 \nAttempts left: " + i + "\nTotal prize: " + win + "\nPossible prize on current attempt: " + prize + "$"));

    if (number == randomNumber) {
        win = prize;
        break
    }
    prize = Math.floor(prize / 2);
  }

  // Continuation of the game with more difficult conditions
  if (number == randomNumber) {
    var nextGame = confirm("Do you want to continue a game?");

    if (nextGame == true) {
      var nextRandomNumber = Math.floor(Math.random() * 11);
      var nextPrize = 30;
      var nextWin = 0;

      for (var j = 3; j > 0; j--) {
        // Getting from the user numbers
        var nextNumber = parseInt(prompt("Enter a number from 0 to 10 \nAttempts left: " + j + "\nTotal prize: " + win + "\nPossible prize on current attempt: " + nextPrize + "$"));

        if (nextNumber == nextRandomNumber) {
            nextWin = win + nextPrize;
            console.log("Thank you for a game. Your prize is: " + nextWin);
            break
        }
        nextPrize = Math.floor(nextPrize / 2);
      }

      if (nextNumber !== nextRandomNumber) {
        console.log("Thank you for a game. Your prize is: " + win);
      }

    } else {
      console.log("Thank you for a game. Your prize is: " + win);
    }

  // Repeated game with simple conditions
  } else {
    console.log("Thank you for a game. Your prize is: " + win);
    var playGame = confirm("Do you want to play a game again?");

    if (playGame == true) {
      var randomNumber = Math.floor(Math.random() * 6);
      var prize = 10;
      var win = 0;

      for (var i = 3; i > 0; i--) {
        // Getting from the user numbers
        var number = parseInt(prompt("Enter a number from 0 to 5 \nAttempts left: " + i + "\nTotal prize: " + win + "\nPossible prize on current attempt: " + prize + "$"));

        if (number == randomNumber) {
            win = prize;
            break
        }
        prize = Math.floor(prize / 2);
      }

      console.log("Thank you for a game. Your prize is: " + win);
    }
  }

// Refusal to participate in the game
} else {
  console.log("You did not become a millionaire");
}
