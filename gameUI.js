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

function getPlayerChoice() {
  let num = prompt("Enter your 3 choices: Rock, Paper, Scissors");

  switch (num) {
    case "rock":
      return "rock";
      break;

    case "paper":
      return "paper";
      break;

    case "scissors":
      return "scissors";
      break;

    default:
      return "that's not a valid choice";
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

function buttonClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
}

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("Clicked", event.target.textContent);
    return;
  }
});
