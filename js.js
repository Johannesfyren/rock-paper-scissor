function getComputerChoice() { //Computer generates an answer
    chooseSign = Math.floor(Math.random()*3);
    
    switch (chooseSign){
        case 0: return "rock"
        break;
        case 1: return "paper"
        break;
        case 2: return "scissor"
        break;
    }
}

function playGame(playerSelected, computerSelected){
    const playerSelection = playerSelected.toLowerCase();
    const computerSelection = computerSelected.toLowerCase();

    if (playerSelection == computerSelection){ // TIE
        return `That's a tie! You both chose ${computerSelection}`;
    }

    if (playerSelection == "rock" && computerSelection == "paper"){ //if statement to determine rock/paper
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return `Player won! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){ //if statement to determine scissor/paper
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "scissor" && computerSelection == "paper"){
        return `Player won! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){ //if statement to determine scissor/rock
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "rock" && computerSelection == "scissor"){
        return `Player won! ${playerSelection} beats ${computerSelection}`;
    }

}
console.log(playGame("scissOr",getComputerChoice()));

