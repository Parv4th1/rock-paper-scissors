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
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection)
    {
        return 'Tie!'
    }
    else if(playerSelection == 'rock')
    {
        if(computerSelection == 'scissors')
            return 'You win! Rock beats Scissors'
        else
            return 'You lose! Paper beats Rock'
    }
    else if(playerSelection == 'scissors')
    {
        if(computerSelection == 'paper')
            return 'You win! Scissors beats Paper'
        else
            return 'You lose! Rock beats Scissors'
    }
    else if(playerSelection == 'paper')
    {
        if(computerSelection == 'rock')
            return 'You win! Paper beats Rock'
        else
            return 'You lose! Scissors beats Paper'
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));