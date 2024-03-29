let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
// 1. Declare a variable called message and assign its value to an empty string
let message;
let player = {
  name: "jason",
  chips: 145
}

function setupPage() {
  const sgBtn = document.getElementById("startGame");
  const ncBtn = document.getElementById("new-card");
  sgBtn.addEventListener("click", startGame);
  ncBtn.addEventListener("click", newCard);
}
setupPage();

function startGame(event) {
  event.preventDefault();
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();

}

const messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let newNumber = Math.floor( Math.random()*13 ) + 1
  if (newNumber>10) {
      newNumber=10
  } else if (newNumber === 1 ) {
      newNumber = 11;
  }
  return newNumber
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "
  for (let i=0; i< cards.length;i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if(isAlive && !hasBlackJack) {
    console.log("Drawing a new card");
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }

}
