var playAgain = 'yes';

let computerScore = 0
let humanScore = 0

for (i = 0; i < 5 /*&& (playAgain === 'yes' || playAgain === 'yes, of course!')*/; i++) {
    let playerSelection /*= prompt('I want to play a game on your browser console... Will you choose rock, paper, or scissors?').toLowerCase();*/
    let randomNumber = Math.floor(Math.random() * (1 + 2 - 0));

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = event.target.id;
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
        /*if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            i--
            return '...Am I a joke to you?';
        }*/

        if (playerSelection === computerSelection()) {
            i--
            return 'Ties don\'t count.'
        }

        if (playerSelection === 'Rock') {
            if (computerSelection() === 'paper') {
                computerScore++;
                return 'Computer wins! Paper beats rock.';
            }
            if (computerSelection() === 'scissors') {
                humanScore++;
                return 'Human wins... Rock beats scissors.';
            }
        } else if (playerSelection === 'Paper') {
            if (computerSelection() === 'scissors') {
                computerScore++;
                return 'Computer wins! Scissors beat paper.';
            }
            if (computerSelection() === 'rock') {
                humanScore++;
                return 'Human wins... Paper beats rock.';
            }
        } else if (playerSelection === 'Scissors') {
            if (computerSelection() === 'rock') {
                computerScore++;
                return 'Computer wins! Rock beats scissors.';
            }
            if (computerSelection() === 'paper') {
                humanScore++;
                return 'Human wins... Scissors beat paper.';
            }
        }
    }

    console.log(playRound())
    console.log('Human: ' + humanScore + ', Computer: ' + computerScore);

   /* if (i !== 4) {
        playAgain = prompt('Would you like to play again?', 'Yes, of course!').toLowerCase();
    }

    if (playAgain !== 'yes' && playAgain !== 'yes, of course!') {
        console.log('Fine then. Be that way.');
    }*/
}

/*if (playAgain === 'yes' || playAgain === 'yes, of course!') {
    if (humanScore > computerScore) {
        console.log('Human won. Don\'t let it get to your head.');
    } else if (humanScore < computerScore) {
        console.log('Computer won. As it should be.');
    }
}*/