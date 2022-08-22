/* 
 function getComputerChoice(rock, paper, scissors) {
    return (rock, paper, scissors);
}

console.log(getComputerChoice());

function greeting() {
    console.log("Hello good morning");
}

greeting();

let rock = 0;
let paper = 1;
let scissors = 2;

function getComputerChoice(rock, paper, scissors) {
    return 0 + 1 + 2;
    console.log(rock, paper, scissors);
}

getComputerChoice();

function getComputerChoice(rock, paper, scissors) {
    return rock
}
function getComputerChoice(rock, paper, scissors) {
    return (rock, paper, scissors);
}

console.log(getComputerChoice()); */

//function 1 randomly return either "rock", "paper", "scissors"
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

console.log(getComputerChoice());

let pick = prompt("Enter your 3 choices: Rock, Paper, Scissors");

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();

function singleRound(playerSelection, computerSelection) {
    // if (pick?.toLowerCase(playerSelection > computerSelection) ) {
    //     return "You win!";
    // } else if (pick?.toLowerCase(playerSelection < computerSelection) ) {
    //     return "You lose :(";
    // } else {
    //     return "it's a tie";
    // }

    console.log(playerSelection)
    console.log(computerSelection)


    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == computerSelection)  {
        return "it's a tie";
    } else {
        return "You lose :(";
    }
    // return null;
}

console.log(singleRound(playerSelection, computerSelection) );

// console.log(prompt());

//this works
/* let pick = prompt("Enter your 3 choices: Rock, Paper, Scissors");

if (pick.toLowerCase() === "rock") {
    alert("you chose Rock");
} */

//ignored call prompt(), iframe sandbox "allow-modals" keyword not set
// function allowModals(){
//     for (const i of document.getElementsByTagName('iframe')) {
//       if (!i.sandbox.supports('allow-modals')) {
//         console.warn("Your browser doesn't support the 'allow-modals' attribute :(");
//         break;
//       }
//       if (i.sandbox.contains('allow-modals')) continue;
//       console.info(i, "doesn't allow modals");
//       i.sandbox.add('allow-modals');
//       console.info(i, 'now allows modals');
//     }
//   }