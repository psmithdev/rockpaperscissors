function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 );

    switch (num) {
        case 0: //tried "rock" nope
            return "rock";
            break;
        
        case 1:  //tried "paper" still nope
            return "paper";
            break;

        default:
            return "scissors";
            break;
    }
}

function getPlayerChoice() { //replaced "rock" single choice with another function
    // let num = Math.floor(Math.random() * 3 );
    let num = prompt("Enter your 3 choices: Rock, Paper, Scissors");

    switch (num) {
        case "rock": //tried "rock" nope
            return "rock";
            break;
        
        case "paper":  //tried "paper" still nope
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

// console.log(getComputerChoice(), "//bot pick"); printing twice console log thats why no winner

function singleRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return "You win!";
    } else if (playerSelection == computerSelection) {
        return "it's a tie";
    } else if (playerSelection == "that's not a valid choice") {
        return "errorrororrr";
    } else {
        return "You lose :(";
    }
}
//5 rounds of game
for (let i = 0; i < 5; i++){
    
const playerSelection = getPlayerChoice(); //getComputerChoice() two bots playing against each other
const computerSelection = getComputerChoice();
console.log(computerSelection); //stuff function into variable
console.log(playerSelection); //always rock for now"
console.log(singleRound(playerSelection, computerSelection));
}