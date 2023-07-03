function getComputerChoice(){
    const computerSelection = ["Rock", "Paper", "Scissors"]
    return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}
console.log(getComputerChoice())
function getPlayerChoice(){
    const playerSelection = ["Rock", "Paper", "Scissors"]
    return playerSelection[Math.floor(Math.random() * playerSelection.length)]
    }
console.log(getPlayerChoice())

function playGround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"}
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You win!"}
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win!"} 
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win!"} 
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "Computer wins!"}
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer win!"} 
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer win!"} 
    

}


console.log(playGround(getPlayerChoice(), getComputerChoice()));
           