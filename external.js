function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playerPlay(){
    let option = prompt('Enter your option');
    option = option.toLowerCase();
    return option;
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



function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        const playerSelection = playerPlay()
        const computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        let result = singleRound(playerSelection,computerSelection);
        if(result == 'win'){
            playerScore++;
            console.log(`You Win, ${playerSelection} beats ${computerSelection}`);
        }
        else if (result == 'lose'){
            computerScore++;
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
        }
        else {
            console.log('It is Draw'); 
        }
    }
    if(playerScore > computerScore){
        console.log('The Player has WON!')
    }
    else if (playerScore < computerScore){
        console.log('The Computer has WON!');
    }
    else{
        console.log('It is Draw');
    }
}

game()

