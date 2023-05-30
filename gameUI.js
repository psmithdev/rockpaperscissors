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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
