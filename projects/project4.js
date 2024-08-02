let randomNumber = parseInt(Math.random()*100 + 1);

const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    submitButton.addEventListener("click", function(e){
        e.preventDefault();//to prevent number go to server as we will use it
        const guess = parseInt(userInput.value);
         console.log(guess);
        
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("not valid number");
    }
    if (guess < 1) {
        alert(" number less than zero is not valid");
    }
    if (guess >100 ) {
        alert(" number greater than 100 is not valid");
    }else{
        prevGuess.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`game OVER . the number was${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
   
    }

}
function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`you guessed the right number as ${randomNumber}`)
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("the guess is less than the number")
        
    }
    else if (guess > randomNumber) {
        displayMessage("the guess is more than the number")
        
    }
}
function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += ` ${guess} , `;
    numGuesses++;
    remainingGuesses.innerHTML = `${10- numGuesses}`
    
}
function displayMessage(message) {
    lowHigh.innerHTML = `<h2>${message}</h2>`
    
}
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "")
    p.classList.add("button");
    p.innerHTML = `<h3 id = "newGame">START NEW GAME</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e){
        randomNumber =parseInt(math.random()*100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remainingGuesses.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p)
        
        
        playGame = true
    })
}