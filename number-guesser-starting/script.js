let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// my code here
const generateTarget = () => Math.floor(Math.random() * 10);
console.log(generateTarget());

const compareGuesses = (userGuess, computerGuess, secretTargetNum) => {
    if (Math.abs(computerGuess - secretTargetNum) >  Math.abs(userGuess - secretTargetNum)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++ ;

updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);
