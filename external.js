function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}


function singleRound(playerSelection,computerSelection){
    const Results = ['win','lose','Draw']
     
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('"You Win! Rock beats Scissors"');
        return Results[0];
    }
    else if (playerSelection == 'scissors'&& computerSelection == 'paper' ){
        console.log('"You Win! Scissors beats Paper"');
        return Results[0];
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You Win! Paper beats Rock');
        return Results[0];
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors'){
        console.log('You Lose! Rock beats Scissors');
        return Results[1];
    }
    else if(computerSelection == 'scissors'&& playerSelection == 'paper' ){
        console.log('You Lose! Scissors beats Paper');
        return Results[1];
    }
    else if(computerSelection == 'paper' && playerSelection == 'rock'){
        console.log('You Lose! Paper beats Rock');
        return Results[1];
    }
    else if (playerSelection == computerSelection){
        console.log('It is a Draw');
        return Results[2];
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));

