var playAgain = 'yes';
let computerScore = 0
let humanScore = 0
let playerSelection
let i = 0;
let randomNumber;
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * (1 + 2 - 0));
        playerSelection = event.target.id;
        if (i < 5) {
            playRound();
            i++;
            console.log('Human: ' + humanScore + ', Computer: ' + computerScore);
        }
    })
})

function computerSelection() {

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    } else {
        return 'Something went wrong...';
    }
}

function playRound() {
    if (playerSelection === computerSelection()) {
        i--
        return 'Ties don\'t count.'
    }

    if (playerSelection === 'rock') {
        if (computerSelection() === 'paper') {
            computerScore++;
            let computerWin = document.createElement('div');
            computerWin.textContent = 'Computer wins! Paper beats rock.';
            results.appendChild(computerWin);
        }
        if (computerSelection() === 'scissors') {
            humanScore++;
            let humanWin = document.createElement('div');
            humanWin.textContent = 'Human wins... Rock beats scissors.';
            results.appendChild(humanWin);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection() === 'scissors') {
            computerScore++;
            let computerWin = document.createElement('div');
            computerWin.textContent = 'Computer wins! Scissors beat paper.';
            results.appendChild(computerWin);
        }
        if (computerSelection() === 'rock') {
            humanScore++;
            let humanWin = document.createElement('div');
            humanWin.textContent = 'Human wins... Paper beats rock.';
            results.appendChild(humanWin);
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection() === 'rock') {
            computerScore++;
            let computerWin = document.createElement('div');
            computerWin.textContent = 'Computer wins! Rock beats scissors.';
            results.appendChild(computerWin);
        }
        if (computerSelection() === 'paper') {
            humanScore++;
            let humanWin = document.createElement('div');
            humanWin.textContent = 'Human wins... Scissors beat paper.';
            results.appendChild(humanWin);
        }
    }
}