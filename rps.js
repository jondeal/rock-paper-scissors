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


function playRound() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();

    console.log(playerChoice, computerChoice);
    
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

    const results = document.querySelector(".results");
    const vs = document.getElementById("vs");
    const placeholder = document.getElementsByClassName("placeholder");

    results.replaceChild(playerResultsIcon, placeholder[0]);
    results.replaceChild(computerResultsIcon, placeholder[0]);

    // results.insertBefore(playerResultsIcon, vs);
    // results.appendChild(computerResultsIcon);

    const winMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    const loseMessage = `Womp womp. ${computerChoice} beats ${playerChoice}`;

    let winner;

    if (computerChoice === playerChoice) {
        alert(`It's a tie. You both chose ${computerChoice}.`);
        winner = "tie";
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        alert(winMessage);
        winner = "player";
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        alert(winMessage);
        winner = "player";
    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        alert(winMessage);
        winner = "player";
    } else {
        alert(loseMessage);
        winner = "computer";
    }
    
    return winner;
    
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;
    
    let winner = playRound(computerChoice, playerChoice);
    if (winner === "player") {
        ++playerWinCount;
    } else if (winner === "computer") {
        ++computerWinCount;
    } else {
        ++tieCount;
    }

    alert(`The current score is: Player ${playerWinCount}, Computer ${computerWinCount}, Tie ${tieCount}`);
}

const element = document.getElementsByClassName("button");
for (i = 0; i < element.length; i++) {
    element[i].addEventListener("click", playRound);
}