let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const gameRPS = document.querySelectorAll(".game");

const msg = document.querySelector("#move");

const genCompChoice = () => {
               const options = ["rock","paper","scissors"];
               const randomIndx = Math.floor(Math.random()*3);
               return options[randomIndx];
}

const drawGame = () => {
               msg.innerText = "Game was Draw! Play Again";
               msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin , userChoice , compChoice) => {
if (userWin){
               userScore++; 
               userScorePara.innerText = userScore;
               msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
               msg.style.backgroundColor = "green";
} else{
               compScore++;
               compScorePara.innerText = compScore;
               msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
               msg.style.backgroundColor = "red";
               
}
}

const playGame = (userChoice) => {
               console.log("User Choice", userChoice);
               const compChoice = genCompChoice();
               console.log("Computer Choice", compChoice);
               if ( userChoice === compChoice){
               drawGame();
               } else {
                              let userWin = true;
                              if( userChoice === "rock") {
                              userWin = compChoice === "paper" ? false : true;
               } else if ( userChoice === "paper"){
                         userWin =    compChoice === " scissors" ?  false : true;
               } else {
                          userWin =   compChoice === "rock" ? false : true;
               }
               showWinner(userWin , userChoice , compChoice);
}
};

gameRPS.forEach((game) => {
               game.addEventListener("click", () => {
                             const userChoice = game.getAttribute("id");
                              playGame(userChoice);
               });
});

