let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    console.log("User's choice", userChoice);
    //now to generate computer choice ->modula
    const compChoice = genComputerChoice();
    console.log("Computer's choice", compChoice);
    if (userChoice == compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors and paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor ") {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
const genComputerChoice = () => { //rocl,paper,scissor
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draw = () => {
    console.log("GAME WAS DRAW!");
    msg.innerText = "DRAW!! Play Again";
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        CompScorePara.innerText = compScore;
        console.log("You Lost!!");
        msg.innerText = `You Lost!! Your ${userChoice} doesnot beats ${compChoice} `;
        msg.style.backgroundColor = "red";
    }
}