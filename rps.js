const TARGET_SCORE = 5;

const mainMessage     = document.querySelector("#main-message");
const button_rock     = document.querySelector("#rock");
const button_paper    = document.querySelector("#paper");
const button_scissors = document.querySelector("#scissors");
const scores          = document.querySelector("#scores");
const progressMessage = document.querySelector("#progress-message");
const resetButton     = document.querySelector("#reset-button");

button_rock    .addEventListener("click", e => playRound(getComputerChoice(), "rock"));
button_paper   .addEventListener("click", e => playRound(getComputerChoice(), "paper"));
button_scissors.addEventListener("click", e => playRound(getComputerChoice(), "scissors"));
resetButton    .addEventListener("click", e => resetGame());

let humanScore;
let computerScore;
resetGame();

function getComputerChoice() {
    //randomly return "rock", "paper", or "scissors"

    const randomFloat = Math.random();
    const randomInt = randomFloat * 3;
    if (randomInt < 1) {
        return "rock";
    }
    else if (randomInt < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    //return the user's choice. ASSUME VALID INPUT as per TOP's instructions, but allow any capitalization

    return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function capitalizeInitialOnly(str) {
    //helper function

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function displayScores(_computerScore, _humanScore) {
    const scoreDiv = scores;
    scoreDiv.innerHTML = `Computer: ${_computerScore}<br>Human: ${_humanScore}`;
}

function playRound(computerChoice, humanChoice) {
    //evaluate and report the result; and update scores

    const mainMessage = mainMessage;
    const progressMessage = progressMessage;

    if (computerChoice === humanChoice) {
        mainMessage.textContent = `Tie! You both chose ${capitalizeInitialOnly(computerChoice)}!`;
    }
    else if (
        (computerChoice === "rock"     && humanChoice === "scissors") ||
        (computerChoice === "paper"    && humanChoice === "rock")     ||
        (computerChoice === "scissors" && humanChoice === "paper"))
    {
        ++computerScore;
        mainMessage.textContent = `You lose! ${capitalizeInitialOnly(computerChoice)} beats ${capitalizeInitialOnly(humanChoice)}!`;
    }
    else if (
        (humanChoice === "rock"     && computerChoice === "scissors") ||
        (humanChoice === "paper"    && computerChoice === "rock")     ||
        (humanChoice === "scissors" && computerChoice === "paper"))
    {
        ++humanScore;
        mainMessage.textContent = `You win! ${capitalizeInitialOnly(humanChoice)} beats ${capitalizeInitialOnly(computerChoice)}!`;
    }
    else console.assert(false);

    displayScores(computerScore, humanScore);

    if (computerScore >= TARGET_SCORE || humanScore >= TARGET_SCORE) {
        resetButton.removeAttribute("hidden");
        button_rock    .setAttribute("disabled","");
        button_paper   .setAttribute("disabled","");
        button_scissors.setAttribute("disabled","");
    }
    
    progressMessage.textContent = computerScore >= TARGET_SCORE ? "The computer has won the game! I, for one, welcome our cybernetic overlords."
    : humanScore >= TARGET_SCORE ? "You have beaten the computer! There is still hope for humanity."
    : "First to 5 wins...";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    mainMessage.textContent = "Choose your weapon:";
    scores.innerHTML = "";
    progressMessage.textContent = "";
    resetButton.setAttribute("hidden","");
    button_rock    .removeAttribute("disabled");
    button_paper   .removeAttribute("disabled");
    button_scissors.removeAttribute("disabled");
}