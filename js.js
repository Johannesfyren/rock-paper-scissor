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

function playRound(playerSelected, computerSelected){
    const playerSelection = playerSelected.toLowerCase();
    const computerSelection = computerSelected.toLowerCase();
   

    if (playerSelection == computerSelection){ // TIE
        
        console.log(`That's a tie! You both chose ${computerSelection}`);
        return 2;
    }

    if (playerSelection == "rock" && computerSelection == "paper"){ //if statement to determine rock/paper
        
        console.log(`Computer won! ${computerSelection} beats ${playerSelection}`);
        return 0; //Computer won
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`);
        return 1; //Player won
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){ //if statement to determine scissor/paper
        
        console.log(`Computer won! ${computerSelection} beats ${playerSelection}`);
        return 0; //Computer won
    } else if(playerSelection == "scissor" && computerSelection == "paper"){
        
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`);
        return 1; //Player won
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){ //if statement to determine scissor/rock
       
        console.log(`Computer won! ${computerSelection} beats ${playerSelection}`);
        return 0; //Computer won
    } else if(playerSelection == "rock" && computerSelection == "scissor"){
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`);
        return 1; //Player won
        
    }

}

function playGame(){
    let countComputerWins=0;
    let countPlayerWins=0;


    // for (let i=0; i<5;i++){//Playing a game of 5 rounds
    //     let userChoice = prompt("enter your guess");
    //     let result = playRound(userChoice, getComputerChoice());
        
    //     switch (result){
    //         case 0: countComputerWins +=1;
    //         break;
    //         case 1: countPlayerWins +=1;
    //         break;
    //         default:
    //         break;
    
    //     }
    // }

    if (countComputerWins < countPlayerWins){
        console.log(`The player wins with ${countPlayerWins} over computer's ${countComputerWins}`)
    } else if (countComputerWins > countPlayerWins){
        console.log(`The computer wins with ${countComputerWins} over player's ${countPlayerWins}`)
    } else console.log("Its a tie!");
    

}
//playGame();



const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

// btnRock.addEventListener("click", playRound("rock", toString(getComputerChoice)));
// btnPaper.addEventListener("click", playRound("paper", toString(getComputerChoice)));
// btnScissor.addEventListener("click", playRound("scissor", toString(getComputerChoice)));
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  btnScissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
  });
