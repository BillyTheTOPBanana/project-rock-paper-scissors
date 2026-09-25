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

function playGame() {
    //play 5 rounds and log the result
    
    function playRound(computerChoice, humanChoice) {
        //evaluate and log the result; and update scores

        //the instructions said to declare playRound inside of playGame, which is weird to me, but there ya go.

        if (computerChoice === humanChoice) {
        console.log(`Tie! You both chose ${capitalizeInitialOnly(computerChoice)}!`)
        }
        else if (
            (computerChoice === "rock"     && humanChoice === "scissors") ||
            (computerChoice === "paper"    && humanChoice === "rock")     ||
            (computerChoice === "scissors" && humanChoice === "paper"))
        {
            ++computerScore;
            console.log(`You lose! ${capitalizeInitialOnly(computerChoice)} beats ${capitalizeInitialOnly(humanChoice)}!`);
        }
        else if (
            (humanChoice === "rock"     && computerChoice === "scissors") ||
            (humanChoice === "paper"    && computerChoice === "rock")     ||
            (humanChoice === "scissors" && computerChoice === "paper"))
        {
            ++humanScore;
            console.log(`You win! ${capitalizeInitialOnly(humanChoice)} beats ${capitalizeInitialOnly(computerChoice)}!`);
        }
        else console.assert(false);
    }
    
    let humanScore = 0;
    let computerScore = 0;
    
    for (let round=1; round<=5; round++) {        
        console.log(`Round ${round}:`);
        playRound(getComputerChoice(), getHumanChoice());
    }
    
    let messageBuffer = `Final result:\nYour score: ${humanScore}\nComputer score: ${computerScore}\nAfter 5 rounds, `;
    if (humanScore === computerScore) {
        messageBuffer += "it's a tie! 🤷";
    }
    else if (humanScore > computerScore) {
        messageBuffer += "you won! 😁";
    }
    else {
        messageBuffer += "you lost! 😢";
    }
    console.log(messageBuffer);
}

playGame();