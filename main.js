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
console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();;
    if(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
    } else {
        return console.log(`You chose: ${choice}`);
    }
    
}

getHumanChoice();