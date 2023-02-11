let roundCount = 0;
const buttons = document.getElementsByTagName("button");
const results = document.querySelector(".results");
const bodyContainer = document.querySelector(".body-container");
const resultsMessage = document.createElement("p");
const resultsIcons = document.getElementsByClassName("results-icon");


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
    for (const button of buttons) {
        if (button.disabled === true) {
            button.disabled = false;
            button.classList.add("hover");
        } else {
            button.style.border = "";
        }
    }

    bodyContainer.removeChild(resultsMessage);
    for (const result of resultsIcons) {
        result.innerText = "?";
    }


    // winner = "";
    // playerChoice = "";
    // playerChoiceIcon = "";
    // playerResultsIcon = "";

    // computerChoice = "";
    // computerChoiceIcon = "";
    // computerResultsIcon = "";

}

function playRound() {
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

    const playerResultsIcon = document.createElement("p");
    const computerResultsIcon = document.createElement("p");

    playerResultsIcon.innerText = playerChoiceIcon;
    computerResultsIcon.innerText = computerChoiceIcon;

    playerResultsIcon.style["font-size"] = "48px";
    computerResultsIcon.style["font-size"] = "48px";

    resultsIcons[0].innerText = playerResultsIcon.innerText;
    resultsIcons[1].innerText = computerResultsIcon.innerText;

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

    bodyContainer.appendChild(resultsMessage);

    const dots = document.getElementsByClassName("dot");

    if (winner === "player") {
        dots[roundCount].style["background-color"] = "lightgreen";
        } else if (winner === "computer") {
            dots[roundCount].style["background-color"] = "red";
        } else {
            dots[roundCount].style["background-color"] = "lightgray";
        }
    
    if (roundCount < 4) {
        setTimeout(resetRound, 2000);
        ++roundCount;
        console.log(roundCount);
    } else {
        console.log("game should end here");
    };

}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playRound)
};