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

function reset(playerScore,computerScore){
    playerScore.textContent = 0;
    computerScore.textContent = 0;

}



const buttons = document.querySelectorAll('.button');
const playerScore = document.querySelector('.playerScore h1');
const computerScore = document.querySelector('.computerScore h1');
const resetButton = document.querySelector('#reset');
const divResult = document.querySelector('#endResult');





buttons.forEach((button)=>{ 
    button.addEventListener('click',function(e){
        let playerSelection = button.getAttribute('data-option');
        const roundResult = document.querySelector('#roundResult');
        computerSelection = computerPlay();
        let result = (singleRound(playerSelection,computerSelection));

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
  
        if(playerScore.textContent > 4) {
            console.log('dd');
            divResult.textContent = "The player has WON !";
        }    
        else if (computerScore.textContent > 4){
            console.log('aa');
            divResult.textContent = "The computer has WON !";
        } 



    })
})

resetButton.addEventListener('click', ()=>{
    reset(playerScore,computerScore);
});
 








    
    





