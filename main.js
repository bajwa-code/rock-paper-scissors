function getComputerChoice() {
    const computerChose = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*computerChose.length);
    console.log(computerChose[randomIndex]);
    return computerChose[randomIndex];
}

getComputerChoice();

function getHumanChoice() {
    const userChose = prompt('Enter rock, paper, or scissors:').toLowerCase();
    console.log(userChose);
    return userChose;
}

getHumanChoice();

const humanScore = 0;
const computerScore  = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!'; 
    } 
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            
        return 'You win!';
    } else {
        return 'Computer win!';
    }

}