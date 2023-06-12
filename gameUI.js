document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("clicked!", event.target.textContent);
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();

    let elementOne = document.getElementsByClassName("player");
    for (var i = 0; i < elementOne.length; i++) {
      elementOne[i].innerHTML = playerSelection;
    }

    console.log("Computer choice:", computerSelection); // change thissssssss
    let elementTwo = document.getElementsByClassName("computer")[0];
    elementTwo.innerHTML = computerSelection;

    console.log(singleRound(playerSelection, computerSelection)); // change thissssssss
  }
});

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    default:
      return "scissors";
      break;
  }
}

function singleRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You win!";
  } else if (playerSelection == computerSelection) {
    return "it's a tie";
  } else if (playerSelection == "that's not a valid choice") {
    return "errorrororrr";
  } else {
    return "You lose :(";
  }
}
