function getComputerChoice() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*computerChoice.length);
    console.log(computerChoice[randomIndex]);
    return computerChoice[randomIndex];
}

getComputerChoice();

function getHumanChoice() {
    const userChose = prompt('Enter rock, paper, or scissors:'). toLowerCase();
    console.log(userChose);
    return userChose;
}

getHumanChoice();

const humanScore = 0;
const computerScore  = 0;