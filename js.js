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
console.log(getComputerChoice());