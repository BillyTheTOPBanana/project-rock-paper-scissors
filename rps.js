//randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
    /**
     * Plan:
     * Does JS have a built-in random integer function? If so, use it.
     * If it just has a [0,1) RNG function, then multiply it by 3
     * case n<1: return "rock"
     * case 1<=n<2: return "paper"
     * case 2<=n<3: return "scissors"
     * 
     * To test:
     * Using DevTools, put a break inside the function then
     * using the console as a REPL, run console.log(getCOmputerChoice())
     * and make sure:
     * - randomInt is between 0 and 3
     * - the correct string is being returned
     * 
     * Results:
     * It works! And DevTools is so easy and fast to use! I loooooove
     * how variable values are shown to the right of their mention in the code
     *
     */

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

//return the user's choice. ASSUME VALID INPUT as per TOP's instructions
function getHumanChoice() {
    /**
     * Plan:
     * use prompt(). trivial, right?
     * 
     * Testing:
     * Problem:
     * prompt() is not supported in the Live Preview console, apparently.
     * Solution:
     * Open the HTML in Chrome and use the DevTools console there
     */

    return prompt("Enter rock, paper, or scissors").toLowerCase();
}

//evaluate and log the result; and update scores
function playRound(computerChoice, humanChoice) {
    /**
     * Plan:
     * Since there aren't that many possibilities, let's be dumb and
     * just account for every combination of choices. We can be slightly
     * more concise by first checking for ties.
     * 
     * For the log, I want to acknowledge what each player chose, with
     * initial-capitalization
     */

    // if (computerChoice === humanChoice) {
    //     console.log(`Tie! You both chose ${capitalizeInitialOnly(computerChoice)}!`)
    // }
    // else if (computerChoice === "rock") {
    //     if (humanChoice === "paper") {
    //         console.log("You win! Paper beats Rock!");
    //         ++humanScore;
    //     }
    //     else if(humanChoice === "scissors") {
    //         console.log("You lose! Rock beats Scissors!");            
    //         ++computerScore;
    //     }
    // }
    // else if (computerChoice === "paper") {
    //     if (humanChoice === "scissors") {
    //         console.log("You win! Scissors beats Paper!");
    //         ++humanScore;
    //     }
    //     else if(humanChoice === "rock") {
    //         console.log("You lose! Paper beats Rock!");            
    //         ++computerScore;
    //     }
    // }
    // else if (computerChoice === "scissors") {
    //     if (humanChoice === "rock") {
    //         console.log("You win! Rock beats Scissors!");
    //         ++humanScore;
    //     }
    //     else if(humanChoice === "paper") {
    //         console.log("You lose! Scissors beats Paper!");            
    //         ++computerScore;
    //     }
    // }
    // else console.assert(false);

    if (computerChoice === humanChoice) {
       console.log(`Tie! You both chose ${capitalizeInitialOnly(computerChoice)}!`)
    }
    else if ( (computerChoice === "rock"     && humanChoice === "scissors") ||
              (computerChoice === "paper"    && humanChoice === "rock")     ||
              (computerChoice === "scissors" && humanChoice === "paper") )
    {
        ++computerScore;
        console.log(`You lose! ${capitalizeInitialOnly(computerChoice)} beats ${capitalizeInitialOnly(humanChoice)}!`);
    }
    else if ( (humanChoice === "rock"     && computerChoice === "scissors") ||
              (humanChoice === "paper"    && computerChoice === "rock")     ||
              (humanChoice === "scissors" && computerChoice === "paper") )
    {
        ++humanScore;
        console.log(`You win! ${capitalizeInitialOnly(humanChoice)} beats ${capitalizeInitialOnly(computerChoice)}!`);
    }
    else console.assert(false);
}

function capitalizeInitialOnly(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

playRound(getComputerChoice(), getHumanChoice());
