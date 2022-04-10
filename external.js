function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function singleRound(playerSelection,computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == 'scissors'&& computerSelection == 'paper' ){
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return "You Win! Paper beats Rock"
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors'){
        return "You Lose! Rock beats Scissors";
    }
    else if(computerSelection == 'scissors'&& playerSelection == 'paper' ){
        return "You Lose! Scissors beats Paper";
    }
    else if(computerSelection == 'paper' && playerSelection == 'rock'){
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == computerSelection){
        return 'It is a Draw'
    }
}

