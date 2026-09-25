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

let humanScore = 0;
let computerScore = 0;
