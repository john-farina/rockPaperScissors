
function computerPlay (){
   let random = (Math.random()*5)+1;
   if (random < 2) {
   return("Rock");
   }    else if (random > 2 && random < 4) {
        return(`Paper`);
   }        else {
            return(`Scissors`)
   }
}

function playRound(playerSelection, computerSelection){
        //ROCK & ROCK
        if(playerSelection == `rock` && computerSelection == `Rock`) {
                return("TIE! Rock Doesnt Beat Rock!");
    }   //ROCK & SCISSORS
        else if (playerSelection == "rock" && computerSelection == "Scissors") {
                return(`You Win! Rock Beats Scissors!`);
    }   //ROCK & PAPER
        else if (playerSelection == `rock` && computerSelection == `Paper`) {
                return(`You Loose! Paper Beats Rock!`);
    }   //PAPER & ROCK
        else if (playerSelection == `paper` && computerSelection == `Rock`) {
                return(`You Win! Paper Beats Rock!`);
    }   //PAPER & PAPER
        else if(playerSelection == `paper` && computerSelection =='Paper') {
                return(`TIE! Paper Cannot Beat Paper!`);
    }   //PAPER & SCISSORS
        else if(playerSelection == 'paper' && computerSelection =='Scissors') {
                return(`You Lose! Scissors Cuts Paper!`)
        }
        //SCISSORS & ROCK
        else if(playerSelection == `scissors` && computerSelection == `Rock`) {
                return(`You Lose! Rock Crushes Scissors!`)
        }
        //SCISSORS & PAPER
        else if (playerSelection == `scissors` && computerSelection == `Paper`){
                return(`You Win! Scissors Cuts Paper`)
        }
        //SCISSORS & SCISSORS
        else if (playerSelection == `scissors` && computerSelection == `Scissors`){
                return(`TIE! Scissors Cannot Cut Scissors`)
        }
        else {
                return(`Please input either Rock, Paper, or Scissors`);
    }
}

//PROMPT TO HAVE USERS TYPE IN THEIR CHOICE
// const playerPrompt = prompt("Please Enter Rock Paper or Scissors","Rock");

//MAKES THE PROMPTS ANSWER INTO LOWER CASE
// const playerSelection = playerPrompt.toLowerCase();

const playerSelection = `rock`;
//GIVES COMPUTERSELECTION THE CODE FOM COMPUTERPLAY
const computerSelection = computerPlay();
//MAKES IT SHOW UP IN TERMINAL
// console.log(playRound(playerSelection, computerSelection));




//PSUEDO CODE FOR A ROUND FUNCTION. no clue how to tho

// function GAME(){
//     playRound(); FOR 5 ROUNDS

// }

// console.log(game());