const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
rockBtn.addEventListener("click",playRound("Rock"));
paperBtn.addEventListener("click",playRound("Paper"));
scissorsBtn.addEventListener("click",playRound("Scissors"));
function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3)
    switch(choice)
    {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        default:
            return 'Something wrong with comper choice'
    }
}
let playRound = function(playerSelection)
{
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection)
    {
        return -1
    }
    else if(playerSelection == 'rock')
    {
        if(computerSelection == 'scissors')
            return 1
        else
            return 0
    }
    else if(playerSelection == 'scissors')
    {
        if(computerSelection == 'paper')
            return 1
        else
            return 0
    }
    else if(playerSelection == 'paper')
    {
        if(computerSelection == 'rock')
            return 1
        else
            return 0
    }
}
function playGame()
{
    let pscore = 0
    let cscore = 0
    for(let round=1; round<= 5; round=round+1)
    {
        let compChoice = getComputerChoice();
        let playerChoice = prompt("Enter your choice: ");
        let result = playRound(playerChoice, compChoice)
        if(result==0)
        {
            cscore+=1
            console.log('You lose this round! '+compChoice+' beats '+playerChoice)
        }
        else if(result==1)
        {
            pscore+=1
            console.log('You win this round! '+playerChoice+' beats '+compChoice)
        }
        else
            console.log('This round is a tie!')
    }
    if(pscore==cscore)
        return 'Tie'
    else if(pscore>cscore)
        return 'Player wins'
    else
        return 'Computer wins'
}
console.log(playGame())