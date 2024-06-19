//store random number generator
let secretNumber = Math.floor(Math.random()*100)+1;

let guessInput = document.getElementById("guess");

let message = document.getElementById("message");

//checkGuess function is called when the user clicks the guess btn and compare the user's guess to the secret number
function checkGuess(){

    let guess = parseInt(guessInput.value);

    if(guess === secretNumber){
        message.innerHTML = "Congrtulations! you guessed the Secret Number!";
        message.style.color = "green";
    }

    else if(guess < secretNumber){
        message.innerHTML = "Too Low, try Again.";
        message.style.color = "red";
    }

    else if(guess > secretNumber){
        message.innerHTML = "Too High, try Again.";
        message.style.color = "red";
    }
}

//resetGame function is called when user clicks the reset btn
function resetGame(){
    secretNumber = Math.floor(Math.random()*100) +1;
    guessInput.value = "";
    message.innerHTML = "";
}