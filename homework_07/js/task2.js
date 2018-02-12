// Appeal to the user
var playGame = confirm("Do you want to play a game?");

// Confirmation of participation in the game
if (playGame == true) {
  var replayGame = true;
  while (replayGame) {
    var randomValue = 6;
    var randomNumber = Math.floor(Math.random() * randomValue);
    var maxValue = 5;
    var prize = 10;
    var win = 0;
    for (var i = 3; i > 0; i--) {

      // Getting from the user numbers
      var number = parseInt(prompt("Enter a number from 0 to " + maxValue + "\nAttempts left: " + i +
      "\nTotal prize: " + win + "\nPossible prize on current attempt: " + prize + "$"));
      if (number == randomNumber) {
        win = prize;
        break
      }
      prize = Math.floor(prize / 2);
    }

    // Continuation of the game with more difficult conditions
    if (number == randomNumber) {
      var continueGame = true;
      while (continueGame) {
        var nextGame = confirm("Do you want to continue a game?");
        if (nextGame == true) {
          randomValue = (randomValue * 2) - 1;
          randomNumber = Math.floor(Math.random() * randomValue);
          maxValue *= 2
          prize *= 3;
          for (var j = 3; j > 0; j--) {

            // Getting from the user numbers
            var nextNumber = parseInt(prompt("Enter a number from 0 to " + maxValue + "\nAttempts left: " + j +
            "\nTotal prize: " + win + "\nPossible prize on current attempt: " + prize + "$"));
            if (nextNumber == randomNumber) {
              win += prize;
              console.log("Thank you for a game. Your prize is: " + win);
              break
            }
            prize = Math.floor(prize / 2);
          }
          if (nextNumber !== randomNumber) {
            win = 0;
            console.log("Thank you for a game. Your prize is: " + win);
            continueGame = false;
            var againGame = confirm("Do you want to play a game again?");
            if (againGame == false) {
              replayGame = false;
            }
          }
        } else {
          console.log("Thank you for a game. Your prize is: " + win);
          continueGame = false;
          replayGame = false;
        }
      }

    // Repeated game with simple conditions
    } else {
      console.log("Thank you for a game. Your prize is: " + win);
      var againGame = confirm("Do you want to play a game again?");
      if (againGame == false) {
        console.log("Thank you for a game. Your prize is: " + win);
        replayGame = false;
      }
    }
  }

// Refusal to participate in the game
} else {
  console.log("You did not become a millionaire");
}
