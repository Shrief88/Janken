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



const buttons = document.querySelectorAll('.button');
    buttons.forEach((button)=>{ 
        button.addEventListener('click',function(e){
            let playerSelection = button.getAttribute('data-option');
            const roundResult = document.querySelector('#roundResult');
            const playerScore = document.querySelector('.playerScore h1');
            const computerScore = document.querySelector('.computerScore h1');
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




        })
    })
    





