# Rock, Paper, Scissors Game

This repository contains a simple, grade-school style "Rock, Paper, Scissors" game designed to be played in the browser console. The game pits the user against the computer in a classic game of chance and strategy.

![Gameplay](https://github.com/psmithdev/rockpaperscissors/assets/69760520/69fa7968-55f1-4903-8cc7-82cf4debd3c1)

# How It Works

The game revolves around three key functions:

    getComputerChoice: This function randomly returns the computer's choice of "Rock", "Paper", or "Scissors".
    singleRound: This function conducts a single round of the game. It takes two parameters: the "playerSelection" and the "computerSelection". It returns a string declaring the round's winner.
    displayScore: This function updates the score display in the browser.

The game plays until either the player or the computer reaches a score of 5 points, at which point the game announces the winner and ends.

# Gameplay Logic

The game follows the classic rules:

    Rock beats Scissors
    Scissors beat Paper
    Paper beats Rock

# Future Developments

Plans for future updates to this project include:

    Adding a button to restart the game after it ends.
    Expanding the game to include additional choices, namely "Lizard" and "Spock".

# Usage

To play the game, simply load the website in your browser, open the console, and follow the on-screen instructions.

Check out the live demo of the game [here](https://psmithdev.github.io/rockpaperscissors/)
