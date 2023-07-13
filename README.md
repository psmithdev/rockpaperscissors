# Rock, Paper, Scissors Game

This repository contains a simple, grade-school style "Rock, Paper, Scissors" game designed to be played in the browser console. The game pits the user against the computer in a classic game of chance and strategy.

![Gameplay](https://github.com/psmithdev/rockpaperscissors/assets/69760520/69fa7968-55f1-4903-8cc7-82cf4debd3c1)

# How It Works

The game revolves around two key functions:

    getComputerChoice: This function randomly returns the computer's choice of "Rock", "Paper", or "Scissors".
    playRound: This function conducts a single round of the game. It takes two parameters: the "playerSelection" and the "computerSelection". It returns a string declaring the round's winner.

In addition, the game function plays a 5-round series, keeping score and reporting the overall winner at the end.

# Gameplay Logic

The game follows the classic rules:

    Rock beats Scissors
    Scissors beat Paper
    Paper beats Rock

# Future Developments

Plans for future updates to this project include:

    Making the game case-insensitive, allowing inputs like "rock", "ROCK", or "RoCk" to be accepted.
    Expanding the game to include additional choices, namely "Lizard" and "Spock".

# Usage

To play the game, simply load the website in your browser, open the console, and follow the on-screen instructions.
