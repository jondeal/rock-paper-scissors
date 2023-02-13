let roundCount = 0;
let playerWinCount = 0;
let computerWinCount = 0;

const buttons = document.getElementsByTagName("button");
const results = document.querySelector(".results");
const bodyContainer = document.querySelector(".body-container");
const resultsMessage = document.getElementById("results-message");
const resultsIcons = document.getElementsByClassName("results-icon");
const selectionMessage = document.getElementById("selection-message");
const gameEndMessage = document.getElementById("game-end-message");

function getComputerChoice() {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomInteger = getRandomInteger(0, 2);
    let computerChoice;

    if (randomInteger === 0) {
        computerChoice = "Rock";
    } else if (randomInteger === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function resetRound() {
    selectionMessage.style.visibility = "visible";
    resultsMessage.innerText = "";

    for (const button of buttons) {
        if (button.disabled === true) {
            button.disabled = false;
            button.classList.add("hover");
        } else {
            button.style.border = "";
        }
    }

    for (const result of resultsIcons) {
        result.innerText = "?";
    }
}

function playRound() {
    selectionMessage.style.visibility = "hidden";

    this.style.border = "4px solid gold";

    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== this.id) {
            buttons[i].disabled = true;
            // removes hover effect on unselected buttons by removing their class
            buttons[i].removeAttribute("class");
        }
    }

    const playerChoice = this.id;
    const computerChoice = getComputerChoice();

    let playerChoiceIcon;
    let computerChoiceIcon;

    if (this.id === "Rock") {
        playerChoiceIcon = "🪨";
    } else if (this.id === "Paper") {
        playerChoiceIcon = "📜";
    } else {
        playerChoiceIcon = "✂";
    }

    if (computerChoice === "Rock") {
        computerChoiceIcon = "🪨";
    } else if (computerChoice === "Paper") {
        computerChoiceIcon = "📜";
    } else {
        computerChoiceIcon = "✂";
    }

    resultsIcons[0].innerText = playerChoiceIcon;
    resultsIcons[1].innerText = computerChoiceIcon;

    const winMessage = "You win :)";
    const loseMessage = "You lose :(";
    const tieMessage = "It's a tie :|";


    let winner;

    if (computerChoice === playerChoice) {
        resultsMessage.innerText = tieMessage;
        winner = "tie";
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        resultsMessage.innerText = winMessage;
        winner = "player";
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        resultsMessage.innerText = winMessage;
        winner = "player";
    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        resultsMessage.innerText = winMessage;
        winner = "player";
    } else {
        resultsMessage.innerText = loseMessage;
        winner = "computer";
    }

    const dots = document.getElementsByClassName("dot");
    

    if (winner === "player") {
        dots[roundCount].style["background-color"] = "lightgreen";
        playerWinCount++;
        } else if (winner === "computer") {
            dots[roundCount].style["background-color"] = "red";
            computerWinCount++;
        } else {
            dots[roundCount].style["background-color"] = "lightgray";
        }
    
    if (roundCount < 4) {
        setTimeout(resetRound, 2000);
        ++roundCount;
    } else {
        if (playerWinCount > computerWinCount) {
            gameEndMessage.innerText = `You won ${playerWinCount} to ${computerWinCount}!`;
        } else if (computerWinCount > playerWinCount) {
            gameEndMessage.innerText = `You lost ${computerWinCount} to ${playerWinCount}.`;
        } else {
            gameEndMessage.innerText = `You tied ${playerWinCount} to ${computerWinCount}.`;
        }
    };

}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playRound)
};