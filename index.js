let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message;

function setupPage(){
    const sgBtn = document.getElementById('startGame');
    sgBtn.addEventListener("click", startGame);
}
setupPage();

const messageEl = document.getElementById("message-el")

function startGame(event) {
    event.preventDefault();
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message;
}
