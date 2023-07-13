# Rock, Paper, Scissors Game

This repository contains a simple, grade-school style "Rock, Paper, Scissors" game designed to be played in the browser console. The game pits the user against the computer in a classic game of chance and strategy.

Pseudo/Plan:

Game will be played against the computer.

1. Write a function "getComputerChoice" that will randomly return either "Rock", "Paper", or "Scissors".

2. Write a function that plays a single round of rock paper scissors. The function will have two parameters "playerSelection" and "computerSelection", return a string declaring the winner.

<<<<<<< HEAD //decided no arrays for this, that is the challenge
Make function "playerSelection" case-insensitive.

Make an array [0, 1 ,2] and assign each number to a string. Example: 0 = rock, 1 = paper, 2 = scissors.

# Start off with just 2-3 choices. Expand to Rock, Paper, Scissors, LIZARD and SPOCK.

Make function "playerSelection" case-insensitive.

> > > > > > > ce2e73119bbb8929c9950ef002dbdfe5bc1e8747

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
