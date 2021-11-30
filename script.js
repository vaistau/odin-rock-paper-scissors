var playAgain = 'yes';

let computerScore = 0;
let humanScore = 0;
let tiedScore = 0;
let playerSelection;
let i = 0;
let randomNumber;

const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const humanScoreCard = document.querySelector('#human-score');
const computerScoreCard = document.querySelector('#computer-score');
const tieScoreCard = document.querySelector('#ties-score');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * (1 + 2 - 0));
        playerSelection = event.target.id;

        if (i < 5) {
            playRound();
            i++;
        }

        if (i === 5) {
            const declareWinner = document.createElement('div');
            if (computerScore > humanScore) {
                declareWinner.textContent = 'Computer wins!';
            } else {
                declareWinner.textContent = 'Human wins!';
            }
            container.appendChild(declareWinner);
            i++;
        }
    }
    )
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
        i--;
        noWin();
    }

    if (playerSelection === 'rock') {
        if (computerSelection() === 'paper') {
            computerWin();

        }
        if (computerSelection() === 'scissors') {
            humanWin();

        }
    } else if (playerSelection === 'paper') {
        if (computerSelection() === 'scissors') {
            computerWin();

        }
        if (computerSelection() === 'rock') {
            humanWin();

        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection() === 'rock') {
            computerWin();

        }
        if (computerSelection() === 'paper') {
            humanWin();
        }
    }

    function humanWin() {
        humanScore++;
        humanScoreCard.innerHTML = 'Your score: ' + humanScore;
    }

    function computerWin() {
        computerScore++;
        computerScoreCard.innerHTML = 'Computer score: ' + computerScore;
    }

    function noWin() {
        tiedScore++;
        tieScoreCard.innerHTML = 'Amount of ties: ' + tiedScore;
    }
}