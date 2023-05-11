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
// play a single round of the game
// const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);

// DOM manipulation
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  console.log("you clicke rovvk");
});

let playerSelection = event.target.id;

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("Your choice is: ", event.target.textContent);
  }
});

console.log(singleRound(playerSelection, computerSelection));
