# Rock, Paper, Scissors Game

This repository contains a simple, grade-school style "Rock, Paper, Scissors" game designed to be played in the browser console. The game pits the user against the computer in a classic game of chance and strategy.

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

Ties are possible if both the player and computer make the same choice.
8/20/2022
3 strings "rock" "paper" "scissors"
How to make computer know which string beats which?
Rock beats scissors? rock > scissors
Paper > rock
Scissors > paper

paper = paper is a draw
scissors = scissors is a draw
rock = rock is a draw

Assign a number to a string?
o = rock
1 = paper
2 = scissors

A win , a loss, and a draw.

8/22/2022
new function game() will call the singleRound() function and play a 5 round game. Keep score and report the winner or loser at the end. Use a for loop. Get input from user with prompt()
