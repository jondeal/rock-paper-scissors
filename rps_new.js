function getComputerChoice() {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomInteger = getRandomInteger(0, 2);
    let computerChoice;

    if (randomInteger === 0) {
        computerChoice = "rock";
    } else if (randomInteger === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");

    playerChoice = playerChoice.toLowerCase();

    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("Huh?");
        getPlayerChoice();
    } else {

        return playerChoice;
    }
}




function playRound(computerChoice, playerChoice) {
    
    const winMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    const loseMessage = `Womp womp. ${computerChoice} beats ${playerChoice}`;

    let winner;

    if (computerChoice === playerChoice) {
        alert(`It's a tie. You both chose ${computerChoice}.`);
        winner = "tie";
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        alert(winMessage);
        winner = "player";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        alert(winMessage);
        winner = "player";
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
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
    for (let i = 0;  i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
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
    
    
}

game();