//  function getComputerChoice(rock, paper, scissors) {
//     return (rock, paper, scissors);
// }

// console.log(getComputerChoice());

// function greeting() {
//     console.log("Hello good morning");
// }

// greeting();

// let rock = 0;
// let paper = 1;
// let scissors = 2;

// function getComputerChoice(rock, paper, scissors) {
//     return 0 + 1 + 2;
//     console.log(rock, paper, scissors);
// }

// getComputerChoice();

// function getComputerChoice(rock, paper, scissors) {
//     return rock
// }
// function getComputerChoice(rock, paper, scissors) {
//     return (rock, paper, scissors);
// }

// console.log(getComputerChoice());

//function 1 randomly return either "rock", "paper", "scissors"
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 );

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

// console.log(getComputerChoice());

let pick = prompt("Enter your 3 choices: Rock, Paper, Scissors");

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function singleRound(playerSelection, computerSelection) {
    if (pick.toLowerCase(playerSelection > computerSelection) ) {
        return "You win!";
    } else if (pick.toLowerCase(playerSelection < computerSelection) ) {
        return "You lose :(";
    } else {
        return "it's a tie";
    }

    return null;
}

console.log(singleRound(playerSelection, computerSelection) );