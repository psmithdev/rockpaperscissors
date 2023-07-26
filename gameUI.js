let playerScore = 0;
let computerScore = 0;

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("clicked!", event.target.textContent);
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();

    let elementOne = document.getElementsByClassName("player");
    for (var i = 0; i < elementOne.length; i++) {
      elementOne[i].innerHTML = playerSelection;
    }

    let elementTwo = document.getElementsByClassName("computer")[0];
    elementTwo.innerHTML = computerSelection;

    let elementThree = document.getElementsByClassName("winner")[0];
    elementThree.innerHTML = singleRound(playerSelection, computerSelection);

    displayScore();
  }

  let playerWinner = "You win the game!";
  let computerWinner = "Computer wins this time...";

  if (playerScore >= 5) {
    let playerWinnerFun = document.getElementsByClassName("results")[0];
    playerWinnerFun.innerHTML = `<b class="fadein">${playerWinner} 🏆</b>`;
  } else {
    if (computerScore >= 5) {
      let computerWinnerFun = document.getElementsByClassName("results")[0];
      computerWinnerFun.innerHTML = `<i class="fadein">${computerWinner} </i>`;
    }
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
    playerScore++;
    return "You win!";
  } else if (playerSelection == computerSelection) {
    return "it's a tie";
  } else {
    computerScore++;
    return "You lose :(";
  }
}

function displayScore() {
  let playerScoreUpdate = document.getElementsByClassName("playerScore")[0];
  playerScoreUpdate.innerHTML = playerScore;

  let computerScoreUpdate = document.getElementsByClassName("computerScore")[0];
  computerScoreUpdate.innerHTML = computerScore;
}
