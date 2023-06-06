document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("clicked!", event.target.textContent);
    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    console.log("Your pick:", playerSelection);
    console.log("Computer choice:", computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
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
