let firstCard = 3;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want a new card?");
} else if (sum === 21) {
    console.log("Yeah, you have 21");
} else {
    console.log("You have more than 21, busted")
}

console.log(sum);