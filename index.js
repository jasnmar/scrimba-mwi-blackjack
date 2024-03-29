let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let message;

function setupPage() {
  const sgBtn = document.getElementById("startGame");
  const ncBtn = document.getElementById("new-card");
  sgBtn.addEventListener("click", renderGame);
  ncBtn.addEventListener("click", newCard);
}
setupPage();

const messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  let newNumber = Math.floor( Math.random()*13 ) + 1
  console.log(newNumber);
  if (newNumber>10) {
      newNumber=10
  } else if (newNumber === 1 ) {
      newNumber = 11;
  }
  console.log(newNumber);
  return newNumber
}

function renderGame(event) {
  event.preventDefault();
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
  console.log("Drawing a new card");
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  renderGame();
}
