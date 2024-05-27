// Global Variables
let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message;
let player = {
  name: "jason",
  chips: 145
}

const messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

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
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

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
    player.chips = player.chips + 5;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips = player.chips - 5;
  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + ": $" + player.chips;
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
