const startButton = document.querySelector('.start-button');
const messageDisplay = document.querySelector('.message-para');
const sumDisplay = document.querySelector('.sum-para');
const cardDisplay = document.querySelector('.cards-para');
const newCard = document.querySelector('.new-card');
const playerDisplay = document.querySelector('.player-chips');

// Player display
let player = {
    name : 'Player One',
    money : 132,
}


playerDisplay.innerText = player.name + ': $' + player.money;

// random card generator
const getRandomCard = () => {
    let randomNumbers = Math.floor(Math.random() * 13) + 1;
    if ( randomNumbers > 10 ) {
        return 10;
    } else if ( randomNumbers === 1) {
        return 11;
    } else {
        return randomNumbers;
    }
};


let cards = []
let sum = 0;
let hasBlackJack = false;
let message = '';
let isAlive = false;

console.log(message);
//  Start game button
const buttonStart = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum =  firstCard + secondCard;
    renderGame();
}

// Render game
const renderGame = () => {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?:)';
    } else if ( sum === 21) {
        message = 'Wohhooo! You got BlackJAck!:o';
        hasBlackJack = true;
    } else {
        message = 'You are out of the game! :(';
        isAlive = false;
    }
  messageDisplay.textContent = message;
  sumDisplay.textContent ='Sum: ' + sum;
  cardDisplay.textContent = 'Cards: ';
  for ( let i = 0; i < cards.length; i++) {
    cardDisplay.textContent += cards[i] + ' ';
}
}

// New card button

const newCardButton = () => {
    if (isAlive === true && hasBlackJack === false) {
      
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard)
        renderGame();

    }
 
}

// Event Listener

startButton.addEventListener('click', buttonStart);
newCard.addEventListener('click', newCardButton);