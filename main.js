// random number generate
const guessNumber = Math.floor((Math.random()*10)+1);

// get number Entered by user
function checkNumber(){
    let userGuess = document.getElementById("userInput").value;
    let userGuessNumber = Number(userGuess)
    
        if(userGuessNumber > guessNumber) document.getElementById("result").textContent = "Too high, Try again!";
        else if( userGuessNumber < guessNumber) document.getElementById("result").textContent = "Too low, Try again!";
        else{ 
            document.getElementById("result").textContent = "✅ Correct! You guessed it!";  
            document.getElementById("result").style.color = "green";
            // added for ani
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
            document.querySelector(".card").classList.add("celebrate");

        }
}





