function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function singleRound(playerSelection,computerSelection){
    const Results = ['win','lose','Draw']
     
    if(playerSelection == 'rock' && computerSelection == 'scissors'|| playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        return Results[0];
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'scissors' && playerSelection == 'paper' || computerSelection == 'paper' && playerSelection == 'rock'){
        return Results[1];
    }
    else if (playerSelection == computerSelection){
        return Results[2];
    }
}

function reset(buttons){
    let playerScore = document.querySelector('.playerScore h1');
    let computerScore = document.querySelector('.computerScore h1');
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    buttons.forEach(button=>{
        button.disabled = false;
    })
}

function gameResult(playerScore,computerScore,buttons){
    const divResult = document.querySelector('#endResult');
    if(playerScore.textContent> 4 || computerScore .textContent>4){
        buttons.forEach((button)=>{
            button.disabled =true;
        })
        if(playerScore.textContent>4) divResult.textContent = "The player has WON !";
        else if(computerScore.textContent > 4) divResult.textContent = "The computer has WON !";
    }
}




const buttons = document.querySelectorAll('.button');
const resetButton = document.querySelector('#reset');




buttons.forEach((button)=>{ 
    button.addEventListener('click',()=>{
        const playerSelection = button.getAttribute('data-option');
        const computerSelection = computerPlay();
        let result = (singleRound(playerSelection,computerSelection));
        

        let playerScore = document.querySelector('.playerScore h1');
        let computerScore = document.querySelector('.computerScore h1');
        const roundResult = document.querySelector('#roundResult');
       
        if(result == 'win'){
            playerScore.textContent++;
            roundResult.textContent = `You Win, ${playerSelection} beats ${computerSelection}`;
        }
        else if (result == 'lose'){
            computerScore.textContent++;
            roundResult.textContent = `You Lose, ${computerSelection} beats ${playerSelection}`
        }
        else {
            roundResult.textContent = 'It is a Draw';
        }

        gameResult(playerScore,computerScore,buttons);
    })
})

resetButton.addEventListener('click', ()=>{
    reset(buttons);
});
 








    
    





