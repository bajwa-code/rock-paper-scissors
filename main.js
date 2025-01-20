function getComputerChoice(){
    const randomValue =  Math.floor(Math.random()*3); 
    if (randomValue === 0){
        return 'rock';
    } else if (randomValue === 1){
        return 'paper';
    } else {
        return 'scissors';
    }   
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
        choice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    }
    console.log(`You chose: ${choice}`);
    return choice;
    }




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Computer chose: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log(`It's a tie!`);
            return;
        }
    
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) { 
            humanScore++;
            console.log("You win this round!");
    
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }
    }

    while (humanScore < 5 && computerScore < 5) {
        roundCount++;
        console.log(`Round ${roundCount}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore === 5) {
        console.log("Congratulations! You are the overall winner!");
    } else {
        console.log("Computer wins the game! Better luck next time.");
    }
    
    console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
    console.log(`Total Rounds Played: ${roundCount}`);
}

playGame();


